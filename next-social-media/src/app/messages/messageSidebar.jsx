import SearchChats from "./searchChats";
import SingleMessageSidebar from "./singleMessageSidebar";

export default function MessageSidebar() {
  return (
    <div className="w-1/4 px-6 space-y-3" style={{ height: "calc(100vh - 5rem)" }}>
      <SearchChats />
      <div className="overflow-y-auto space-y-3" style={{ height: "calc(100% - 11rem)" }}>
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
        <SingleMessageSidebar />
      </div>
    </div>
  );
}
