import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PrivacyPage = () => {
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
          <p className="text-sm font-semibold text-primary">Privacy</p>

          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-on-surface/50">
            Last updated: October 1, 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-on-surface/70">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-on-surface">
                Information we collect
              </h2>

              <p>
                When you use Messages, we may collect information required to
                create and maintain your account, communicate with other users,
                and provide the service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-on-surface">
                How we use information
              </h2>

              <p>
                Information collected through the service is used to operate,
                maintain, secure, and improve the messaging experience.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-on-surface">
                Messages and files
              </h2>

              <p>
                Messages, images, and other files shared through the platform
                are processed as necessary to provide messaging functionality.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-on-surface">
                Security
              </h2>

              <p>
                We take reasonable measures to protect information associated
                with your account and the service.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-on-surface">
                Changes to this policy
              </h2>

              <p>
                This policy may be updated as the service develops. Changes will
                be reflected on this page with an updated date.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
};

export default PrivacyPage;
