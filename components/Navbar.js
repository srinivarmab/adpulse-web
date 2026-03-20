"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={header}>
      <div style={container}>
        
        {/* LOGO */}
        <a href="/" style={logo}>
          AdPulse AI
        </a>

        {/* DESKTOP MENU */}
        <nav style={desktopMenu}>
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/login">Login</a>
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} style={menuBtn}>
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={mobileMenu}>
          <a href="/#features" onClick={() => setOpen(false)}>Features</a>
          <a href="/#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="/login" onClick={() => setOpen(false)}>Login</a>
        </div>
      )}
    </header>
  );
}

const header = {
  position: "sticky",
  top: 0,
  background: "#fff",
  borderBottom: "1px solid #e5e7eb",
  zIndex: 1000
};

const container = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 20px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const logo = {
  fontWeight: "700",
  fontSize: "20px",
  textDecoration: "none",
  color: "#0f172a"
};

const desktopMenu = {
  display: "none",
  gap: "20px"
};

const menuBtn = {
  fontSize: "24px",
  background: "none",
  border: "none",
  cursor: "pointer"
};

const mobileMenu = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  padding: "20px",
  borderTop: "1px solid #e5e7eb"
};
