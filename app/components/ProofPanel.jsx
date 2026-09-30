const ROWS = [
  {
    rule: 'Duplicate Bank Reference',
    entity: 'Meridian Textiles, Meridian Apparel Exports',
    scope: 'Cross-entity',
    risk: 'high',
    amount: '₹18,42,000',
    status: 'Pending',
  },
  {
    rule: 'Vendor Creation to Payment Gap',
    entity: 'Meridian Apparel Exports',
    scope: 'Single entity',
    risk: 'high',
    amount: '₹6,80,500',
    status: 'Under Review',
  },
  {
    rule: 'Split Transaction',
    entity: 'Meridian Retail',
    scope: 'Single entity',
    risk: 'med',
    amount: '₹2,14,000',
    status: 'Pending',
  },
  {
    rule: 'Same User Create and Approve',
    entity: 'Meridian Logistics',
    scope: 'Single entity',
    risk: 'med',
    amount: '₹95,000',
    status: 'Noted',
  },
  {
    rule: 'Round Number Invoice Without PO',
    entity: 'Meridian Textiles',
    scope: 'Single entity',
    risk: 'low',
    amount: '₹40,000',
    status: 'Cleared',
  },
]

const RISK_LABEL = { high: 'High', med: 'Medium', low: 'Low' }

export default function ProofPanel() {
  return (
    <section id="proof" style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="kicker">See it live</div>
        <h2 className="section-title">What a flagged transaction looks like</h2>
        <p className="section-lede">
          This is the working view our own team uses to review a flag before your report goes out.
        </p>

        <div className="panel">
          <div className="panel-bar">
            <div className="client">
              Meridian Group <span className="tag">SAMPLE DATA · 4 ENTITIES</span>
            </div>
            <div className="chips">
              <span className="chip active">All entities</span>
              <span className="chip">High risk</span>
              <span className="chip">Pending</span>
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="flagtable">
              <thead>
                <tr>
                  <th>Rule</th>
                  <th className="tcol-hide">Scope</th>
                  <th>Risk</th>
                  <th style={{ textAlign: 'right' }}>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.rule + r.entity}>
                    <td>
                      <div className="rule">{r.rule}</div>
                      <div className="entity">{r.entity}</div>
                    </td>
                    <td className="tcol-hide" style={{ color: 'var(--ink-2)', fontSize: '0.8rem' }}>
                      {r.scope}
                    </td>
                    <td><span className={`badge ${r.risk}`}>{RISK_LABEL[r.risk]}</span></td>
                    <td className="amt">{r.amount}</td>
                    <td><span className="status">{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="panel-foot">
            Built on Abhiraksha&rsquo;s own sample dataset. The layout matches the working tool;
            the figures are not a real client&rsquo;s.
          </div>
        </div>
      </div>
    </section>
  )
}
