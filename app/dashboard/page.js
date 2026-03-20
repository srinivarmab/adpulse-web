"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, [router]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg,#f8fafc,#eef2ff)",
          padding: "24px"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "560px",
            background: "#fff",
            borderRadius: "20px",
            padding: "40px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
            border: "1px solid #e2e8f0"
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              margin: "0 auto 20px",
              borderRadius: "999px",
              border: "6px solid #dbeafe",
              borderTopColor: "#2563eb",
              animation: "spin 1s linear infinite"
            }}
          />
          <h1 style={{ margin: 0, color: "#0f172a" }}>Running AI Audit...</h1>
          <p style={{ marginTop: "12px", color: "#64748b", lineHeight: 1.7 }}>
            Analyzing campaigns, keywords, search terms, devices, and geo performance.
          </p>

          <div
            style={{
              marginTop: "24px",
              background: "#f8fafc",
              borderRadius: "14px",
              padding: "16px",
              textAlign: "left",
              border: "1px solid #e2e8f0"
            }}
          >
            <p style={{ margin: "0 0 10px", color: "#334155" }}>✔ Fetching campaign data</p>
            <p style={{ margin: "0 0 10px", color: "#334155" }}>✔ Detecting wasted spend</p>
            <p style={{ margin: 0, color: "#334155" }}>✔ Generating insights and recommendations</p>
          </div>

          <style jsx>{`
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      </div>
    );
  }

  if (!connected) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg,#f8fafc,#eef2ff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "640px",
            background: "#fff",
            borderRadius: "20px",
            padding: "40px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
            border: "1px solid #e2e8f0"
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "rgba(37,99,235,0.08)",
              color: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              margin: "0 auto 18px"
            }}
          >
            📈
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "36px",
              fontWeight: "800",
              color: "#0f172a"
            }}
          >
            Connect Your Google Ads Account
          </h1>

          <p
            style={{
              marginTop: "12px",
              color: "#64748b",
              lineHeight: 1.7,
              fontSize: "16px"
            }}
          >
            Securely connect your account to start your AI-powered Google Ads audit
            and unlock spend insights, ROAS improvements, and optimization recommendations.
          </p>

          <div
            style={{
              marginTop: "24px",
              display: "grid",
              gap: "12px",
              textAlign: "left",
              background: "#f8fafc",
              padding: "18px",
              borderRadius: "16px",
              border: "1px solid #e2e8f0"
            }}
          >
            <div>✔ Secure account connection</div>
            <div>✔ Wasted spend analysis</div>
            <div>✔ Campaign, keyword, and search term review</div>
            <div>✔ Device, geo, and time-based insights</div>
          </div>

          <button
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setConnected(true);
                setLoading(false);
              }, 2000);
            }}
            style={{
              marginTop: "28px",
              padding: "15px 28px",
              background: "#2563eb",
              color: "#fff",
              borderRadius: "12px",
              border: "none",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 12px 24px rgba(37,99,235,0.25)"
            }}
          >
            Connect Google Ads
          </button>

          <p style={{ marginTop: "16px", color: "#94a3b8", fontSize: "13px" }}>
            Demo flow for now — real OAuth can be connected next.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "24px"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap"
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: "34px", color: "#0f172a" }}>Dashboard</h1>
            <h2 style={{ marginTop: "10px", color: "#334155", fontSize: "20px", fontWeight: "600" }}>
              👋 Welcome back! Here’s your performance snapshot
            </h2>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              background: "#fff",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            Logout
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "24px"
          }}
        >
          <MetricCard title="Ad Spend" value="$4,320" sub="Last 30 days" />
          <MetricCard title="Conversions" value="182" sub="+14% vs previous period" />
          <MetricCard title="ROAS" value="3.8x" sub="Healthy performance" />
          <MetricCard title="Wasted Spend" value="$780" sub="Needs attention" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "20px",
            marginTop: "28px"
          }}
        >
          <div style={panelStyle}>
            <h3 style={panelTitle}>⚠️ Alerts</h3>
            <div style={alertBox}>
              High spend keyword: <b>"buy shoes online"</b> → low conversions
            </div>
            <div style={alertBox}>
              Campaign <b>"Search - Brand"</b> ROAS dropped by 30%
            </div>
            <div style={alertBox}>
              12 search terms are draining budget without conversions
            </div>
          </div>

          <div style={panelStyle}>
            <h3 style={panelTitle}>📊 Insights</h3>
            <div style={insightCard}>
              Best performing device: <b>Mobile (ROAS 4.2x)</b>
            </div>
            <div style={insightCard}>
              Top geo: <b>California (32% conversions)</b>
            </div>
            <div style={insightCard}>
              Best time: <b>Evening (6PM–10PM)</b>
            </div>
          </div>
        </div>

        <div style={{ ...panelStyle, marginTop: "28px" }}>
          <h3 style={panelTitle}>🚀 Recommended Actions</h3>
          <div style={actionRow}>
            <span>Add negative keywords for wasted search terms</span>
            <span style={badgeStyle}>High Impact</span>
          </div>
          <div style={actionRow}>
            <span>Increase budget on top-performing mobile campaigns</span>
            <span style={{ ...badgeStyle, background: "#dcfce7", color: "#166534" }}>Opportunity</span>
          </div>
          <div style={actionRow}>
            <span>Review low-ROAS geo segments and reduce bids</span>
            <span style={{ ...badgeStyle, background: "#fef3c7", color: "#92400e" }}>Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, sub }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "22px",
        borderRadius: "16px",
        boxShadow: "0 6px 20px rgba(15,23,42,0.05)",
        border: "1px solid #e2e8f0"
      }}
    >
      <h4 style={{ margin: 0, color: "#64748b", fontSize: "14px", fontWeight: "600" }}>{title}</h4>
      <h2 style={{ marginTop: "12px", marginBottom: "8px", fontSize: "34px", color: "#0f172a" }}>{value}</h2>
      <p style={{ margin: 0, color: "#94a3b8", fontSize: "13px" }}>{sub}</p>
    </div>
  );
}

const panelStyle = {
  background: "#fff",
  padding: "22px",
  borderRadius: "16px",
  boxShadow: "0 6px 20px rgba(15,23,42,0.05)",
  border: "1px solid #e2e8f0"
};

const panelTitle = {
  marginTop: 0,
  marginBottom: "16px",
  color: "#0f172a"
};

const alertBox = {
  background: "#fee2e2",
  color: "#7f1d1d",
  padding: "14px",
  borderRadius: "10px",
  marginTop: "12px",
  lineHeight: 1.6
};

const insightCard = {
  background: "#f1f5f9",
  color: "#334155",
  padding: "14px",
  borderRadius: "10px",
  marginTop: "12px",
  lineHeight: 1.6
};

const actionRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  padding: "14px 0",
  borderTop: "1px solid #e2e8f0",
  flexWrap: "wrap"
};

const badgeStyle = {
  background: "#fee2e2",
  color: "#991b1b",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "700"
};
