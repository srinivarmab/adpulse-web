"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>

      {/* METRICS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "20px", marginTop: "20px" }}>
        
        <Card title="Ad Spend" value="$4,320" />
        <Card title="Conversions" value="182" />
        <Card title="ROAS" value="3.8x" />
        <Card title="Wasted Spend" value="$780" />

      </div>

      {/* ALERTS */}
      <div style={{ marginTop: "30px" }}>
        <h2>⚠️ Alerts</h2>

        <div style={alertBox}>
          High spend keyword: <b>"buy shoes online"</b> → Low conversions
        </div>

        <div style={alertBox}>
          Campaign <b>"Search - Brand"</b> ROAS dropped by 30%
        </div>
      </div>

      {/* INSIGHTS */}
      <div style={{ marginTop: "30px" }}>
        <h2>📊 Insights</h2>

        <div style={card}>
          Best performing device: <b>Mobile (ROAS 4.2x)</b>
        </div>

        <div style={card}>
          Top geo: <b>California (32% conversions)</b>
        </div>

        <div style={card}>
          Best time: <b>Evening (6PM–10PM)</b>
        </div>
      </div>

    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
    }}>
      <h4 style={{ margin: 0, color: "#64748b" }}>{title}</h4>
      <h2 style={{ marginTop: "10px" }}>{value}</h2>
    </div>
  );
}

const alertBox = {
  background: "#fee2e2",
  padding: "12px",
  borderRadius: "8px",
  marginTop: "10px"
};

const card = {
  background: "#f1f5f9",
  padding: "14px",
  borderRadius: "8px",
  marginTop: "10px"
};
