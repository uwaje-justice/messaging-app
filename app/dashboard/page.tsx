"use client";

import { useState } from "react";
import ChatPanel from "./components/ChatPanel";
import Sidebar from "./components/Sidebar";

const DashboardPage = () => {
  const [selectedConversationId, setSelectedConversationId] = useState<
    string | null
  >(null);

  const handleSelectConversation = (conversationId: string) => {
    setSelectedConversationId(conversationId);
  };

  const handleBackToConversations = () => {
    setSelectedConversationId(null);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        selectedConversationId={selectedConversationId}
        onSelectConversation={handleSelectConversation}
      />

      <main
        className={`min-w-0 flex-1 ${
          selectedConversationId ? "flex" : "hidden md:flex"
        }`}
      >
        <ChatPanel
          conversationId={selectedConversationId}
          onBack={handleBackToConversations}
        />
      </main>
    </div>
  );
};

export default DashboardPage;
