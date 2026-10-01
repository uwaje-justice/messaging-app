import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Lock,
  LogOut,
  Moon,
  Palette,
  User,
} from "lucide-react";

const SettingsPage = () => {
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
          <div className="mb-6">
            <h1 className="font-heading text-2xl font-bold text-on-surface">
              Settings
            </h1>

            <p className="mt-1 text-sm text-on-surface/60">
              Manage your account and application preferences.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface">
            <section>
              <div className="border-b border-outline-variant px-5 py-4">
                <h2 className="text-sm font-semibold text-on-surface">
                  Account
                </h2>
              </div>

              <div className="divide-y divide-outline-variant">
                <Link
                  href="/profile"
                  className="flex items-center gap-4 px-5 py-4 hover:bg-surface-container"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary-container text-on-primary-container">
                    <User className="size-5" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-on-surface">
                      Profile
                    </p>

                    <p className="mt-0.5 text-xs text-on-surface/50">
                      Manage your profile information
                    </p>
                  </div>
                </Link>

                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-surface-container"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-surface-container text-on-surface/70">
                    <Lock className="size-5" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-on-surface">
                      Password
                    </p>

                    <p className="mt-0.5 text-xs text-on-surface/50">
                      Change your password
                    </p>
                  </div>
                </button>
              </div>
            </section>

            <section className="border-t border-outline-variant">
              <div className="border-b border-outline-variant px-5 py-4">
                <h2 className="text-sm font-semibold text-on-surface">
                  Preferences
                </h2>
              </div>

              <div className="divide-y divide-outline-variant">
                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-surface-container"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-surface-container text-on-surface/70">
                    <Bell className="size-5" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-on-surface">
                      Notifications
                    </p>

                    <p className="mt-0.5 text-xs text-on-surface/50">
                      Manage message notifications
                    </p>
                  </div>

                  <span className="text-xs text-success">On</span>
                </button>

                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-surface-container"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-surface-container text-on-surface/70">
                    <Palette className="size-5" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-on-surface">
                      Appearance
                    </p>

                    <p className="mt-0.5 text-xs text-on-surface/50">
                      Customize how the app looks
                    </p>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs text-on-surface/50">
                    <Moon className="size-3.5" />
                    System
                  </span>
                </button>
              </div>
            </section>

            <section className="border-t border-outline-variant">
              <button
                type="button"
                className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-surface-container"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-error/10 text-error">
                  <LogOut className="size-5" />
                </div>

                <div>
                  <p className="text-sm font-medium text-error">Log out</p>

                  <p className="mt-0.5 text-xs text-on-surface/50">
                    Sign out of your account
                  </p>
                </div>
              </button>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
