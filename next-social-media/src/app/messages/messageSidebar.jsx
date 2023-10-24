/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import useSWR from "swr";
import SearchChats from "./searchChats";

export default function MessageSidebar() {
  const { data, isLoading } = useSWR("conversations", () => axios.get("api/conversation/all"));
  const { user } = useAuth();
  const userId = user?.user_id;
  const conversations = data?.data?.data;

  const calculateUserIndex = (conversation, userId) => {
    for (let i = 0; i < conversation.conversation_users.length; i++) {
      if (conversation.conversation_users[i].user_id !== userId) {
        return i;
      }
    }

    return conversation.conversation_users.length - 1;
  };
  return (
    <div className="w-1/4 px-6 space-y-3" style={{ height: "calc(100vh - 5rem)" }}>
      <SearchChats />
      <div className="overflow-y-auto space-y-3" style={{ height: "calc(100% - 11rem)" }}>
        {conversations?.map(({ conversation }) => {
          const userIndex = calculateUserIndex(conversation, userId);
          const conversationUserProfileImage = process.env.NEXT_PUBLIC_BACKEND_URL + "/" + conversation.conversation_users[userIndex].user.active_profile_image.image_path;
          return (
            <div key={conversation.conversation_id} className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src={conversationUserProfileImage} alt="" />
              <div>
                <h3>{conversation.conversation_users[userIndex].user.user_first_name + " " + conversation.conversation_users[userIndex].user.user_last_name}</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}
