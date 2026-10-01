"use client";

import { Search, UserPlus, X } from "lucide-react";
import { useState } from "react";

type User = {
  id: string;
  name: string;
  initials: string;
  email: string;
  online: boolean;
};

const users: User[] = [
  {
    id: "1",
    name: "Jane Doe",
    initials: "JD",
    email: "jane@example.com",
    online: true,
  },
  {
    id: "2",
    name: "Mike Johnson",
    initials: "MJ",
    email: "mike@example.com",
    online: false,
  },
  {
    id: "3",
    name: "Alex Smith",
    initials: "AS",
    email: "alex@example.com",
    online: true,
  },
];

type NewConversationDialogProps = {
  onClose: () => void;
  onSelectUser: (userId: string) => void;
};

const NewConversationDialog = ({
  onClose,
  onSelectUser,
}: NewConversationDialogProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => {
    const searchValue = searchTerm.toLowerCase();

    return (
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="new-conversation-title"
        className="w-full max-w-md overflow-hidden rounded-2xl bg-surface shadow-xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-outline-variant px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
              <UserPlus className="size-4" />
            </div>

            <div>
              <h2
                id="new-conversation-title"
                className="font-heading text-base font-bold text-on-surface"
              >
                New conversation
              </h2>

              <p className="text-xs text-on-surface/50">
                Choose someone to message
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="flex size-9 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-on-surface/50" />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search users..."
              autoFocus
              className="w-full rounded-lg bg-surface-container-high py-2.5 pl-9 pr-3 text-sm text-on-surface outline-none placeholder:text-on-surface/50 focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="max-h-72 overflow-y-auto px-2 pb-2">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <button
                key={user.id}
                type="button"
                onClick={() => onSelectUser(user.id)}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left hover:bg-surface-container"
              >
                <div className="relative shrink-0">
                  <div className="flex size-11 items-center justify-center rounded-full bg-primary-container text-sm font-semibold text-on-primary-container">
                    {user.initials}
                  </div>

                  {user.online && (
                    <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-surface bg-success" />
                  )}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-on-surface">
                    {user.name}
                  </p>

                  <p className="truncate text-xs text-on-surface/50">
                    {user.email}
                  </p>
                </div>
              </button>
            ))
          ) : (
            <p className="px-3 py-8 text-center text-sm text-on-surface/50">
              No users found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewConversationDialog;
