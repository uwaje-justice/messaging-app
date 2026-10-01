import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CheckCheck,
  Image,
  Lock,
  MessageCircle,
  Paperclip,
  Search,
  Send,
  Users,
} from "lucide-react";

const heroFeatures = [
  {
    label: "Secure messaging",
    icon: Lock,
  },
  {
    label: "Real-time notifications",
    icon: Bell,
  },
  {
    label: "Share photos & files",
    icon: Image,
  },
  {
    label: "Stay connected",
    icon: Users,
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 size-96 rounded-full bg-primary-container/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-96 rounded-full bg-primary-container/30 blur-3xl" />

      <div className="wrap relative grid min-h-[calc(100vh-4rem)] items-center gap-16 py-16 md:grid-cols-[1fr_0.9fr] md:py-20 lg:gap-20">
        {/* Hero content */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-3 py-1.5 text-sm font-medium text-on-surface">
            <span className="size-2 rounded-full bg-success" />
            <span>Simple. Private. Connected.</span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-on-surface sm:text-5xl lg:text-6xl xl:text-7xl">
            Conversations that
            <span className="block text-primary">keep you connected.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-on-surface/70 sm:text-lg sm:leading-8">
            Send messages, share photos and files, and stay connected with the
            people who matter—all from one simple messaging experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="primary-gradient inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-on-primary shadow-sm transition-opacity hover:opacity-90"
            >
              Get Started
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-outline-variant bg-surface px-5 py-3 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"
            >
              Explore Features
            </Link>
          </div>

          {/* Hero feature strip */}
          <div className="mt-10 border-t border-outline-variant pt-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {heroFeatures.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-on-surface/70"
                >
                  <Icon className="size-4 shrink-0 text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product preview */}
        <div className="relative mx-auto w-full max-w-lg">
          {/* Floating notification */}
          <div className="absolute -right-2 -top-6 z-10 hidden w-56 rounded-xl border border-outline-variant bg-surface p-3 shadow-lg sm:block lg:-right-8">
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                <Bell className="size-4" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold text-on-surface">
                  New message
                </p>

                <p className="mt-0.5 truncate text-xs text-on-surface/60">
                  Jane sent you a message
                </p>
              </div>
            </div>
          </div>

          {/* Main chat window */}
          <div className="relative overflow-hidden rounded-2xl border border-outline-variant bg-surface shadow-2xl">
            {/* Chat header */}
            <div className="flex items-center justify-between border-b border-outline-variant px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-on-primary">
                    JD
                  </div>

                  <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-surface bg-success" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-on-surface">
                    Jane Doe
                  </p>

                  <p className="font-mono text-[11px] text-success">online</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Search conversation"
                  className="flex size-8 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container"
                >
                  <Search className="size-4" />
                </button>

                <button
                  type="button"
                  aria-label="Conversation options"
                  className="flex size-8 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container"
                >
                  <MessageCircle className="size-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="min-h-[360px] space-y-4 bg-background p-5">
              <div className="flex justify-center">
                <span className="rounded-full bg-surface px-3 py-1 font-mono text-[10px] text-on-surface/50 shadow-sm">
                  TODAY
                </span>
              </div>

              <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-surface px-4 py-3 shadow-sm">
                <p className="text-sm leading-5 text-on-surface">
                  Hey! Did you get a chance to see the photos I sent?
                </p>

                <span className="mt-1.5 block text-right font-mono text-[10px] text-on-surface/50">
                  10:24 AM
                </span>
              </div>

              <div className="ml-auto max-w-[78%] rounded-2xl rounded-tr-sm bg-primary-container px-4 py-3">
                <p className="text-sm leading-5 text-on-primary-container">
                  Yes! They look great. I really like the last one.
                </p>

                <div className="mt-1.5 flex items-center justify-end gap-1">
                  <span className="font-mono text-[10px] text-on-primary-container/60">
                    10:25 AM
                  </span>

                  <CheckCheck className="size-3.5 text-primary" />
                </div>
              </div>

              {/* Image message */}
              <div className="ml-auto max-w-[78%] overflow-hidden rounded-2xl rounded-tr-sm bg-primary-container">
                <div className="flex h-28 items-center justify-center bg-surface-container-high">
                  <Image className="size-8 text-on-surface/40" />
                </div>

                <div className="px-4 py-2">
                  <div className="flex items-center justify-end gap-1">
                    <span className="font-mono text-[10px] text-on-primary-container/60">
                      10:26 AM
                    </span>

                    <CheckCheck className="size-3.5 text-primary" />
                  </div>
                </div>
              </div>

              <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-surface px-4 py-3 shadow-sm">
                <p className="text-sm leading-5 text-on-surface">
                  Let&apos;s catch up later. I&apos;ll send you the details.
                </p>

                <span className="mt-1.5 block text-right font-mono text-[10px] text-on-surface/50">
                  10:27 AM
                </span>
              </div>
            </div>

            {/* Message input */}
            <div className="flex items-center gap-2 border-t border-outline-variant p-3">
              <button
                type="button"
                aria-label="Attach file"
                className="flex size-9 shrink-0 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container"
              >
                <Paperclip className="size-4" />
              </button>

              <div className="flex-1 rounded-lg bg-surface-container-high px-3 py-2.5">
                <span className="text-sm text-on-surface/50">
                  Type a message...
                </span>
              </div>

              <button
                type="button"
                aria-label="Send message"
                className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary"
              >
                <Send className="size-4" />
              </button>
            </div>
          </div>

          {/* Floating connection card */}
          <div className="absolute -bottom-5 -left-5 z-10 hidden items-center gap-3 rounded-xl border border-outline-variant bg-surface px-4 py-3 shadow-lg sm:flex lg:-left-10">
            <div className="flex -space-x-2">
              <div className="flex size-7 items-center justify-center rounded-full border-2 border-surface bg-primary text-[9px] font-semibold text-on-primary">
                JD
              </div>

              <div className="flex size-7 items-center justify-center rounded-full border-2 border-surface bg-primary-container text-[9px] font-semibold text-on-primary-container">
                MK
              </div>

              <div className="flex size-7 items-center justify-center rounded-full border-2 border-surface bg-surface-container text-[9px] font-semibold text-on-surface">
                AS
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-on-surface">
                Your connections
              </p>

              <p className="font-mono text-[10px] text-on-surface/50">
                Always within reach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
