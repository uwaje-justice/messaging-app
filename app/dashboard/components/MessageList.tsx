import MessageBubble from "./MessageBubble";

const messages = [
  {
    id: "1",
    text: "Hey! Did you get a chance to see the photos I sent?",
    sender: "other" as const,
    time: "10:24 AM",
  },
  {
    id: "2",
    text: "Yes! They look great. I really like the last one.",
    sender: "me" as const,
    time: "10:25 AM",
  },
  {
    id: "3",
    text: "Let's catch up later. I'll send you the details.",
    sender: "other" as const,
    time: "10:27 AM",
  },
];

type MessageListProps = {
  searchTerm: string;
};

const MessageList = ({ searchTerm }: MessageListProps) => {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredMessages = normalizedSearchTerm
    ? messages.filter((message) =>
        message.text.toLowerCase().includes(normalizedSearchTerm),
      )
    : messages;

  return (
    <div className="flex-1 space-y-3 overflow-y-auto p-3 sm:p-5">
      <div className="flex justify-center">
        <span className="rounded-full bg-surface px-3 py-1 font-mono text-[10px] text-on-surface/50">
          TODAY
        </span>
      </div>

      {filteredMessages.length > 0 ? (
        filteredMessages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))
      ) : (
        <div className="flex justify-center py-8">
          <p className="text-sm text-on-surface/50">No messages found.</p>
        </div>
      )}
    </div>
  );
};

export default MessageList;
