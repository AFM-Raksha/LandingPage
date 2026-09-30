const MECHANISMS = [
  {
    tag: 'ROUND-TRIP',
    body: 'Funds leave one entity and come back through another, dressed up as unrelated transactions.',
  },
  {
    tag: 'SPLIT VENDOR',
    body: 'One supplier, one bank account, invoicing two or more group companies under different names.',
  },
  {
    tag: 'SHARED CONTROL',
    body: 'A counterparty that shares a director, an address, or a bank account with someone inside the group.',
  },
]

function EntityDiagram() {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram of four group entities with one flagged cross-entity link"
    >
      <line x1="90" y1="80" x2="210" y2="170" stroke="var(--line-strong)" strokeWidth="1.5" />
      <line x1="330" y1="80" x2="210" y2="170" stroke="var(--line-strong)" strokeWidth="1.5" />
      <line x1="90" y1="270" x2="210" y2="170" stroke="var(--line-strong)" strokeWidth="1.5" />
      <line x1="330" y1="270" x2="210" y2="170" stroke="var(--line-strong)" strokeWidth="1.5" />
      <line x1="90" y1="80" x2="330" y2="270" stroke="#DC2626" strokeWidth="2" strokeDasharray="5 4" />

      <g>
        <circle cx="210" cy="170" r="30" fill="var(--bg)" stroke="var(--line-strong)" strokeWidth="1.5" />
        <text x="210" y="174" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700" fill="var(--ink)">
          GROUP
        </text>
      </g>

      <g>
        <circle cx="90" cy="80" r="26" fill="var(--risk-high-bg)" stroke="#DC2626" strokeWidth="1.5" />
        <text x="90" y="84" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700" fill="var(--risk-high-text)">
          A
        </text>
      </g>
      <g>
        <circle cx="330" cy="80" r="26" fill="var(--bg)" stroke="var(--line-strong)" strokeWidth="1.5" />
        <text x="330" y="84" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700" fill="var(--ink)">
          B
        </text>
      </g>
      <g>
        <circle cx="90" cy="270" r="26" fill="var(--bg)" stroke="var(--line-strong)" strokeWidth="1.5" />
        <text x="90" y="274" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700" fill="var(--ink)">
          C
        </text>
      </g>
      <g>
        <circle cx="330" cy="270" r="26" fill="var(--risk-high-bg)" stroke="#DC2626" strokeWidth="1.5" />
        <text x="330" y="274" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700" fill="var(--risk-high-text)">
          D
        </text>
      </g>

      <rect x="122" y="150" width="176" height="34" rx="4" fill="var(--bg)" stroke="#DC2626" strokeWidth="1" opacity="0.95" />
      <text x="210" y="163" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fontWeight="700" fill="#DC2626">
        SAME BANK A/C
      </text>
      <text x="210" y="176" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fill="#DC2626">
        ENTITY A → ENTITY D
      </text>
    </svg>
  )
}

export default function CrossEntity() {
  return (
    <section>
      <div className="wrap">
        <div className="split">
          <div>
            <div className="kicker">If you run more than one entity</div>
            <h2 className="section-title">The fraud that hides between your entities</h2>
            <p className="section-lede">
              Everything above applies whether you run one company or ten. For groups
              specifically, there&rsquo;s a second layer: an entity-level audit checks one
              company against its own books, and cannot see a pattern that only exists across
              two or three of them.
            </p>
            <ul className="mech-list">
              {MECHANISMS.map((m) => (
                <li key={m.tag}>
                  <span className="tag2">{m.tag}</span>
                  <span>{m.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="diagram-box">
            <EntityDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
