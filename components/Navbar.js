"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: "sticky",
      top: 0,
      background: "#fff",
      borderBottom: "1px solid #e5e7eb",
      zIndex: 1000
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        
        <a href="/" style={{ fontWeight: "700", fontSize: "20px" }}>
          AdPulse AI
        </a>

        {/* Desktop Menu */}
        <nav className="desktop-menu" style={{ gap: "20px" }}>
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/login">Login</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          style={{
            fontSize: "26px",
            background: "none",
            border: "none",
            cursor: "pointer"
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
          borderTop: "1px solid #e5e7eb",
          background: "#fff"
        }}>
          <a href="/#features" onClick={() => setOpen(false)}>Features</a>
          <a href="/#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="/login" onClick={() => setOpen(false)}>Login</a>
        </div>
      )}
    </header>
  );
}
