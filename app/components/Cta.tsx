import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const Cta = () => {
  return (
    <section className="section bg-surface">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-3xl primary-gradient px-6 py-16 text-center sm:px-10 lg:px-16">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 size-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-16 size-64 rounded-full bg-black/10" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-white/15 text-on-primary">
              <MessageCircle className="size-6" />
            </div>

            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-on-primary sm:text-4xl">
              Ready to start a conversation?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-on-primary/80 sm:text-base">
              Create your account and start messaging the people who matter to
              you.
            </p>

            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-surface px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-container"
            >
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
