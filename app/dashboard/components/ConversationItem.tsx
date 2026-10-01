type Conversation = {
  id: string;
  name: string;
  initials: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  online: boolean;
};

type ConversationItemProps = {
  conversation: Conversation;
  selected: boolean;
  onSelect: (conversationId: string) => void;
};

const ConversationItem = ({
  conversation,
  selected,
  onSelect,
}: ConversationItemProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(conversation.id)}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
        selected ? "bg-surface-container" : "hover:bg-surface-container"
      }`}
    >
      <div className="relative shrink-0">
        <div className="flex size-11 items-center justify-center rounded-full bg-primary-container text-sm font-semibold text-on-primary-container">
          {conversation.initials}
        </div>

        {conversation.online && (
          <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-surface bg-success" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-semibold text-on-surface">
            {conversation.name}
          </p>

          <span className="shrink-0 font-mono text-[10px] text-on-surface/50">
            {conversation.time}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="truncate text-xs text-on-surface/60">
            {conversation.lastMessage}
          </p>

          {conversation.unreadCount > 0 && (
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-on-primary">
              {conversation.unreadCount}
            </span>
          )}
        </div>
      </div>
    </button>
  );
};

export default ConversationItem;
