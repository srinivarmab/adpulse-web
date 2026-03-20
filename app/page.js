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
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginTop: 22, color: "#64748b", fontSize: 14 }}>
              <span>• Detect waste fast</span>
              <span>• Improve ROAS</span>
              <span>• Share polished reports</span>
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
                <p style={{ color: "#64748b", lineHeight: 1.7, margin: 0 }}>{text}</p>
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
              <div
                className="card price-card"
                key={name}
                style={name === "Professional" ? { border: "2px solid rgba(37,99,235,.22)" } : {}}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                  <h3 style={{ margin: 0 }}>{name}</h3>
                  {name === "Professional" ? (
                    <span
                      style={{
                        padding: "5px 10px",
                        borderRadius: 999,
                        background: "rgba(37,99,235,.1)",
                        color: "#2563eb",
                        fontSize: 12,
                        fontWeight: 800
                      }}
                    >
                      Most Popular
                    </span>
                  ) : null}
                </div>
                <div style={{ color: "#64748b", marginTop: 10 }}>{text}</div>
                <div style={{ fontSize: 38, fontWeight: 800, margin: "16px 0" }}>
                  {price}
                  <span style={{ fontSize: 14, color: "#64748b" }}>/mo</span>
                </div>
                <a className={name === "Professional" ? "btn btn-primary" : "btn btn-secondary"} href="/login">
                  Choose {name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "60px 20px",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "#fff",
          borderRadius: "20px",
          margin: "40px auto 0",
          maxWidth: "1200px"
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700", margin: 0 }}>
            Fully Managed Google Ads (Done For You)
          </h2>

          <p style={{ marginTop: "10px", color: "#cbd5f5" }}>
            Let our experts manage and scale your campaigns while you focus on growth.
          </p>

          <div
            style={{
              marginTop: "30px",
              background: "#111827",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #334155"
            }}
          >
            <h3 style={{ fontSize: "24px", fontWeight: "600", marginTop: 0 }}>
              Premium Managed Plan
            </h3>

            <p style={{ marginTop: "10px", color: "#94a3b8" }}>
              Best for brands spending $1,000+/month on ads
            </p>

            <ul
              style={{
                marginTop: "20px",
                lineHeight: "1.8",
                listStyle: "none",
                padding: 0
              }}
            >
              <li>✔ Full Google Ads Account Setup</li>
              <li>✔ Weekly Optimization & Scaling</li>
              <li>✔ Conversion Tracking Setup</li>
              <li>✔ Negative Keyword Optimization</li>
              <li>✔ ROAS Improvement Strategy</li>
              <li>✔ Dedicated Expert Support</li>
            </ul>

            <div style={{ marginTop: "20px" }}>
              <a
                href="https://wa.me/918142140696?text=Hi%20I%20want%20Google%20Ads%20management"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  background: "#22c55e",
                  color: "#000",
                  borderRadius: "8px",
                  fontWeight: "700",
                  textDecoration: "none"
                }}
              >
                Book Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="lead-form">
        <div className="container">
          <div className="card" style={{ padding: 34, maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ marginTop: 0 }}>Request a Free Ads Growth Review</h2>
            <p style={{ color: "#64748b", lineHeight: 1.7 }}>
              Tell us about your business and ad budget. We’ll review your setup and get back to you.
            </p>

            <form style={{ display: "grid", gap: 16, marginTop: 20 }}>
              <input type="text" placeholder="Your Name" style={inputStyle} />
              <input type="email" placeholder="Your Email" style={inputStyle} />
              <input type="text" placeholder="Website URL" style={inputStyle} />
              <select style={inputStyle} defaultValue="">
                <option value="" disabled>Select Monthly Ad Spend</option>
                <option>Less than $500</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000+</option>
              </select>
              <textarea placeholder="Tell us your main goal" rows="5" style={inputStyle} />
              <button className="btn btn-primary" type="submit">Submit Request</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="card"
            style={{
              padding: 34,
              display: "flex",
              justifyContent: "space-between",
              gap: 24,
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >
            <div>
              <h2 style={{ margin: 0 }}>Stop wasting ad spend today.</h2>
              <p style={{ margin: "8px 0 0", color: "#64748b", lineHeight: 1.7 }}>
                Run your first audit, surface the most expensive problems, and make budget decisions with more confidence.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="/login">Start Free AI Audit</a>
              <a className="btn btn-secondary" href="#preview">See Dashboard</a>
            </div>
          </div>
        </div>
      </section>
      <form action="https://formsubmit.co/srinivarmab@gmail.com" 
  method="POST"
  style={{ display: "grid", gap: 16, marginTop: 20 }}
>

  <input type="hidden" name="_subject" value="New AdPulse Lead 🚀" />
  <input type="hidden" name="_captcha" value="false" />

  <input name="name" type="text" placeholder="Your Name" style={inputStyle} />
  <input name="email" type="email" placeholder="Your Email" style={inputStyle} />
  <input name="website" type="text" placeholder="Website URL" style={inputStyle} />

  <select name="budget" style={inputStyle} defaultValue="">
    <option value="" disabled>Select Monthly Ad Spend</option>
    <option>Less than $500</option>
    <option>$500 - $1,000</option>
    <option>$1,000 - $5,000</option>
    <option>$5,000+</option>
  </select>

  <textarea name="goal" placeholder="Tell us your main goal" rows="5" style={inputStyle} />

  <button className="btn btn-primary" type="submit">
    Submit Request
  </button>
</form>

      <footer className="footer">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div><strong>AdPulse AI</strong> — AI-powered advertising intelligence</div>
          <div>Home · Features · Pricing · Login</div>
        </div>
      </footer>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "15px",
  outline: "none"
};
