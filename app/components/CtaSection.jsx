import ScanForm from './ScanForm'

export default function CtaSection() {
  return (
    <section className="cta-band" id="scan">
      <div className="wrap">
        <div className="cta-grid">
          <div>
            <div className="kicker" style={{ color: 'var(--ink-2-on-inverse)' }}>Get started</div>
            <h2>See what&rsquo;s leaking in your business</h2>
            <p className="section-lede">
              A scan is the fastest way to find out what we&rsquo;d catch. Tell us about your
              business, and we&rsquo;ll scope it from there.
            </p>
          </div>

          <ScanForm />
        </div>
      </div>
    </section>
  )
}
