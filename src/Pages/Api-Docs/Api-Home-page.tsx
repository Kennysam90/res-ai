import { useState } from "react";
import { Sparkles, Moon, ArrowRight, Code, Globe, Search } from "lucide-react";
import { cards } from "../Api-Docs/Cardsdata";

export default function ApiHomePage({ onCardClick }) {
  return (
    <div style={s.container}>
      {/* Navbar */}
      <nav style={s.navbar}>
        <div style={s.logo}>
          atlas <span style={s.logoSub}>docs</span>
        </div>
        <div style={s.searchBox}>
          <Search size={13} color="#94a3b8" strokeWidth={2} style={{ flexShrink: 0 }} />
          <input type="text" placeholder="Search Documentation" style={s.searchInput} />
          <kbd style={s.kbd}>⌘K</kbd>
        </div>
        <div style={s.navRight}>
          <button style={s.askAiBtn}><Sparkles size={13} /> ASK AI</button>
          <div style={s.navIcons}>
            <a href="#" style={s.navIcon}><Code size={17} /></a>
            <a href="#" style={s.navIcon}><Globe size={17} /></a>
            <a href="#" style={s.navIcon}><Moon size={17} /></a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={s.hero}>
        <div style={s.heroBg} />
        <div style={s.heroGrid} />
        <div style={s.heroInner}>
          <h1 style={s.heroTitle}>
            welcome to the <span style={s.brand}>atlas</span>
            <br />documentation
          </h1>
          <p style={s.heroSub}>
            Atlas is a language-independent tool for managing and migrating database schemas
            using modern DevOps principles. It offers two workflows:
          </p>
          <div>
            <button style={s.qsBtn}>
              Quick Start <ArrowRight size={13} strokeWidth={2.5} />
            </button>
            <p style={s.heroCaption}>Get started with Atlas in under 5 minutes.</p>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <main style={s.main}>
        <div style={s.grid}>
          {cards.map((card) => {
            const { Icon } = card;
            return (
              <div
                key={card.id}
                onClick={() => onCardClick(card)}
                style={s.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#93c5fd";
                  e.currentTarget.style.background = "#f8fafc";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={s.cardIconWrap}>
                  <Icon size={16} strokeWidth={1.75} color="#64748b" />
                </div>
                <h3 style={s.cardTitle}>{card.title}</h3>
                <p style={s.cardDesc}>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

const s = {
  container: { minHeight: "100vh", background: "#fff", color: "#0f172a", fontFamily: "'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", WebkitFontSmoothing: "antialiased" },
  navbar: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2.5rem", height: 52, borderBottom: "0.5px solid #e2e8f0", background: "#fff", position: "sticky", top: 0, zIndex: 10 },
  logo: { fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.03em", color: "#000" },
  logoSub: { color: "#94a3b8", fontWeight: 400, marginLeft: 3 },
  searchBox: { display: "flex", alignItems: "center", gap: 8, background: "#f8fafc", border: "0.5px solid #e2e8f0", borderRadius: 999, padding: "5px 14px", width: 220 },
  searchInput: { border: "none", outline: "none", background: "transparent", fontSize: 12.5, color: "#0f172a", width: "100%", fontFamily: "inherit" },
  kbd: { fontSize: 10, background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 4, padding: "1px 5px", color: "#94a3b8", fontFamily: "monospace", flexShrink: 0 },
  navRight: { display: "flex", alignItems: "center", gap: 16 },
  askAiBtn: { display: "flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 700, color: "#475569", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.06em", fontFamily: "inherit" },
  navIcons: { display: "flex", alignItems: "center", gap: 14 },
  navIcon: { color: "#64748b", textDecoration: "none", display: "flex", alignItems: "center" },
  hero: { padding: "4rem 2.5rem 3rem", textAlign: "center", position: "relative", overflow: "hidden" },
  heroBg: { position: "absolute", inset: 0, background: "linear-gradient(180deg,#f0f9ff 0%,#fff 60%)", pointerEvents: "none" },
  heroGrid: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(#e2e8f0 1px,transparent 1px),linear-gradient(90deg,#e2e8f0 1px,transparent 1px)", backgroundSize: "48px 48px", opacity: 0.35, pointerEvents: "none" },
  heroInner: { position: "relative", maxWidth: "72rem", margin: "0 auto" },
  heroTitle: { fontSize: "3.4rem", fontWeight: 300, letterSpacing: "-0.045em", lineHeight: 1.12, color: "#0f172a", marginBottom: "1.25rem" },
  brand: { color: "#0ea5e9", fontWeight: 500 },
  heroSub: { fontSize: "0.9rem", color: "#64748b", lineHeight: 1.7, margin: "0 auto 2rem", fontWeight: 400 },
  qsBtn: { display: "inline-flex", alignItems: "center", gap: 8, background: "#e0f2fe", color: "#0369a1", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.65rem 2rem", borderRadius: 999, border: "none", cursor: "pointer", fontFamily: "inherit" },
  heroCaption: { marginTop: "0.6rem", fontSize: 11.5, color: "#94a3b8" },
  main: { maxWidth: "72rem", margin: "0 auto", padding: "0 2.5rem 4rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 },
  card: { border: "0.5px solid #e2e8f0", borderRadius: 10, padding: "1.25rem", background: "#fff", cursor: "pointer", transition: "border-color 0.15s,background 0.15s,transform 0.15s", textAlign: "left" },
  cardIconWrap: { width: 32, height: 32, borderRadius: 8, background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.85rem" },
  cardTitle: { fontSize: "0.85rem", fontWeight: 600, color: "#0f172a", marginBottom: "0.4rem", letterSpacing: "-0.01em" },
  cardDesc: { fontSize: "0.775rem", color: "#64748b", lineHeight: 1.55, fontWeight: 400 },
};
