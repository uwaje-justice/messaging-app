import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="wrap">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary-container text-on-primary-container">
            <MessageCircle className="size-8" />
          </div>

          <p className="mt-8 font-mono text-sm font-medium text-primary">
            ERROR 404
          </p>

          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
            Page not found
          </h1>

          <p className="mt-4 text-base leading-7 text-on-surface/70">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
          >
            <Home className="size-4" />
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
