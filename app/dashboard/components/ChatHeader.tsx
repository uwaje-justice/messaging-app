"use client";

import { MoreVertical, Phone, Search, Video } from "lucide-react";
import { useState } from "react";
import ChatSearch from "./ChatSearch";

type ChatHeaderProps = {
  conversationId: string | null;
  onBack: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

const ChatHeader = ({
  conversationId,
  onBack,
  searchTerm,
  onSearchChange,
}: ChatHeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenSearch = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    onSearchChange("");
  };

  return (
    <header className="flex h-16 shrink-0 items-center border-b border-outline-variant bg-surface px-3 sm:px-5">
      {isSearchOpen ? (
        <ChatSearch
          value={searchTerm}
          onChange={onSearchChange}
          onClose={handleCloseSearch}
        />
      ) : (
        <>
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onBack}
              aria-label="Back to conversations"
              className="flex size-9 shrink-0 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container md:hidden"
            >
              <span className="text-xl">←</span>
            </button>

            <div className="relative shrink-0">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-on-primary">
                JD
              </div>

              <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-surface bg-success" />
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-on-surface">
                Jane Doe
              </h2>

              <p className="font-mono text-[10px] text-success">online</p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={handleOpenSearch}
              aria-label="Search conversation"
              className="flex size-9 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container"
            >
              <Search className="size-4" />
            </button>

            <button
              type="button"
              aria-label="Voice call"
              className="hidden size-9 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container sm:flex"
            >
              <Phone className="size-4" />
            </button>

            <button
              type="button"
              aria-label="Video call"
              className="hidden size-9 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container sm:flex"
            >
              <Video className="size-4" />
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsMenuOpen((previous) => !previous)}
                aria-label="More options"
                aria-expanded={isMenuOpen}
                className="flex size-9 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container"
              >
                <MoreVertical className="size-4" />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 top-11 z-10 w-48 overflow-hidden rounded-xl border border-outline-variant bg-surface p-1.5 shadow-lg">
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-on-surface hover:bg-surface-container"
                  >
                    Contact info
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-on-surface hover:bg-surface-container"
                  >
                    Clear messages
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-error hover:bg-surface-container"
                  >
                    Delete conversation
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default ChatHeader;
