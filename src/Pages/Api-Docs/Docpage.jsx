import { useState } from "react";
import {
  Search,
  ChevronRight,
  ChevronDown,
  Link,
  History,
  Download,
  Trash2,
  Bell,
  AlignLeft,
  Plus,
  MoreHorizontal,
  ArrowLeft,
} from "lucide-react";

const sidebarSections = {
  BASICS: [
    "Introduction",
    "Getting Started",
    "Projects",
    "Publish Project",
    "Debug Project",
    "Install Project",
  ],
  "API REFERENCE": ["Environment", "OAuth", "Preferences", "User Interface"],
  INFORMATION: ["Manifest", "Security", "Terminology", "Changelog", "FAQ"],
};

function DocPage({ card, onBack }) {
  const [openProject, setOpenProject] = useState(true);
  const [activeSidebarItem, setActiveSidebarItem] = useState(card.title);
  const [activeSection, setActiveSection] = useState(card.sections?.[0] ?? "");

  return (
    <div style={d.wrap}>
      {/* Top Navbar */}
      <nav style={d.navbar}>
        <div style={d.navLeft}>
          <div style={d.spaceName}>
            <div style={d.spaceIcon}>A</div>
            <span style={d.spaceText}>atlas docs</span>
            <ChevronDown size={14} color="#64748b" />
          </div>
          {["Documentation", "Dashboard", "Projects", "Tasks", "Users"].map((n) => (
            <a key={n} href="#" style={d.navLink}>{n}</a>
          ))}
        </div>
        <div style={d.navRight}>
          <button style={d.editBtn}>✎ Edit mode</button>
          <Bell size={17} color="#64748b" />
          <div style={d.avatar}>U</div>
        </div>
      </nav>

      <div style={d.body}>
        {/* Sidebar */}
        <aside style={d.sidebar}>
          <div style={d.backBtn} onClick={onBack}>
            <ArrowLeft size={13} color="#94a3b8" />
            <span>Back</span>
          </div>
          <div style={{ height: 8 }} />
          {Object.entries(sidebarSections).map(([section, items]) => (
            <div key={section}>
              <div style={d.sidebarGroup}>{section}</div>
              {items.map((item) => {
                const isActive = activeSidebarItem === item;
                const isProjects = item === "Projects";
                return (
                  <div key={item}>
                    <div
                      style={{
                        ...d.sidebarItem,
                        ...(isActive ? d.sidebarItemActive : {}),
                      }}
                      onClick={() => {
                        setActiveSidebarItem(item);
                        if (isProjects) setOpenProject((p) => !p);
                      }}
                    >
                      {isProjects && (
                        <span style={{ marginRight: 4 }}>
                          {openProject
                            ? <ChevronDown size={12} />
                            : <ChevronRight size={12} />}
                        </span>
                      )}
                      {item}
                    </div>
                    {isProjects && openProject && (
                      <div style={{ paddingLeft: 16 }}>
                        {["Todo List", "Issues", "Board"].map((sub) => (
                          <div key={sub} style={d.sidebarSub}>{sub}</div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main style={d.main}>
          {/* Toolbar */}
          <div style={d.toolbar}>
            <div style={d.toolbarLeft}>
              <button style={d.filterBtn}>
                <AlignLeft size={13} /> Filters <ChevronDown size={12} />
              </button>
              <div style={d.toolbarSearch}>
                <Search size={12} color="#94a3b8" />
                <span style={{ color: "#94a3b8", fontSize: 12.5 }}>is:thisSpace</span>
              </div>
            </div>
            <div style={d.toolbarRight}>
              <button style={d.addDocBtn}><Plus size={13} /> Add Document</button>
              <button style={d.moreBtn}><MoreHorizontal size={16} /></button>
            </div>
          </div>

          {/* Doc Body */}
          <div style={d.docBody}>
            <h1 style={d.docTitle}>{card.title}</h1>
            <p style={d.docIntro}>{card.content.intro}</p>

            {card.content.sections.map((sec) => (
              <div key={sec.title}>
                <h2 style={d.secTitle}>
                  {sec.title}
                  <Link
                    size={14}
                    color="#cbd5e1"
                    style={{ marginLeft: 8, cursor: "pointer" }}
                  />
                </h2>
                <p style={d.secBody}>{sec.body}</p>
                {sec.bullets && (
                  <ul style={d.ul}>
                    {sec.bullets.map((b, i) => (
                      <li key={i} style={d.li}>{b}</li>
                    ))}
                  </ul>
                )}
                {sec.code && (
                  <div style={d.codeBlock}>
                    {sec.code.split("\n").map((line, i) => (
                      <div key={i} style={d.codeLine}>
                        <span style={d.lineNum}>{i + 1}</span>
                        <span style={d.lineCode}>{line}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>

        {/* Right Panel */}
        <aside style={d.rightPanel}>
          <div style={d.rightActions}>
            {[
              { icon: <Link size={14} />, label: "Copy link", shortcut: "Ctrl L" },
              { icon: <History size={14} />, label: "Page history", shortcut: "H" },
              { icon: <Download size={14} />, label: "Import" },
              { icon: <Download size={14} />, label: "Export", sub: "PDF, HTML, Markdown" },
              { icon: <Trash2 size={14} />, label: "Delete" },
            ].map((a, i) => (
              <div key={i} style={d.rightAction}>
                <span style={d.rightActionIcon}>{a.icon}</span>
                <span style={d.rightActionLabel}>{a.label}</span>
                {a.shortcut && <span style={d.rightActionShortcut}>{a.shortcut}</span>}
                {a.sub && <span style={d.rightActionSub}>{a.sub}</span>}
              </div>
            ))}
          </div>

          <div style={d.toc}>
            <div style={d.tocTitle}>ON THIS PAGE</div>
            {card.sections.map((s) => (
              <div
                key={s}
                style={{
                  ...d.tocItem,
                  ...(activeSection === s ? d.tocItemActive : {}),
                }}
                onClick={() => setActiveSection(s)}
              >
                {s}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default DocPage;

const d = {
  wrap: { minHeight: "100vh", background: "#fff", fontFamily: "'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", color: "#0f172a", WebkitFontSmoothing: "antialiased" },
  navbar: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.5rem", height: 52, borderBottom: "0.5px solid #e2e8f0", background: "#fff", position: "sticky", top: 0, zIndex: 10 },
  navLeft: { display: "flex", alignItems: "center", gap: 24 },
  spaceName: { display: "flex", alignItems: "center", gap: 6, cursor: "pointer" },
  spaceIcon: { width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg,#6366f1,#0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13 },
  spaceText: { fontSize: 13.5, fontWeight: 600, color: "#0f172a" },
  navLink: { fontSize: 13, color: "#475569", textDecoration: "none" },
  navRight: { display: "flex", alignItems: "center", gap: 14 },
  editBtn: { fontSize: 12, color: "#16a34a", background: "#f0fdf4", border: "0.5px solid #bbf7d0", borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontFamily: "inherit" },
  avatar: { width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#6366f1,#0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13 },
  body: { display: "flex", minHeight: "calc(100vh - 52px)" },
  sidebar: { width: 210, borderRight: "0.5px solid #e2e8f0", padding: "1rem 0", flexShrink: 0, overflowY: "auto" },
  backBtn: { display: "flex", alignItems: "center", gap: 6, padding: "4px 1.25rem", cursor: "pointer", color: "#94a3b8", fontSize: 12 },
  sidebarGroup: { fontSize: 10.5, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.6rem 1.25rem 0.25rem" },
  sidebarItem: { fontSize: 13, color: "#475569", padding: "5px 1.25rem", cursor: "pointer", display: "flex", alignItems: "center" },
  sidebarItemActive: { background: "#f0f9ff", color: "#0ea5e9", fontWeight: 600, borderRight: "2px solid #0ea5e9" },
  sidebarSub: { fontSize: 12.5, color: "#64748b", padding: "4px 1.25rem", cursor: "pointer" },
  main: { flex: 1, overflowY: "auto" },
  toolbar: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6rem 2rem", borderBottom: "0.5px solid #e2e8f0" },
  toolbarLeft: { display: "flex", alignItems: "center", gap: 10 },
  filterBtn: { display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "#475569", background: "#f8fafc", border: "0.5px solid #e2e8f0", borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontFamily: "inherit" },
  toolbarSearch: { display: "flex", alignItems: "center", gap: 6, background: "#f8fafc", border: "0.5px solid #e2e8f0", borderRadius: 6, padding: "4px 10px" },
  toolbarRight: { display: "flex", alignItems: "center", gap: 8 },
  addDocBtn: { display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, fontWeight: 600, color: "#fff", background: "#0ea5e9", border: "none", borderRadius: 7, padding: "6px 14px", cursor: "pointer", fontFamily: "inherit" },
  moreBtn: { background: "#f8fafc", border: "0.5px solid #e2e8f0", borderRadius: 6, padding: "4px 8px", cursor: "pointer", display: "flex", alignItems: "center" },
  docBody: { padding: "2rem 3rem" },
  docTitle: { fontSize: "2rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem", letterSpacing: "-0.03em" },
  docIntro: { fontSize: "0.9rem", color: "#64748b", marginBottom: "2rem" },
  secTitle: { fontSize: "1.25rem", fontWeight: 700, color: "#0f172a", marginTop: "2rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", letterSpacing: "-0.02em" },
  secBody: { fontSize: "0.875rem", color: "#374151", lineHeight: 1.7, marginBottom: "0.75rem" },
  ul: { paddingLeft: "1.25rem", marginBottom: "1rem" },
  li: { fontSize: "0.875rem", color: "#374151", lineHeight: 1.8, marginBottom: 4 },
  codeBlock: { background: "#f8fafc", border: "0.5px solid #e2e8f0", borderRadius: 10, padding: "1rem 0", marginTop: "0.75rem", marginBottom: "1.5rem", fontFamily: "monospace", fontSize: 12.5, overflowX: "auto" },
  codeLine: { display: "flex", padding: "1px 1.25rem" },
  lineNum: { color: "#94a3b8", minWidth: 20, marginRight: 16, userSelect: "none", textAlign: "right" },
  lineCode: { color: "#0f172a", whiteSpace: "pre" },
  rightPanel: { width: 200, borderLeft: "0.5px solid #e2e8f0", padding: "1rem 0", flexShrink: 0, fontSize: 12.5 },
  rightActions: { borderBottom: "0.5px solid #e2e8f0", paddingBottom: "1rem", marginBottom: "1rem" },
  rightAction: { display: "flex", alignItems: "center", gap: 7, padding: "5px 1.25rem", cursor: "pointer", color: "#475569" },
  rightActionIcon: { color: "#94a3b8" },
  rightActionLabel: { flex: 1 },
  rightActionShortcut: { color: "#94a3b8", fontSize: 11 },
  rightActionSub: { color: "#94a3b8", fontSize: 10.5 },
  toc: { padding: "0 1.25rem" },
  tocTitle: { fontSize: 10.5, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" },
  tocItem: { fontSize: 12.5, color: "#64748b", padding: "4px 0", cursor: "pointer" },
  tocItemActive: { color: "#0ea5e9", fontWeight: 600, borderLeft: "2px solid #0ea5e9", paddingLeft: 6 },
};