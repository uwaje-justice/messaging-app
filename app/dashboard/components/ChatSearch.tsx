"use client";

import { ArrowLeft, Search, X } from "lucide-react";
import { useEffect, useRef } from "react";

type ChatSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
};

const ChatSearch = ({ value, onChange, onClose }: ChatSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex h-16 flex-1 items-center gap-2">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close message search"
        className="flex size-9 shrink-0 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container"
      >
        <ArrowLeft className="size-5" />
      </button>

      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-on-surface/50" />

        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search messages..."
          className="w-full rounded-lg bg-surface-container-high py-2.5 pl-9 pr-9 text-sm text-on-surface outline-none placeholder:text-on-surface/50 focus:ring-1 focus:ring-primary"
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-on-surface/50 hover:bg-surface-container"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatSearch;
