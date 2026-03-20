import "./globals.css";

export const metadata = {
  title: "AdPulse AI",
  description: "AI-powered advertising intelligence platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}

        {/* ✅ WhatsApp Floating Button */}
        <a
          href="https://wa.me/918142140696?text=Hi%20I%20want%20Google%20Ads%20management"
          target="_blank"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#25D366",
            color: "#fff",
            padding: "14px 18px",
            borderRadius: "50px",
            fontWeight: "600",
            textDecoration: "none",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            zIndex: 9999
          }}
        >
          💬 Chat with Expert
        </a>

      </body>
    </html>
  );
}
