const ITEMS = [
  {
    mark: 'I',
    title: 'Runs in your infrastructure',
    body: "The scan runs inside infrastructure you own. Your transaction data doesn't have to sit on our servers to get the benefit of the service.",
  },
  {
    mark: 'R',
    title: 'Read-only connections',
    body: 'Every connector we build, on Zoho Books and Tally today, on other systems as we add them, can read transactions and contacts. None can post, edit, or delete anything in your books.',
  },
  {
    mark: 'E',
    title: 'Tokens encrypted at rest',
    body: 'OAuth tokens and connection credentials are stored encrypted, scoped to one client at a time.',
  },
  {
    mark: 'N',
    title: 'No login required, unless you want one',
    body: "Findings arrive as a CA-reviewed report by default. If your team wants to work inside the tool, we'll set up dashboard access on request.",
  },
]

export default function Security() {
  return (
    <section id="security" style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="kicker">Access &amp; handling</div>
        <h2 className="section-title">Your data stays on your infrastructure</h2>
        <p className="section-lede">
          Abhiraksha is a productized service, not a hosted platform holding your books. We
          encourage every client to run it inside their own infrastructure, so your financial
          data never has to leave an environment you control.
        </p>

        <div className="sec-list">
          {ITEMS.map((it) => (
            <div className="sec-item" key={it.title}>
              <div className="mark">{it.mark}</div>
              <div>
                <h4>{it.title}</h4>
                <p>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
