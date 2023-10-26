"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import GroupMessageBody from "./groupMessageBody";
import GroupMessageOptions from "./groupMessageOptions";

export default function GroupConversations({ params }) {
  const { data: conversation, isLoading, mutate } = useSWR("conversations", () => axios.get("api/conversation/all"));
  const [conversationGroup, setConversationGroup] = useState();
  const [conversationID, setConversationId] = useState();
  useEffect(() => {
    setConversationId(params.conversationId);
    conversation?.data?.data?.forEach((con) => {
      if (con.conversation_id == params.conversationId) {
        setConversationGroup(con);
      }
    });
  });
  return (
    <div className="flex w-3/4 px-4">
      <GroupMessageBody conversationID={conversationID} conversationGroup={conversationGroup} />
      <GroupMessageOptions conversationID={conversationID} conversationGroup={conversationGroup} />
    </div>
  );
}
