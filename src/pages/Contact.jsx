import { useState } from "react";

/**
 * Contact form. NOTE: this is front-end only -- `handleSubmit` never
 * calls a server. Wire it up to a real email service/API before relying
 * on it to actually deliver messages.
 */
export default function Contact() {
  // Whether the form has been "submitted" (client-side only).
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Stops the browser's default full-page-reload form submission.
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl tracking-tight">Contact</h1>
      <p className="mt-3 text-ink/70">
        Bookings, prints, or just to talk shop — reach out below.
      </p>

      {/* Conditionally render either the form or a thank-you message
          based on `submitted`. */}
      {submitted ? (
        <div className="mt-10 border border-thrasher-red/30 bg-thrasher-red/5 px-6 py-8 text-ink">
          Thanks — this is a placeholder confirmation. Wire this form up to
          your email service or a backend of choice.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-ink/60">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full border-b border-ink/20 bg-transparent py-2 outline-none focus:border-thrasher-red"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-ink/60">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border-b border-ink/20 bg-transparent py-2 outline-none focus:border-thrasher-red"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-ink/60">
              Message
            </label>
            <textarea
              rows={5}
              required
              className="w-full border-b border-ink/20 bg-transparent py-2 outline-none focus:border-thrasher-red"
            />
          </div>
          <button
            type="submit"
            className="bg-thrasher-black px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-thrasher-red"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
