"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  useEffect(() => {
    const token = localStorage.getItem("adpulse_token");
    const raw = localStorage.getItem("adpulse_user");
    if (!token || !raw) return router.push("/login");
    const user = JSON.parse(raw);
    if (user.role !== "ADMIN" && user.role !== "SUPER_ADMIN") return router.push("/dashboard");
    fetch(api + "/api/admin/dashboard", { headers: { Authorization: "Bearer " + token } })
      .then(r => r.json()).then(setData);
  }, []);

  return (
    <div className="container" style={{padding:"28px 0"}}>
      <h1>Admin Dashboard</h1>
      <div className="grid-3">
        <div className="card" style={{padding:18}}><div style={{color:"#64748b"}}>Total Users</div><div style={{fontSize:28,fontWeight:800}}>{data?.total_users ?? 0}</div></div>
        <div className="card" style={{padding:18}}><div style={{color:"#64748b"}}>Connected Accounts</div><div style={{fontSize:28,fontWeight:800}}>{data?.connected_accounts ?? 0}</div></div>
        <div className="card" style={{padding:18}}><div style={{color:"#64748b"}}>Audits</div><div style={{fontSize:28,fontWeight:800}}>{data?.audits ?? 0}</div></div>
      </div>
    </div>
  );
}
