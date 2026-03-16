"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuperAdminPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adpulse_token");
    const raw = localStorage.getItem("adpulse_user");
    if (!token || !raw) return router.push("/login");
    const u = JSON.parse(raw);
    if (u.role !== "SUPER_ADMIN") return router.push("/dashboard");
  }, []);

  return (
    <div className="container" style={{padding:"28px 0"}}>
      <h1>Super Admin Dashboard</h1>
      <div className="grid-3">
        <div className="card" style={{padding:18}}><div style={{color:"#64748b"}}>Platform Users</div><div style={{fontSize:28,fontWeight:800}}>3</div></div>
        <div className="card" style={{padding:18}}><div style={{color:"#64748b"}}>Connected Accounts</div><div style={{fontSize:28,fontWeight:800}}>0</div></div>
        <div className="card" style={{padding:18}}><div style={{color:"#64748b"}}>Total MRR</div><div style={{fontSize:28,fontWeight:800}}>$0</div></div>
      </div>
    </div>
  );
}
