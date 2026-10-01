import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const RegisterPage = () => {
  return (
    <main className="min-h-screen bg-background lg:grid lg:grid-cols-2">
      <section className="primary-gradient relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -left-32 -top-32 size-96 rounded-full bg-white/10" />
        <div className="absolute -bottom-40 -right-32 size-[28rem] rounded-full bg-black/10" />

        <div className="relative p-10 xl:p-14">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-full bg-white/15 text-on-primary">
              <span className="font-heading text-lg font-bold">M</span>
            </div>

            <span className="font-heading text-lg font-bold text-on-primary">
              Messaging App
            </span>
          </Link>
        </div>

        <div className="relative max-w-xl px-10 pb-16 xl:px-14">
          <Sparkles className="size-10 text-on-primary/80" />

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-on-primary xl:text-5xl">
            A simpler way to
            <span className="block text-on-primary/70">stay connected.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-on-primary/75">
            Create your account and bring your conversations, connections,
            photos, and files together in one place.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/15 bg-white/10 p-4">
              <MessageCircle className="size-5 text-on-primary" />
              <p className="mt-3 text-sm font-semibold text-on-primary">
                Simple messaging
              </p>
              <p className="mt-1 text-xs leading-5 text-on-primary/60">
                Focus on the conversation.
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/10 p-4">
              <Users className="size-5 text-on-primary" />
              <p className="mt-3 text-sm font-semibold text-on-primary">
                Stay connected
              </p>
              <p className="mt-1 text-xs leading-5 text-on-primary/60">
                Keep your connections close.
              </p>
            </div>
          </div>
        </div>

        <div className="relative px-10 pb-8 text-xs text-on-primary/50 xl:px-14">
          Create an account and start a conversation.
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-on-primary">
                <span className="font-heading text-lg font-bold">M</span>
              </div>

              <span className="font-heading text-lg font-bold text-on-surface">
                Messaging App
              </span>
            </Link>
          </div>

          <div>
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary-container text-on-primary-container">
              <MessageCircle className="size-5" />
            </div>

            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-on-surface">
              Create your account
            </h2>

            <p className="mt-2 text-sm leading-6 text-on-surface/60">
              Join the conversation and stay connected.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-outline-variant bg-surface p-6 shadow-sm sm:p-8">
            <p className="mb-6 text-xs text-on-surface/55">
              Fields marked with{" "}
              <span className="font-semibold text-error">*</span> are required.
            </p>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-on-surface"
                >
                  Name <span className="text-error">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-outline-variant bg-surface px-3.5 py-3 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface/40 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-on-surface"
                >
                  Email <span className="text-error">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-outline-variant bg-surface px-3.5 py-3 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface/40 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-on-surface"
                >
                  Password <span className="text-error">*</span>
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                  required
                  className="w-full rounded-lg border border-outline-variant bg-surface px-3.5 py-3 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface/40 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-medium text-on-surface"
                >
                  Confirm password <span className="text-error">*</span>
                </label>

                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                  required
                  className="w-full rounded-lg border border-outline-variant bg-surface px-3.5 py-3 text-sm text-on-surface outline-none transition-colors placeholder:text-on-surface/40 focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
              >
                Create Account
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-on-surface/60">
            <Users className="size-4" />
            <span>
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-primary hover:underline"
              >
                Sign in
              </Link>
            </span>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-on-surface/40">
            <ShieldCheck className="size-4" />
            <span>Your account information is protected.</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
