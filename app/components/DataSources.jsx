export default function DataSources() {
  return (
    <section id="sources" style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="kicker">Data sources</div>
        <h2 className="section-title">Any accounting system, one dataset</h2>
        <p className="section-lede">
          If you run more than one entity, each can keep its books on a different system.
          Abhiraksha normalizes whatever comes in into one local dataset, so the same 31 rules
          apply the same way no matter where a transaction lives. Zoho Books and Tally Prime are
          where we start, not where we stop.
        </p>

        <div className="source-cards">
          <div className="source-card">
            <h3>Zoho Books <span className="live">LIVE</span></h3>
            <p>Read-only connector, OAuth-based. Transactions, contacts, and invoices sync automatically on a schedule.</p>
          </div>
          <div className="source-card">
            <h3>Tally Prime <span className="prog">IN PROGRESS</span></h3>
            <p>Extraction is proven against live Tally companies. Wiring it into the same automated pipeline is our current build milestone.</p>
          </div>
          <div className="source-card future">
            <h3>SAP, and others <span className="plan">PLANNED</span></h3>
            <p>Larger groups run on more than Zoho and Tally. SAP is next on our roadmap as we take on bigger, more complex groups.</p>
          </div>
        </div>

        <div className="roadmap-note">
          <div className="k">Worth knowing about</div>
          <p>
            Tally also keeps a full edit history per voucher: who entered it, who altered it, and
            when. We&rsquo;re building that in as part of the current milestone, so an altered
            voucher shows its whole version trail in your report, not just its current state.
          </p>
        </div>
      </div>
    </section>
  )
}
