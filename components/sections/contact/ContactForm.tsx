"use client";

import { useState, type FormEvent } from "react";
import { SERVICES } from "@/lib/constants";
import { Send, Check } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire up to Resend or EmailJS
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="bg-lime/10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
          <Check className="text-lime" size="36" />
        </div>
        <h3 className="font-display font-bold text-2xl text-navy mb-3">
          Thank You!
        </h3>
        <p className="font-body text-text-dark/60 max-w-md leading-relaxed">
          Your message has been received. We&apos;ll get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display font-bold text-2xl lg:text-3xl text-navy mb-2">
        Send Us a Message
      </h2>
      <p className="font-body text-text-dark/50 text-sm mb-8">
        Fill in the form below and we&apos;ll get back to you with a free quote.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name *"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-surface bg-white px-4 py-3.5 font-body text-sm text-text-dark placeholder:text-text-dark/30 focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime/50 transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Address *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-surface bg-white px-4 py-3.5 font-body text-sm text-text-dark placeholder:text-text-dark/30 focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime/50 transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-surface bg-white px-4 py-3.5 font-body text-sm text-text-dark placeholder:text-text-dark/30 focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime/50 transition-all duration-200"
          />
        </div>
        <div>
          <label htmlFor="service" className="sr-only">
            Service Interest
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-xl border border-surface bg-white px-4 py-3.5 font-body text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime/50 transition-all duration-200"
          >
            <option value="">Select a Service</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
          {service === "other" && (
            <input
              id="other-service"
              type="text"
              placeholder="Please specify your service requirement"
              value={otherService}
              onChange={(e) => setOtherService(e.target.value)}
              className="mt-3 w-full rounded-xl border border-surface bg-white px-4 py-3.5 font-body text-sm text-text-dark placeholder:text-text-dark/30 focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime/50 transition-[border-color,box-shadow] duration-200"
            />
          )}
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message *"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-surface bg-white px-4 py-3.5 font-body text-sm text-text-dark placeholder:text-text-dark/30 focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime/50 transition-all duration-200 resize-y"
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-display font-semibold uppercase tracking-wider text-sm bg-linear-to-r from-lime to-lime-dark text-white shadow-lg shadow-lime/25 hover:shadow-xl hover:shadow-lime/30 hover:brightness-110 transition-all duration-300 active:scale-[0.97]"
        >
          <Send size={16} />
          Get a Free Quote
        </button>
      </form>
    </div>
  );
}
