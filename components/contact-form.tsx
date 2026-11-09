"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { topics, whatsappLink } from "../lib/contact";
import { OutboundLink } from "./ui";

export function ContactForm({ topic, email, whatsapp }: {
  topic: keyof typeof topics;
  email?: string;
  whatsapp?: string;
}) {
  const [draftLink, setDraftLink] = useState("");
  const [channel, setChannel] = useState(email ? "email" : "whatsapp");
  const available = Boolean(email || whatsapp);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name")).trim();
    const reply = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();
    const subject = String(data.get("topic"));
    const body = `Name: ${name}\nEmail: ${reply}\n\n${message}`;
    const link = channel === "email" && email
      ? `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      : whatsapp && whatsappLink(whatsapp, `${subject}\n\n${body}`);

    if (link) {
      setDraftLink(link);
      if (channel === "email") {
        window.location.href = link;
      } else {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    }
  }

  return (
    <form className="contact-form" method="post" onSubmit={handleSubmit} onChange={() => setDraftLink("")}>
      <h2>Your enquiry</h2>
      {!available && <p className="small-note">Online enquiries are opening soon.</p>}
      <fieldset disabled={!available}>
        <legend className="sr-only">Enquiry details</legend>
        <div className="form-row">
          <label>Your name<input name="name" autoComplete="name" maxLength={100} required /></label>
          <label>Your email<input name="email" type="email" autoComplete="email" maxLength={150} required /></label>
        </div>
        <label>What can we help with?
          <select name="topic" defaultValue={topics[topic]}>
            {Object.values(topics).map((label) => <option key={label}>{label}</option>)}
          </select>
        </label>
        <label>Your message
          <textarea name="message" rows={5} maxLength={1000} placeholder="Tell us a little about your enquiry." required />
        </label>
        {email && whatsapp && (
          <label>How would you like to send your enquiry?
            <select value={channel} onChange={(event) => setChannel(event.target.value)}>
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </label>
        )}
        {available && (
          <p className="small-note">
            {channel === "email"
              ? "Review and send your draft in your email app."
              : "WhatsApp opens in a new tab. Review your draft and tap Send there."}
          </p>
        )}
        <button className="action action--primary" type="submit">
          {available ? (channel === "email" ? "Open email draft" : "Open WhatsApp draft") : "Send an enquiry"}
          <ArrowUpRight size={16} aria-hidden />
        </button>
      </fieldset>
      {draftLink && <p className="small-note" role="status"><OutboundLink href={draftLink}>Reopen your message draft</OutboundLink></p>}
    </form>
  );
}
