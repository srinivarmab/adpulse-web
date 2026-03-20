"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

const leadsTrend = [
  { name: "Mon", leads: 4 },
  { name: "Tue", leads: 7 },
  { name: "Wed", leads: 6 },
  { name: "Thu", leads: 10 },
  { name: "Fri", leads: 8 },
  { name: "Sat", leads: 12 },
  { name: "Sun", leads: 9 }
];

const revenueTrend = [
  { name: "Jan", revenue: 1200 },
  { name: "Feb", revenue: 1800 },
  { name: "Mar", revenue: 2400 },
  { name: "Apr", revenue: 3200 },
  { name: "May", revenue: 2800 },
  { name: "Jun", revenue: 4100 }
];

const planDistribution = [
  { name: "Basic", value: 28 },
  { name: "Professional", value: 44 },
  { name: "Growth", value: 18 },
  { name: "Agency", value: 10 }
];

const leadSourceData = [
  { name: "WhatsApp", value: 46 },
  { name: "Form Leads", value: 34 },
  { name: "Direct Signup", value: 20 }
];

const recentLeads = [
  {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    website: "rahulstore.com",
    budget: "$1,000 - $5,000",
    goal: "Improve ROAS",
    source: "Form",
    status: "New"
  },
  {
    name: "Anita Verma",
    email: "anita@example.com",
    website: "anitabrand.com",
    budget: "$500 - $1,000",
    goal: "Lead generation",
    source: "WhatsApp",
    status: "Contacted"
  },
  {
    name: "Jason Lee",
    email: "jason@example.com",
    website: "jasonshop.com",
    budget: "$5,000+",
    goal: "Scale campaigns",
    source: "Form",
    status: "Qualified"
  },
  {
    name: "Sonal Patel",
    email: "sonal@example.com",
    website: "sonalhealth.com",
    budget: "Less than $500",
    goal: "Reduce wasted spend",
    source: "WhatsApp",
    status: "New"
  }
];

const managedPipeline = [
  { label: "New Inquiries", value: 18 },
  { label: "Calls Booked", value: 7 },
  { label: "Proposals Sent", value: 4 },
  { label: "Closed Clients", value: 2 }
];

