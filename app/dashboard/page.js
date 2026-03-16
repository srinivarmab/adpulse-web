"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [accounts, setAccounts] = useState([]);
  const [result, setResult] = useState(null);
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  useEffect(() => {
    const token = localStorage.getItem("adpulse_token");
    const raw = localStorage.getItem("adpulse_user");
    if (!token || !raw) return router.push("/login");
    const user = JSON.parse(raw);
    if (user.role !== "USER") return router.push(user.role === "ADMIN" ? "/admin" : "/super-admin");
    fetch(api + "/api/accounts", { headers: { Authorization: "Bearer " + token } })
      .then(r => r.json()).then(d => setAccounts(d.items || []));
  }, []);

  async function connectMock() {
    const token = localStorage.getItem("adpulse_token");
    const res = await fetch(api + "/api/accounts/mock-connect", {
      method: "POST",
      headers: { Authorization: "Bearer " + token }
    });
    const data = await res.json();
    setAccounts([data.item, ...accounts]);
  }

  async function syncNow(id) {
    const token = localStorage.getItem("adpulse_token");
    const res = await fetch(api + "/api/accounts/sync", {
      method: "POST",
      headers: { Authorization: "Bearer " + token, "Content-Type":"application/json" },
      body: JSON.stringify({ connected_account_id: id })
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <div className="container" style={{padding:"28px 0"}}>
      <h1>User Dashboard</h1>
      <p style={{color:"#64748b"}}>Connect a demo account, sync data, and generate audit insights.</p>

      <div style={{display:"flex",gap:12,margin:"16px 0 24px"}}>
        <button className="btn btn-primary" onClick={connectMock}>Connect Demo Google Ads Account</button>
      </div>

      <div className="grid-4">
        <div className="card" style={{padding:18}}><div style={{color:"#64748b"}}>Health Score</div><div style={{fontSize:28,fontWeight:800}}>{result?.audit?.health_score ?? 89}</div></div>
        <div className="card" style={{padding:18}}><div style={{color:"#64748b"}}>Wasted Spend</div><div style={{fontSize:28,fontWeight:800,color:"#dc2626"}}>${result?.audit?.wasted_spend ?? 120}</div></div>
        <div className="card" style={{padding:18}}><div style={{color:"#64748b"}}>Top Action</div><div style={{fontSize:22,fontWeight:800}}>Add negatives</div></div>
        <div className="card" style={{padding:18}}><div style={{color:"#64748b"}}>Opportunity</div><div style={{fontSize:28,fontWeight:800,color:"#16a34a"}}>+$1,600</div></div>
      </div>

      <div className="card" style={{padding:20,marginTop:24}}>
        <h3 style={{marginTop:0}}>Connected Accounts</h3>
        {!accounts.length ? <div style={{color:"#64748b"}}>No connected accounts yet.</div> : accounts.map((a) => (
          <div key={a.id} style={{display:"flex",justifyContent:"space-between",gap:12,padding:"12px 0",borderBottom:"1px solid #e2e8f0"}}>
            <div>
              <div><b>{a.account_name}</b></div>
              <div style={{color:"#64748b"}}>Customer ID: {a.customer_id}</div>
            </div>
            <button className="btn btn-primary" onClick={() => syncNow(a.id)}>Sync + Run Audit</button>
          </div>
        ))}
      </div>

      {result ? <div className="card" style={{padding:20,marginTop:24}}>
        <h3 style={{marginTop:0}}>Latest Audit Result</h3>
        <pre style={{whiteSpace:"pre-wrap",fontSize:12,overflowX:"auto"}}>{JSON.stringify(result, null, 2)}</pre>
      </div> : null}
    </div>
  );
}
