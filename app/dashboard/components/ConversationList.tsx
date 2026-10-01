import ConversationItem from "./ConversationItem";

const conversations = [
  {
    id: "1",
    name: "Jane Doe",
    initials: "JD",
    lastMessage: "I'll send you the details.",
    time: "10:27 AM",
    unreadCount: 0,
    online: true,
  },
  {
    id: "2",
    name: "Mike Johnson",
    initials: "MJ",
    lastMessage: "See you tomorrow.",
    time: "9:42 AM",
    unreadCount: 2,
    online: false,
  },
  {
    id: "3",
    name: "Alex Smith",
    initials: "AS",
    lastMessage: "That sounds good.",
    time: "Yesterday",
    unreadCount: 0,
    online: true,
  },
];

type ConversationListProps = {
  selectedConversationId: string | null;
  onSelectConversation: (conversationId: string) => void;
};

const ConversationList = ({
  selectedConversationId,
  onSelectConversation,
}: ConversationListProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="border-b border-outline-variant p-3">
        <input
          type="search"
          placeholder="Search conversations"
          className="w-full rounded-lg bg-surface-container-high px-3.5 py-2.5 text-sm text-on-surface outline-none placeholder:text-on-surface/50 focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="p-2">
        {conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            selected={conversation.id === selectedConversationId}
            onSelect={onSelectConversation}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
