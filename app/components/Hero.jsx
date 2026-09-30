export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-inner">
        <div className="eyebrow">Continuous audit, for one company or many</div>
        <h1>
          <span className="pct">100%</span> of transactions.
          <br />
          Every month, without exception.
        </h1>
        <p className="lede">
          We scan every transaction in your business, not a sample, catching what a small
          accounting team can&rsquo;t review alone. Run more than one entity? We also catch the
          fraud that moves between them.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#scan">See what&rsquo;s leaking in your business →</a>
          <a className="btn btn-ghost-inverse" href="#how">How it works</a>
        </div>
      </div>
    </header>
  )
}
