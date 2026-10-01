import Link from "next/link";
import { ArrowLeft, Mail, Settings } from "lucide-react";

const ProfilePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="wrap py-6">
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-on-surface/60 transition-colors hover:bg-surface-container hover:text-on-surface"
        >
          <ArrowLeft className="size-4" />
          Back to messages
        </Link>

        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface">
            <div className="h-32 bg-primary" />

            <div className="px-5 pb-6 sm:px-6">
              <div className="-mt-12 mb-5 flex items-end justify-between">
                <div className="flex size-24 items-center justify-center rounded-full border-4 border-surface bg-primary text-2xl font-semibold text-on-primary">
                  UJ
                </div>

                <Link
                  href="/settings"
                  className="flex items-center gap-2 rounded-lg border border-outline-variant px-3 py-2 text-sm text-on-surface transition-colors hover:bg-surface-container"
                >
                  <Settings className="size-4" />
                  Settings
                </Link>
              </div>

              <div>
                <h1 className="font-heading text-2xl font-bold text-on-surface">
                  Your Name
                </h1>

                <p className="mt-1 text-sm text-on-surface/60">Available</p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 rounded-xl bg-surface-container p-4">
                  <Mail className="size-5 text-on-surface/50" />

                  <div>
                    <p className="text-xs text-on-surface/50">Email</p>
                    <p className="mt-0.5 text-sm text-on-surface">
                      you@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
