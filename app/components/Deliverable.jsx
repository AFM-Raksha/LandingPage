const DELIVERY_MODES = [
  {
    title: 'Monthly report',
    tag: 'DEFAULT',
    tagClass: 'live',
    cardClass: '',
    body: 'Every finding, every entity, reviewed by a CA and written up as one document. This is what most clients read and nothing more.',
  },
  {
    title: 'Same-day escalation',
    tag: 'TIME-SENSITIVE',
    tagClass: 'prog',
    cardClass: '',
    body: "A high-risk flag doesn't sit in a queue until month-end. It's confirmed and routed straight to the right person on your side.",
  },
  {
    title: 'Dashboard access',
    tag: 'ON REQUEST',
    tagClass: 'plan',
    cardClass: 'future',
    body: "If your team wants to review flags directly or track status yourselves, we'll set up access. Most clients don't need it, but it's there.",
  },
]

export default function Deliverable() {
  return (
    <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="head-row split-head">
          <div>
            <div className="kicker">How findings reach you</div>
            <h2 className="section-title">A report by default. Faster when it matters.</h2>
          </div>
          <p className="section-lede">
            Most findings arrive in the monthly report. Anything high-risk doesn&rsquo;t wait for
            that cycle, and if your team wants to work inside the tool directly, that&rsquo;s
            available too.
          </p>
        </div>

        <div className="source-cards" style={{ marginTop: 36 }}>
          {DELIVERY_MODES.map((d) => (
            <div className={`source-card ${d.cardClass}`} key={d.title}>
              <h3>
                {d.title} <span className={d.tagClass}>{d.tag}</span>
              </h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>

        <div className="paper" style={{ marginTop: 36 }}>
          <div className="paper-head">
            <div className="t">ABHIRAKSHA · MONTHLY FINDINGS</div>
            <h3>Meridian Group — March 2026 (sample)</h3>
          </div>
          <div className="paper-body">
            <div className="paper-metrics">
              <div><div className="num n mono">8</div><div className="l">Flags raised</div></div>
              <div><div className="num n mono">2</div><div className="l">High risk</div></div>
              <div><div className="num n mono">1</div><div className="l">Cross-entity</div></div>
              <div><div className="num n mono">18,240</div><div className="l">Transactions scanned</div></div>
            </div>
            <h4>Executive summary</h4>
            <p>
              This month&rsquo;s scan covered four entities. Two patterns need your attention
              this cycle: one cross-entity finding involving a shared bank reference, and a
              cluster of single-entity flags concentrated in Meridian Apparel Exports.
            </p>
            <h4>Findings</h4>
            <div className="paper-finding">
              <span className="badge high">High</span>
              <span>
                Duplicate Bank Reference — the same instrument reference appears in payment
                records at both Meridian Textiles and Meridian Apparel Exports. Recommend
                confirming whether these are genuinely two separate payments.
              </span>
            </div>
            <div className="paper-finding">
              <span className="badge high">High</span>
              <span>
                Vendor Creation to Payment Gap — a new vendor at Meridian Apparel Exports was
                paid ₹6,80,500 four days after being added to the books, with no prior
                transaction history.
              </span>
            </div>
            <div className="paper-foot">
              Reviewed by the Abhiraksha audit team before delivery. Not for distribution outside
              your audit committee.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
