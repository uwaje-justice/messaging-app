import ConversationList from "./ConversationList";
import SidebarHeader from "./SidebarHeader";
import UserProfileButton from "./UserProfileButton";

type SidebarProps = {
  selectedConversationId: string | null;
  onSelectConversation: (conversationId: string) => void;
};

const Sidebar = ({
  selectedConversationId,
  onSelectConversation,
}: SidebarProps) => {
  return (
    <aside
      className={`flex h-full w-full flex-col border-r border-outline-variant bg-surface md:max-w-sm ${
        selectedConversationId ? "hidden md:flex" : "flex"
      }`}
    >
      <SidebarHeader />

      <ConversationList
        selectedConversationId={selectedConversationId}
        onSelectConversation={onSelectConversation}
      />

      <UserProfileButton />
    </aside>
  );
};

export default Sidebar;
