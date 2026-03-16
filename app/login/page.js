"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const api = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
    const res = await fetch(api + "/api/auth/login", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Login failed");
      return;
    }
    localStorage.setItem("adpulse_token", data.token);
    localStorage.setItem("adpulse_user", JSON.stringify(data.user));
    if (data.user.role === "SUPER_ADMIN") router.push("/super-admin");
    else if (data.user.role === "ADMIN") router.push("/admin");
    else router.push("/dashboard");
  }

  return (
    <div className="container" style={{maxWidth:520,padding:"60px 0"}}>
      <div className="card" style={{padding:26}}>
        <h1 style={{marginTop:0}}>Login to AdPulse AI</h1>
        <p style={{color:"#64748b",lineHeight:1.7}}>
          Demo accounts:
          <br />user@example.com / password123
          <br />admin@example.com / password123
          <br />super@example.com / password123
        </p>
        <form onSubmit={onSubmit} style={{display:"grid",gap:12}}>
          <input className="input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
          <input className="input" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
          <button className="btn btn-primary" type="submit">Login</button>
          {error ? <div style={{color:"#dc2626"}}>{error}</div> : null}
        </form>
      </div>
    </div>
  );
}
