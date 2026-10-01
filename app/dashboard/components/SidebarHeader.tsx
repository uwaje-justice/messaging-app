"use client";

import { MoreVertical, Settings, UserPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NewConversationDialog from "./NewConversationDialog";

const SidebarHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleNewConversation = () => {
    setIsMenuOpen(false);
    setIsDialogOpen(true);
  };

  const handleSelectUser = (userId: string) => {
    console.log("Selected user:", userId);
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="relative flex h-16 shrink-0 items-center justify-between border-b border-outline-variant px-4">
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary text-on-primary">
            <span className="font-heading text-lg font-bold">M</span>
          </div>

          <span className="font-heading font-bold text-on-surface">
            Messages
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label="More options"
          aria-expanded={isMenuOpen}
          className="flex size-9 items-center justify-center rounded-lg text-on-surface/60 transition-colors hover:bg-surface-container"
        >
          <MoreVertical className="size-5" />
        </button>

        {isMenuOpen && (
          <div className="absolute right-4 top-14 z-20 w-48 overflow-hidden rounded-xl border border-outline-variant bg-surface p-1.5 shadow-lg">
            <button
              type="button"
              onClick={handleNewConversation}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-on-surface hover:bg-surface-container"
            >
              <UserPlus className="size-4 text-on-surface/60" />
              New conversation
            </button>

            <Link
              href="/settings"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-on-surface hover:bg-surface-container"
            >
              <Settings className="size-4 text-on-surface/60" />
              Settings
            </Link>
          </div>
        )}
      </div>

      {isDialogOpen && (
        <NewConversationDialog
          onClose={() => setIsDialogOpen(false)}
          onSelectUser={handleSelectUser}
        />
      )}
    </>
  );
};

export default SidebarHeader;
