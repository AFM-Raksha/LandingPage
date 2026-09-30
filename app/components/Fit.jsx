const GOOD_FIT = [
  "Smaller or growing companies that can't justify building an internal audit team, but still want every transaction checked",
  'Promoter-led groups with multiple related entities',
  'PE-backed portfolios with several companies under one holding structure',
  "Audit committees or finance leads who want a check between their statutory auditor's annual visits",
  'Companies that want to keep financial data inside infrastructure they control',
]

const NOT_YET = [
  "Books kept on a system we don't support yet, such as SAP, today",
  'Looking for real-time transaction blocking rather than after-the-fact detection',
  'Not ready to grant read access to your accounting system',
]

export default function Fit() {
  return (
    <section>
      <div className="wrap">
        <div className="kicker">Fit</div>
        <h2 className="section-title">Who this is built for</h2>
        <p className="section-lede">
          Complete, monthly, CA-reviewed coverage usually means hiring an internal audit function
          most companies can&rsquo;t justify. Abhiraksha gives you that coverage as a service
          instead, whether you&rsquo;re one company or several.
        </p>

        <div className="fit-grid">
          <div className="fit-col">
            <h3><span className="fit-mark yes">✓</span>A good fit</h3>
            <ul>
              {GOOD_FIT.map((item) => (
                <li key={item}><span className="fit-mark yes">✓</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="fit-col">
            <h3><span className="fit-mark no">✕</span>Probably not yet</h3>
            <ul>
              {NOT_YET.map((item) => (
                <li key={item}><span className="fit-mark no">✕</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
