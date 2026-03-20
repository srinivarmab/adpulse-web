import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "AdPulse AI",
  description: "AI-powered Google Ads intelligence"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        {children}

        {/* GLOBAL FOOTER */}
        <footer style={{
          marginTop: "40px",
          padding: "20px",
          borderTop: "1px solid #e5e7eb",
          textAlign: "center"
        }}>
          <div style={{ marginBottom: "10px" }}>
            <strong>AdPulse AI</strong>
          </div>

          <div style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            <a href="/">Home</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </div>
        </footer>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#25D366",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: "50px",
            textDecoration: "none"
          }}
        >
          💬 Chat
        </a>

      </body>
    </html>
  );
}
