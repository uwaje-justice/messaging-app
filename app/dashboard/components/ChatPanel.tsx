"use client";

import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

type ChatPanelProps = {
  conversationId: string | null;
  onBack: () => void;
};

const ChatPanel = ({ conversationId, onBack }: ChatPanelProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="flex h-full min-w-0 flex-1 flex-col bg-background">
      <ChatHeader
        conversationId={conversationId}
        onBack={onBack}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <MessageList searchTerm={searchTerm} />

      <MessageInput />
    </section>
  );
};

export default ChatPanel;
