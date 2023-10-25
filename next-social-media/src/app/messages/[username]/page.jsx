"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import MessageBody from "../messageBody";
import MessageOptions from "../messageOptions";

export default function Message({ params }) {
  const { data: conversation, isLoading, mutate } = useSWR("conversations", () => axios.get("api/conversation/all"));
  const [conversationuser, setConversationUser] = useState();
  const [conversationID, setConversationId] = useState();
  useEffect(() => {
    console.log(conversation?.data?.data);
    conversation?.data?.data?.forEach((con) => {
      con.conversation.conversation_users.forEach((user) => {
        user.user.user_username == params.username ? setConversationUser(user.user) : null;
        user.user.user_username == params.username ? setConversationId(user.conversation_id) : null;
      });
    });
  });
  console.dir(params.username);
  return (
    <div className="flex w-3/4 px-4">
      <MessageBody conversationuser={conversationuser} conversationID={conversationID} />
      <MessageOptions conversationuser={conversationuser} conversationID={conversationID} />
    </div>
  );
}
