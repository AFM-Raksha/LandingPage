'use client'

import { useState } from 'react'

export default function ScanForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-card">
        <div className="success">
          <div className="check">✓</div>
          <h3>Request received</h3>
          <p>We&rsquo;ll reach out within one business day to scope the scan for you.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="form-card">
      <h3>Request a scan</h3>
      <p className="sub">We&rsquo;ll follow up within one business day.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input id="f-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="f-email">Work email</label>
          <input id="f-email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="f-group">Company or group name</label>
          <input id="f-group" name="group" type="text" required autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="f-entities">Number of entities</label>
          <select id="f-entities" name="entities">
            <option>1</option>
            <option>2–3</option>
            <option>4–6</option>
            <option>7–10</option>
            <option>10+</option>
          </select>
        </div>
        <button className="btn btn-primary form-submit" type="submit">Request a scan</button>
        <p className="form-note">Findings are delivered as a report by default. Dashboard access is there if your team wants it.</p>
      </form>
    </div>
  )
}
