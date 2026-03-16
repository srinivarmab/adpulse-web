import "./globals.css";

export const metadata = {
  title: "AdPulse AI",
  description: "AI-powered advertising intelligence platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
