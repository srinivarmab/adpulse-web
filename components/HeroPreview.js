export default function HeroPreview() {
  return (
    <div className="card" style={{padding:18}}>
      <div className="metric-grid">
        <div className="metric-card"><div className="metric-label">Health Score</div><div className="metric-value green">89</div></div>
        <div className="metric-card"><div className="metric-label">Wasted Spend</div><div className="metric-value red">$4,493</div></div>
        <div className="metric-card"><div className="metric-label">Revenue</div><div className="metric-value">$110,090</div></div>
        <div className="metric-card"><div className="metric-label">ROAS</div><div className="metric-value green">5.12x</div></div>
      </div>
      <div className="card" style={{marginTop:14,padding:16,borderRadius:18}}>
        <strong>Top Recommendations</strong>
        <div style={{marginTop:12,color:"#64748b",lineHeight:1.7}}>
          • Add 12 negative keywords<br/>
          • Reduce mobile bids by 20%<br/>
          • Increase budget on retargeting campaign
        </div>
      </div>
    </div>
  );
}
