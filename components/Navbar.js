export default function Navbar() {
  return (
    <div className="nav">
      <div className="container nav-inner">
        <a href="/" className="brand">
          <span className="brand-mark">A</span>
          <span>AdPulse AI</span>
        </a>
        <div className="menu">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#preview">Preview</a>
          <a href="/login">Login</a>
          <a className="btn btn-primary" href="/login">Start Free Audit</a>
        </div>
      </div>
    </div>
  );
}
