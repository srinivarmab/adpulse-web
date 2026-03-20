export default function ContactPage() {
  return (
    <div style={wrap}>
      <h1 style={h1}>Contact Us</h1>
      <p style={p}>
        We’d love to hear from you.
      </p>

      <div style={card}>
        <p style={item}><strong>Email:</strong> support@yourdomain.com</p>
        <p style={item}><strong>WhatsApp:</strong> +918142140696</p>
        <p style={item}><strong>Business:</strong> AdPulse AI</p>
        <p style={item}>
          For support, partnerships, API questions, managed services, or business
          inquiries, reach out anytime.
        </p>
      </div>
    </div>
  );
}

const wrap = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "48px 20px",
  color: "#0f172a"
};

const h1 = {
  fontSize: "40px",
  marginBottom: "16px"
};

const p = {
  color: "#475569"
};

const card = {
  marginTop: "24px",
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "24px",
  boxShadow: "0 8px 24px rgba(15,23,42,0.04)"
};

const item = {
  margin: "0 0 14px",
  color: "#334155",
  lineHeight: 1.8
};
