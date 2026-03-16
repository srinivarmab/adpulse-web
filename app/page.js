import Navbar from "@/components/Navbar";
import HeroPreview from "@/components/HeroPreview";
import DashboardPreview from "@/components/DashboardPreview";

const features = [
  ["AI Campaign Audit", "Spot account issues, wasted spend, and hidden blockers in seconds."],
  ["Wasted Spend Detection", "Catch weak keywords, search terms, and underperforming campaigns."],
  ["Geo + Device ROAS", "See which locations and devices deserve more or less budget."],
  ["Time ROAS Analysis", "Understand which hours and days generate better profitability."],
  ["Negative Keyword Suggestions", "Automatically surface expensive irrelevant search queries."],
  ["Bid Suggestions", "Receive practical bid and budget optimization recommendations."]
];

const plans = [
  ["Basic", "$19", "Great for first-time users"],
  ["Professional", "$59", "Most popular for growth-focused advertisers"],
  ["Growth", "$119", "Advanced optimization and AI insights"],
  ["Agency", "$249", "White-label style workflows and premium support"]
];

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">AI-powered advertising intelligence</span>
            <h1>Find Wasted Ad Spend with AI</h1>
            <p>
              Connect your Google Ads account and instantly uncover wasted spend, weak keywords,
              poor geo and device performance, and clear actions to improve ROAS.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/login">Start Free AI Audit</a>
              <a className="btn btn-secondary" href="#preview">See Product Preview</a>
            </div>
            <div style={{display:"flex",gap:18,flexWrap:"wrap",marginTop:22,color:"#64748b",fontSize:14}}>
              <span>✓ Detect waste fast</span>
              <span>✓ Improve ROAS</span>
              <span>✓ Share polished reports</span>
            </div>
          </div>
          <HeroPreview />
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <h2>Designed to convert advertisers into long-term users</h2>
          <p className="lead">
            AdPulse AI combines auditing, optimization signals, and decision-ready recommendations
            into one clean SaaS product built for marketers, brands, and agencies.
          </p>
          <div className="grid-3">
            {features.map(([title, text], i) => (
              <div className="card feature-card" key={title}>
                <div className="icon-box">{i + 1}</div>
                <h3>{title}</h3>
                <p style={{color:"#64748b",lineHeight:1.7,margin:0}}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="preview">
        <div className="container">
          <h2>Professional dashboard preview</h2>
          <p className="lead">
            Show clear business value fast with health score, recommendations, alerts, and opportunity tracking.
          </p>
          <DashboardPreview />
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <h2>Simple pricing that supports growth</h2>
          <p className="lead">
            Start with a low-friction entry plan and upgrade as your optimization workflow becomes more advanced.
          </p>
          <div className="grid-4">
            {plans.map(([name, price, text]) => (
              <div className="card price-card" key={name} style={name === "Professional" ? {border:"2px solid rgba(37,99,235,.22)"} : {}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10}}>
                  <h3 style={{margin:0}}>{name}</h3>
                  {name === "Professional" ? <span style={{padding:"5px 10px",borderRadius:999,background:"rgba(37,99,235,.1)",color:"#2563eb",fontSize:12,fontWeight:800}}>Most Popular</span> : null}
                </div>
                <div style={{color:"#64748b",marginTop:10}}>{text}</div>
                <div style={{fontSize:38,fontWeight:800,margin:"16px 0"}}>{price}<span style={{fontSize:14,color:"#64748b"}}>/mo</span></div>
                <a className={name === "Professional" ? "btn btn-primary" : "btn btn-secondary"} href="/login">
                  Choose {name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{padding:34,display:"flex",justifyContent:"space-between",gap:24,alignItems:"center",flexWrap:"wrap"}}>
            <div>
              <h2 style={{margin:0}}>Stop wasting ad spend today.</h2>
              <p style={{margin:"8px 0 0",color:"#64748b",lineHeight:1.7}}>
                Run your first audit, surface the most expensive problems, and make budget decisions with more confidence.
              </p>
            </div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <a className="btn btn-primary" href="/login">Start Free AI Audit</a>
              <a className="btn btn-secondary" href="#preview">See Dashboard</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container" style={{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
          <div><strong>AdPulse AI</strong> — AI-powered advertising intelligence</div>
          <div>Home · Features · Pricing · Login</div>
        </div>
      </footer>
    </>
  );
}
