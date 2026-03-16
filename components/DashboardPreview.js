export default function DashboardPreview() {
  return (
    <div className="card dashboard-shell">
      <div className="mini-sidebar">
        <div style={{fontWeight:800, marginBottom:16}}>AdPulse AI</div>
        <div className="sidebar-item active">Dashboard</div>
        <div className="sidebar-item">Accounts</div>
        <div className="sidebar-item">Audits</div>
        <div className="sidebar-item">Recommendations</div>
        <div className="sidebar-item">Alerts</div>
        <div className="sidebar-item">Reports</div>
      </div>
      <div className="dashboard-main">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,marginBottom:18}}>
          <div>
            <div style={{fontSize:28,fontWeight:800}}>Dashboard</div>
            <div style={{color:"#64748b"}}>Your Google Ads performance overview</div>
          </div>
          <a className="btn btn-primary" href="/login">Run Audit</a>
        </div>
        <div className="kpi-grid">
          <div className="kpi"><div style={{color:"#64748b"}}>Health Score</div><div style={{fontSize:28,fontWeight:800}}>89</div></div>
          <div className="kpi"><div style={{color:"#64748b"}}>Spend</div><div style={{fontSize:28,fontWeight:800}}>$21,490</div></div>
          <div className="kpi"><div style={{color:"#64748b"}}>Revenue</div><div style={{fontSize:28,fontWeight:800}}>$110,090</div></div>
          <div className="kpi"><div style={{color:"#64748b"}}>Opportunity</div><div style={{fontSize:28,fontWeight:800,color:"#16a34a"}}>+$16,113</div></div>
        </div>
        <div className="dual-grid">
          <div className="card" style={{padding:18}}>
            <strong>Recommendations</strong>
            <div className="list-item"><div><b>Add negative keywords</b><div style={{color:"#64748b"}}>Block wasted search traffic</div></div><span className="pill pill-high">High</span></div>
            <div className="list-item"><div><b>Increase retargeting budget</b><div style={{color:"#64748b"}}>Best ROAS campaign can scale</div></div><span className="pill pill-ok">Growth</span></div>
            <div className="list-item" style={{borderBottom:0}}><div><b>Reduce mobile bids</b><div style={{color:"#64748b"}}>Mobile CPA above target</div></div><span className="pill pill-med">Medium</span></div>
          </div>
          <div className="card" style={{padding:18}}>
            <strong>Recent Alerts</strong>
            <div className="list-item"><div><b>CPA spike</b><div style={{color:"#64748b"}}>Brand Awareness Q2</div></div><span className="pill pill-high">Alert</span></div>
            <div className="list-item"><div><b>Budget capped</b><div style={{color:"#64748b"}}>Retargeting campaign</div></div><span className="pill pill-med">Watch</span></div>
            <div className="list-item" style={{borderBottom:0}}><div><b>Low CTR issue</b><div style={{color:"#64748b"}}>Competitor ad group</div></div><span className="pill pill-med">Watch</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
