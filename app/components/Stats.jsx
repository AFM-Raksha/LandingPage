const STATS = [
  { num: '31', label: 'Continuous-audit rules, run on every transaction' },
  { num: '100%', label: 'Of transactions scanned. We do not sample.' },
  { num: '2', label: 'Accounting systems live today, more on the roadmap' },
  { num: 'Monthly', label: 'Scan cadence, reviewed by a CA before it reaches you' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap" style={{ paddingBlock: 0 }}>
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
