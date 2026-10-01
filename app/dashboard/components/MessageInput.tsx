import { Image, Paperclip, Send } from "lucide-react";

const MessageInput = () => {
  return (
    <div className="shrink-0 border-t border-outline-variant bg-surface p-2 sm:p-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Attach file"
          className="flex size-9 shrink-0 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container"
        >
          <Paperclip className="size-4" />
        </button>

        <button
          type="button"
          aria-label="Send image"
          className="flex size-9 shrink-0 items-center justify-center rounded-lg text-on-surface/60 hover:bg-surface-container"
        >
          <Image className="size-4" />
        </button>

        <input
          type="text"
          placeholder="Type a message..."
          className="min-w-0 flex-1 rounded-lg bg-surface-container-high px-3.5 py-2.5 text-sm text-on-surface outline-none placeholder:text-on-surface/50 focus:ring-1 focus:ring-primary"
        />

        <button
          type="button"
          aria-label="Send message"
          className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary transition-opacity hover:opacity-90"
        >
          <Send className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
