import SingleMessageSidebar from "./singleMessageSidebar";

export default function MessageSidebar() {
  return (
    <div className="w-1/4 px-6 space-y-3" style={{ height: "calc(100vh - 5rem)" }}>
      <div className="h-40 space-y-3 overflow-hidden">
        <div className=" bg-white  flex justify-between items-center h-16">
          <h2 className="text-2xl font-bold">Chats</h2>
          <div className="flex gap-4">
            <div className="bg-gray-300 h-10 w-10 flex justify-center items-center rounded-full">
              <i class="fa-solid fa-ellipsis text-xl"></i>
            </div>
            <div className="bg-gray-300 h-10 w-10 flex justify-center items-center rounded-full">
              <i class="fa-solid fa-pen-to-square text-xl"></i>
            </div>
          </div>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-full bg-gray-100 h-[2rem]" />
        <h3 className="text-xl font-bold">Inbox</h3>
      </div>
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
