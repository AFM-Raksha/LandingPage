export default function Nav() {
  return (
    <div className="nav">
      <div className="wrap nav-inner">
        <div className="wordmark">Abhiraksha</div>
        <nav className="nav-links">
          <a href="#proof">Product</a>
          <a href="#sources">Data sources</a>
          <a href="#security">Security</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-right">
          <a className="btn btn-primary btn-sm nav-cta" href="#scan">Request a scan</a>
        </div>
      </div>
    </div>
  )
}
