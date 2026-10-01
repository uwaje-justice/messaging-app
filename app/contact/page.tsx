import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-surface">
      <div className="wrap py-12 sm:py-16">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-on-surface/60 transition-colors hover:text-on-surface"
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>

        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="text-sm font-semibold text-primary">Contact</p>

            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
              Get in touch.
            </h1>

            <p className="mt-5 text-base leading-7 text-on-surface/70">
              Have a question, found an issue, or need help? Send us a message
              and we&apos;ll get back to you.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-outline-variant bg-surface-container p-5 sm:p-6">
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-on-surface"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-outline-variant bg-surface px-3.5 py-3 text-sm text-on-surface outline-none placeholder:text-on-surface/40 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-on-surface"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-outline-variant bg-surface px-3.5 py-3 text-sm text-on-surface outline-none placeholder:text-on-surface/40 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-on-surface"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-lg border border-outline-variant bg-surface px-3.5 py-3 text-sm text-on-surface outline-none placeholder:text-on-surface/40 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="primary-gradient inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" />
                Send message
              </button>
            </form>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-on-surface/60">
            <Mail className="size-4" />
            <span>support@example.com</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
