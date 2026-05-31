import { useState } from "react";
import HomePage from "../Api-Docs/Api-Home-page";
import DocPage from "../Api-Docs/Docpage";

export default function Api() {
  const [activePage, setActivePage] = useState(null);

  if (activePage) {
    return <DocPage card={activePage} onBack={() => setActivePage(null)} />;
  }

  return <HomePage onCardClick={(card) => setActivePage(card)} />;
}