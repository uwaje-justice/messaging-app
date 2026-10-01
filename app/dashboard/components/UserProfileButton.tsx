"use client";

import Link from "next/link";
import { LogOut, Settings, User } from "lucide-react";
import { useState } from "react";

const UserProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative border-t border-outline-variant p-3">
      {isOpen && (
        <div className="absolute bottom-full left-3 right-3 mb-2 overflow-hidden rounded-xl border border-outline-variant bg-surface shadow-lg">
          <div className="border-b border-outline-variant px-4 py-3">
            <p className="text-sm font-semibold text-on-surface">Your Name</p>
            <p className="truncate text-xs text-on-surface/50">
              you@example.com
            </p>
          </div>

          <div className="p-1.5">
            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-on-surface transition-colors hover:bg-surface-container"
            >
              <User className="size-4 text-on-surface/60" />
              Profile
            </Link>

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-on-surface transition-colors hover:bg-surface-container"
            >
              <Settings className="size-4 text-on-surface/60" />
              Settings
            </button>

            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-error transition-colors hover:bg-surface-container"
            >
              <LogOut className="size-4" />
              Log out
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-surface-container"
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-on-primary">
          UJ
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-on-surface">
            Your Name
          </p>

          <p className="text-xs text-on-surface/50">Available</p>
        </div>

        <Settings className="size-4 shrink-0 text-on-surface/50" />
      </button>
    </div>
  );
};

export default UserProfileButton;
