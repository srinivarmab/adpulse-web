"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [stage, setStage] = useState("connect");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push("/login");
  }, [router]);

  const handleConnect = () => {
    setStage("loading");

    setTimeout(() => {
      setStage("dashboard");
    }, 2200);
  };

  if (stage === "connect") {
    return (
      <div style={pageBg}>
        <div style={centerCard}>
          <div style={iconBox}>📈</div>
          <h1 style={title}>Connect Your Google Ads Account</h1>
          <p style={desc}>
            Securely connect your Google Ads account to unlock AI audit insights,
            wasted spend detection, and optimization recommendations.
          </p>

          <div style={infoBox}>
            <div>✔ Campaign performance review</div>
            <div>✔ Wasted spend analysis</div>
            <div>✔ Keyword and search term insights</div>
            <div>✔ Device, geo, and time-based recommendations</div>
          </div>

          <button onClick={handleConnect} style={primaryBtn}>
            Connect Google Ads
          </button>

          <p style={smallNote}>Demo flow for now — real OAuth can be connected next.</p>
        </div>
      </div>
    );
  }

  if (stage === "loading") {
    return (
      <div style={pageBg}>
        <div style={centerCard}>
          <div style={spinner} />
          <h1 style={title}>Running AI Audit...</h1>
          <p style={desc}>
            Analyzing campaigns, search terms, wasted spend, device ROAS, and growth opportunities.
          </p>

          <div style={infoBox}>
            <div>✔ Fetching campaign data</div>
            <div>✔ Checking wasted spend</div>
            <div>✔ Generating recommendations</div>
          </div>

          <style jsx>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={topBar}>
          <div>
            <h1 style={{ margin: 0, fontSize: "34px", color: "#0f172a" }}>Dashboard</h1>
            <p style={{ marginTop: 8, color: "#475569" }}>
              👋 Welcome back. Here’s your Google Ads performance snapshot.
            </p>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
            style={logoutBtn}
          >
            Logout
          </button>
        </div>

        <div style={metricGrid}>
          <MetricCard title="Ad Spend" value="$4,320" sub="Last 30 days" />
          <MetricCard title="Conversions" value="182" sub="+14% vs previous period" />
          <MetricCard title="ROAS" value="3.8x" sub="Healthy performance" />
          <MetricCard title="Wasted Spend" value="$780" sub="Needs attention" />
        </div>

        <div style={twoCol}>
          <Panel title="⚠️ Alerts">
            <AlertBox>High spend keyword: <b>"buy shoes online"</b> → low conversions</AlertBox>
            <AlertBox>Campaign <b>"Search - Brand"</b> ROAS dropped by 30%</AlertBox>
            <AlertBox>12 search terms are draining budget without conversions</AlertBox>
          </Panel>

          <Panel title="📊 Insights">
            <InsightBox>Best performing device: <b>Mobile (ROAS 4.2x)</b></InsightBox>
            <InsightBox>Top geo: <b>California (32% conversions)</b></InsightBox>
            <InsightBox>Best time: <b>Evening (6PM–10PM)</b></InsightBox>
          </Panel>
        </div>

        <Panel title="🚀 Recommended Actions" style={{ marginTop: 28 }}>
          <ActionRow text="Add negative keywords for wasted search terms" tag="High Impact" tagStyle={badgeRed} />
          <ActionRow text="Increase budget on top-performing mobile campaigns" tag="Opportunity" tagStyle={badgeGreen} />
          <ActionRow text="Review low-ROAS geo segments and reduce bids" tag="Review" tagStyle={badgeYellow} />
        </Panel>
      </div>
    </div>
  );
}

function MetricCard({ title, value, sub }) {
  return (
    <div style={metricCard}>
      <h4 style={{ margin: 0, color: "#64748b", fontSize: 14 }}>{title}</h4>
      <h2 style={{ marginTop: 12, marginBottom: 8, fontSize: 34, color: "#0f172a" }}>{value}</h2>
      <p style={{ margin: 0, color: "#94a3b8", fontSize: 13 }}>{sub}</p>
    </div>
  );
}

function Panel({ title, children, style = {} }) {
  return (
    <div style={{ ...panelStyle, ...style }}>
      <h3 style={{ marginTop: 0, marginBottom: 16, color: "#0f172a" }}>{title}</h3>
      {children}
    </div>
  );
}

function AlertBox({ children }) {
  return <div style={alertBox}>{children}</div>;
}

function InsightBox({ children }) {
  return <div style={insightBox}>{children}</div>;
}

function ActionRow({ text, tag, tagStyle }) {
  return (
    <div style={actionRow}>
      <span>{text}</span>
      <span style={tagStyle}>{tag}</span>
    </div>
  );
}

const pageBg = {
  minHeight: "100vh",
  background: "linear-gradient(180deg,#f8fafc,#eef2ff)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px"
};

const centerCard = {
  width: "100%",
  maxWidth: "640px",
  background: "#fff",
  borderRadius: "20px",
  padding: "40px",
  textAlign: "center",
  boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
  border: "1px solid #e2e8f0"
};

const iconBox = {
  width: "72px",
  height: "72px",
  borderRadius: "18px",
  background: "rgba(37,99,235,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "34px",
  margin: "0 auto 18px"
};

const spinner = {
  width: "64px",
  height: "64px",
  margin: "0 auto 20px",
  borderRadius: "999px",
  border: "6px solid #dbeafe",
  borderTopColor: "#2563eb",
  animation: "spin 1s linear infinite"
};

const title = {
  margin: 0,
  fontSize: "34px",
  fontWeight: "800",
  color: "#0f172a"
};

const desc = {
  marginTop: "12px",
  color: "#64748b",
  lineHeight: 1.7,
  fontSize: "16px"
};

const infoBox = {
  marginTop: "24px",
  display: "grid",
  gap: "12px",
  textAlign: "left",
  background: "#f8fafc",
  padding: "18px",
  borderRadius: "16px",
  border: "1px solid #e2e8f0"
};

const primaryBtn = {
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
};

const smallNote = {
  marginTop: "16px",
  color: "#94a3b8",
  fontSize: "13px"
};

const topBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  flexWrap: "wrap"
};

const logoutBtn = {
  padding: "12px 18px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  background: "#fff",
  cursor: "pointer",
  fontWeight: "600"
};

const metricGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  marginTop: "24px"
};

const metricCard = {
  background: "#fff",
  padding: "22px",
  borderRadius: "16px",
  boxShadow: "0 6px 20px rgba(15,23,42,0.05)",
  border: "1px solid #e2e8f0"
};

const twoCol = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "20px",
  marginTop: "28px"
};

const panelStyle = {
  background: "#fff",
  padding: "22px",
  borderRadius: "16px",
  boxShadow: "0 6px 20px rgba(15,23,42,0.05)",
  border: "1px solid #e2e8f0"
};

const alertBox = {
  background: "#fee2e2",
  color: "#7f1d1d",
  padding: "14px",
  borderRadius: "10px",
  marginTop: "12px",
  lineHeight: 1.6
};

const insightBox = {
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

const badgeRed = {
  background: "#fee2e2",
  color: "#991b1b",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "700"
};

const badgeGreen = {
  background: "#dcfce7",
  color: "#166534",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "700"
};

const badgeYellow = {
  background: "#fef3c7",
  color: "#92400e",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "700"
};
