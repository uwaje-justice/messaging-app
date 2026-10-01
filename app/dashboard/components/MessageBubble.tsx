import { CheckCheck } from "lucide-react";

type Message = {
  id: string;
  text: string;
  sender: "me" | "other";
  time: string;
};

type MessageBubbleProps = {
  message: Message;
};

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isMine = message.sender === "me";

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2.5 sm:max-w-[75%] sm:px-4 ${
          isMine
            ? "rounded-tr-sm bg-primary-container text-on-primary-container"
            : "rounded-tl-sm bg-surface text-on-surface shadow-sm"
        }`}
      >
        <p className="text-sm leading-6">{message.text}</p>

        <div className="mt-1 flex items-center justify-end gap-1">
          <span className="font-mono text-[10px] opacity-50">
            {message.time}
          </span>

          {isMine && <CheckCheck className="size-3.5 text-primary" />}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
