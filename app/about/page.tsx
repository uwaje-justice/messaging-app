import Link from "next/link";
import { ArrowLeft, MessageCircle, Shield, Users } from "lucide-react";

const AboutPage = () => {
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

        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-primary">About</p>

          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
            Simple conversations, without the clutter.
          </h1>

          <p className="mt-6 text-base leading-7 text-on-surface/70 sm:text-lg">
            Messages is a simple messaging platform designed to make staying
            connected feel straightforward. Send messages, share files and
            images, and keep your conversations in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-outline-variant bg-surface-container p-6">
            <MessageCircle className="size-6 text-primary" />

            <h2 className="mt-5 font-heading text-lg font-semibold text-on-surface">
              Simple communication
            </h2>

            <p className="mt-2 text-sm leading-6 text-on-surface/60">
              A focused messaging experience built around the conversations that
              matter.
            </p>
          </div>

          <div className="rounded-2xl border border-outline-variant bg-surface-container p-6">
            <Shield className="size-6 text-primary" />

            <h2 className="mt-5 font-heading text-lg font-semibold text-on-surface">
              Private by design
            </h2>

            <p className="mt-2 text-sm leading-6 text-on-surface/60">
              Your conversations should remain focused on you and the people you
              choose to communicate with.
            </p>
          </div>

          <div className="rounded-2xl border border-outline-variant bg-surface-container p-6">
            <Users className="size-6 text-primary" />

            <h2 className="mt-5 font-heading text-lg font-semibold text-on-surface">
              Stay connected
            </h2>

            <p className="mt-2 text-sm leading-6 text-on-surface/60">
              Keep your conversations organized and accessible from one familiar
              place.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
