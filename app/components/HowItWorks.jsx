const STEPS = [
  {
    n: '01',
    title: 'Scoping call',
    body: "We map your business: how many entities, which accounting systems, and if there's more than one, where money typically moves between them.",
  },
  {
    n: '02',
    title: 'Read-only connect',
    body: "You grant read access to Zoho Books and/or Tally. We can't post, edit, or delete anything in your books.",
  },
  {
    n: '03',
    title: 'The scan runs, on your infrastructure',
    body: 'All 31 rules, across every entity, usually against the last twelve months of transactions. Nothing has to leave the environment you control.',
  },
  {
    n: '04',
    title: 'CA review, then report',
    body: 'A chartered accountant reviews every flag before it reaches you. You get findings, not a raw list.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="head-row">
          <div className="kicker">How it works</div>
          <h2 className="section-title">From a scoping call to a report in your inbox</h2>
          <p className="section-lede">
            Nothing gets installed on your systems, and nobody on your team has to learn a new
            tool. The work happens on our side.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