const PIE_COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"];
const PIE_COLORS_2 = ["#22c55e", "#3b82f6", "#f97316", "#8b5cf6"];

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div style={pageWrap}>
      <aside style={sidebar}>
        <div>
          <div style={brand}>AdPulse AI</div>
          <div style={sidebarSub}>Admin Dashboard</div>
        </div>

        <nav style={nav}>
          <a href="/admin" style={navLinkActive}>Overview</a>
          <a href="#leads" style={navLink}>Leads</a>
          <a href="#users" style={navLink}>Users</a>
          <a href="#revenue" style={navLink}>Revenue</a>
          <a href="#managed" style={navLink}>Managed Clients</a>
          <a href="/dashboard" style={navLink}>User Dashboard</a>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
          style={logoutBtn}
        >
          Logout
        </button>
      </aside>

      <main style={main}>
        <div style={topBar}>
          <div>
            <h1 style={pageTitle}>Admin Overview</h1>
            <p style={pageSub}>
              Track users, leads, subscriptions, managed-service pipeline, and growth performance.
            </p>
          </div>
        </div>

        <div style={statsGrid}>
          <StatCard title="Total Users" value="124" sub="+12 this week" />
          <StatCard title="Total Leads" value="58" sub="WhatsApp + form leads" />
          <StatCard title="Paid Users" value="31" sub="25% conversion rate" />
          <StatCard title="MRR" value="$4,180" sub="Subscriptions only" />
          <StatCard title="Managed Clients" value="7" sub="2 deals in pipeline" />
          <StatCard title="Trial Users" value="43" sub="Upgrade opportunity" />
        </div>

        <div style={chartGrid}>
          <ChartCard title="Leads Trend">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={leadsTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="leads" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Revenue Trend" id="revenue">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={revenueTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <div style={chartGrid}>
          <ChartCard title="Plan Distribution">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={planDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  dataKey="value"
                  nameKey="name"
                  label
                >
                  {planDistribution.map((entry, index) => (
                    <Cell key={cell-${index}} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Lead Source Split">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={95}
                  dataKey="value"
                  nameKey="name"
                  label
                >
                  {leadSourceData.map((entry, index) => (
                    <Cell key={cell2-${index}} fill={PIE_COLORS_2[index % PIE_COLORS_2.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <div style={panel} id="managed">
          <div style={sectionHead}>
            <h2 style={sectionTitle}>Managed Service Pipeline</h2>
            <span style={pill}>High Ticket</span>
          </div>

          <div style={statsGridSmall}>
            {managedPipeline.map((item) => (
              <div key={item.label} style={miniStat}>
                <div style={miniLabel}>{item.label}</div>
                <div style={miniValue}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={panel} id="leads">
          <div style={sectionHead}>
            <h2 style={sectionTitle}>Recent Leads</h2>
            <span style={pill}>Live Pipeline</span>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Name</th>
                  <th style={th}>Email</th>
                  <th style={th}>Website</th>
                  <th style={th}>Budget</th>
                  <th style={th}>Goal</th>
                  <th style={th}>Source</th>
                  <th style={th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead, index) => (
                  <tr key={index}>
                    <td style={td}>{lead.name}</td>
                    <td style={td}>{lead.email}</td>
                    <td style={td}>{lead.website}</td>
                    <td style={td}>{lead.budget}</td>
                    <td style={td}>{lead.goal}</td>
                    <td style={td}>{lead.source}</td>
                    <td style={td}>
                      <span style={statusBadge(lead.status)}>{lead.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={panel} id="users">
          <div style={sectionHead}>
            <h2 style={sectionTitle}>User Snapshot</h2>
            <span style={pill}>SaaS Users</span>
          </div>

          <div style={userGrid}>
            <UserCard name="Srinivas Varma" plan="Professional" status="Active" joined="2026-03-10" />
            <UserCard name="Anita Verma" plan="Basic" status="Trial" joined="2026-03-12" />
            <UserCard name="Rahul Sharma" plan="Growth" status="Active" joined="2026-03-14" />
            <UserCard name="Jason Lee" plan="Agency" status="Active" joined="2026-03-16" />
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ title, value, sub }) {
  return (
    <div style={statCard}>
      <div style={statTitle}>{title}</div>
      <div style={statValue}>{value}</div>
      <div style={statSub}>{sub}</div>
    </div>
  );
}

function ChartCard({ title, children, id }) {
  return (
    <div style={panel} id={id}>
      <div style={sectionHead}>
        <h2 style={sectionTitle}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function UserCard({ name, plan, status, joined }) {
  return (
    <div style={userCard}>
      <div style={userName}>{name}</div>
      <div style={userMeta}>Plan: {plan}</div>
      <div style={userMeta}>Status: {status}</div>
      <div style={userMeta}>Joined: {joined}</div>
    </div>
  );
}

const pageWrap = {
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "260px 1fr",
  background: "#f8fafc"
};

const sidebar = {
  background: "#0f172a",
  color: "#fff",
  padding: "24px 18px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "24px"
};

const brand = {
  fontSize: "24px",
  fontWeight: "800"
};

const sidebarSub = {
  marginTop: "6px",
  color: "#94a3b8",
  fontSize: "14px"
};

const nav = {
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const navLink = {
  textDecoration: "none",
  color: "#cbd5e1",
  padding: "12px 14px",
  borderRadius: "10px"
};

const navLinkActive = {
  textDecoration: "none",
  color: "#fff",
  background: "rgba(37,99,235,0.25)",
  padding: "12px 14px",
  borderRadius: "10px",
  fontWeight: "700"
};

const logoutBtn = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "transparent",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600"
};

const main = {
  padding: "24px"
};

const topBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
  flexWrap: "wrap"
};

const pageTitle = {
  margin: 0,
  fontSize: "34px",
  color: "#0f172a"
};

const pageSub = {
  marginTop: "8px",
  color: "#64748b",
  lineHeight: 1.7
};

const statsGrid = {
  marginTop: "24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "18px"
};

const statsGridSmall = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: "16px"
};

const statCard = {
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 6px 20px rgba(15,23,42,0.04)"
};

const statTitle = {
  color: "#64748b",
  fontSize: "14px",
  fontWeight: "600"
};

const statValue = {
  marginTop: "12px",
  fontSize: "32px",
  fontWeight: "800",
  color: "#0f172a"
};

const statSub = {
  marginTop: "8px",
  color: "#94a3b8",
  fontSize: "13px"
};

const chartGrid = {
  marginTop: "24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
  gap: "20px"
};

const panel = {
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "22px",
  boxShadow: "0 6px 20px rgba(15,23,42,0.04)",
  marginTop: "24px"
};

const sectionHead = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
  marginBottom: "14px"
};

const sectionTitle = {
  margin: 0,
  color: "#0f172a"
};

const pill = {
  background: "#eff6ff",
  color: "#2563eb",
  borderRadius: "999px",
  padding: "6px 10px",
  fontSize: "12px",
  fontWeight: "700"
};

const miniStat = {
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "14px",
  padding: "18px"
};

const miniLabel = {
  color: "#64748b",
  fontSize: "14px"
};

const miniValue = {
  marginTop: "10px",
  fontSize: "28px",
  fontWeight: "800",
  color: "#0f172a"
};

const table = {
  width: "100%",
  borderCollapse: "collapse"
};

const th = {
  textAlign: "left",
  padding: "12px 10px",
  borderBottom: "1px solid #e2e8f0",
  color: "#475569",
  fontSize: "13px"
};

const td = {
  padding: "14px 10px",
  borderBottom: "1px solid #f1f5f9",
  color: "#334155",
  fontSize: "14px",
  verticalAlign: "top"
};

const statusBadge = (status) => ({
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "700",
  background:
    status === "New"
      ? "#dbeafe"
      : status === "Contacted"
      ? "#fef3c7"
      : status === "Qualified"
      ? "#dcfce7"
      : "#f1f5f9",
  color:
    status === "New"
      ? "#1d4ed8"
      : status === "Contacted"
      ? "#92400e"
      : status === "Qualified"
      ? "#166534"
      : "#334155"
});

const userGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "16px"
};

const userCard = {
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "14px",
  padding: "18px"
};

const userName = {
  fontWeight: "800",
  color: "#0f172a",
  marginBottom: "10px"
};

const userMeta = {
  color: "#64748b",
  fontSize: "14px",
  marginTop: "6px"
};
