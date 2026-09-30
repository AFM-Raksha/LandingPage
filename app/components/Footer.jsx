export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="wordmark">Abhiraksha</div>
            <p>
              Sanskrit for protection, safekeeping. A continuous financial security layer for
              companies and corporate groups, delivered as a service.
            </p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h5>Product</h5>
              <ul>
                <li><a href="#proof">See it live</a></li>
                <li><a href="#sources">Data sources</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Trust</h5>
              <ul>
                <li><a href="#security">Access &amp; handling</a></li>
                <li><a href="#scan">Request a scan</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="foot-rule" />
        <div className="foot-meta">
          Findings are delivered as a CA-reviewed report, with same-day escalation on anything
          high-risk. Dashboard access is available if your team wants it.
        </div>
      </div>
    </footer>
  )
}
