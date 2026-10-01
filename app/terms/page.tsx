import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const TermsPage = () => {
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

        <article className="max-w-3xl">
          <p className="text-sm font-semibold text-primary">Legal</p>

          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-4 text-sm text-on-surface/50">
            Last updated: October 1, 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-on-surface/70">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-on-surface">
                Using the service
              </h2>

              <p>
                By using Messages, you agree to use the service responsibly and
                in accordance with applicable laws and these terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-on-surface">
                Your account
              </h2>

              <p>
                You are responsible for maintaining the security of your account
                credentials and for activity carried out through your account.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-on-surface">
                Acceptable use
              </h2>

              <p>
                You must not use the service to distribute unlawful content,
                abuse other users, interfere with the service, or attempt to
                gain unauthorized access to accounts or systems.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-on-surface">
                Service changes
              </h2>

              <p>
                Features may change as Messages develops. We may add, modify, or
                remove functionality as necessary to operate and improve the
                service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-on-surface">
                Changes to these terms
              </h2>

              <p>
                These terms may be updated from time to time. The updated
                version will be published on this page.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
};

export default TermsPage;
