import { useEffect, useLayoutEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ROUTES } from './routes'
import { refresh, start } from './lib/effects'

// useLayoutEffect warns when rendered on the server, where there is no layout.
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

export default function App() {
  const { pathname, hash } = useLocation()
  const first = useRef(true)

  // Listeners that live for the whole visit.
  useEffect(() => start(), [])

  // On each navigation: go to the top (or to the #section), then arm the reveal effects.
  useIsoLayoutEffect(() => {
    if (first.current) {
      first.current = false
    } else if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  useEffect(() => {
    refresh()
  }, [pathname])

  return (
    <>
      <div id="rbx-progress" aria-hidden="true" />
      <Routes>
        {ROUTES.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </>
  )
}
