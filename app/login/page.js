"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("user", email);
      router.push("/dashboard");
      setLoading(false);
    }, 800);
  };

  const handleGoogleLogin = () => {
    localStorage.setItem("user", "googleuser@example.com");
    router.push("/dashboard");
  };

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
          maxWidth: "420px",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
          border: "1px solid #e2e8f0"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              fontWeight: "800",
              color: "#0f172a"
            }}
          >
            Login to AdPulse AI
          </h1>
          <p
            style={{
              marginTop: "10px",
              color: "#64748b",
              lineHeight: 1.6,
              fontSize: "15px"
            }}
          >
            Access your Google Ads audit dashboard, insights, and optimization recommendations.
          </p>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #cbd5e1",
            background: "#fff",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
            marginBottom: "14px"
          }}
        >
          Continue with Google
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "14px 0 18px"
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
          <span style={{ color: "#94a3b8", fontSize: "13px" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
        </div>

        <form onSubmit={handleLogin} style={{ display: "grid", gap: "14px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "14px",
              border: "none",
              background: "#2563eb",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(37,99,235,0.25)"
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p
          style={{
            marginTop: "18px",
            textAlign: "center",
            color: "#64748b",
            fontSize: "14px"
          }}
        >
          Don’t have an account?
          <a
            href="#"
            style={{
              color: "#2563eb",
              marginLeft: "6px",
              fontWeight: "600",
              textDecoration: "none"
            }}
          >
            Sign up
          </a>
        </p>

        <div
          style={{
            marginTop: "24px",
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "14px",
            padding: "14px"
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "#64748b",
              lineHeight: 1.6,
              textAlign: "center"
            }}
          >
            By continuing, you’ll be able to view your dashboard, track wasted spend,
            and access AI-powered Google Ads recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  fontSize: "15px",
  outline: "none",
  background: "#fff",
  color: "#0f172a"
};
