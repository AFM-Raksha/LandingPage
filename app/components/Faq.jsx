const QA = [
  {
    q: 'Where does our data actually sit?',
    a: "Inside your own infrastructure. Abhiraksha is a productized service, not a platform that holds your books for you; we encourage every client to run it in an environment they control, rather than hand us their transaction data to host.",
  },
  {
    q: 'Do you need admin access to our books?',
    a: 'No. Read-only API access is enough, on Zoho Books and Tally today and on any system we add later. We never need permission to post or approve anything.',
  },
  {
    q: "We don't use Zoho or Tally. Can you still help?",
    a: "Today we onboard fully on Zoho Books, with Tally ingestion close behind. SAP is next on our roadmap as we take on larger, more complex businesses. Talk to us and we'll tell you exactly where you'd sit and when we could support you.",
  },
  {
    q: 'How is this different from our statutory auditor?',
    a: 'Your statutory auditor samples, once a year. Abhiraksha scans every transaction, every month, across your whole business. If you run more than one entity, it also looks for patterns that only show up between them.',
  },
  {
    q: 'Who actually looks at a flag before we see it?',
    a: 'A chartered accountant on our team reviews every flag Abhiraksha raises. What reaches you is an interpreted finding with a recommendation, not a raw output from the rule engine.',
  },
  {
    q: 'How long does the first scan take?',
    a: 'Once read access is granted, the scan itself runs in hours. Most of the calendar time in a first engagement goes into the scoping call and confirming your entity structure.',
  },
  {
    q: 'Can our team get dashboard access, not just the report?',
    a: "Yes, if you want it. Most clients are fine with the monthly report and same-day escalation on anything urgent. If your team would rather review flags and track status directly, we'll set up access to the working tool.",
  },
  {
    q: 'What happens if you find something serious mid-month?',
    a: "It doesn't wait for the report. High-risk flags are confirmed and routed straight to whoever on your side needs to know, as soon as we find them.",
  },
]

export default function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="kicker">Before you ask</div>
        <h2 className="section-title">Questions we get in the first call</h2>

        <div className="faq">
          {QA.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                {item.q}
                <span className="x">+</span>
              </summary>
              <div className="a">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
