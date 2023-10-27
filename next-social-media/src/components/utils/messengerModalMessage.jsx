/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function MessengerModalMessage() {
  const { data, isLoading, mutate } = useSWR("conversations", () => axios.get("api/conversation/all"));
  const { user } = useAuth();
  const params = useParams();
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
    <div className="overflow-y-auto space-y-6" style={{ height: "calc(100% - 11rem)" }}>
      {conversations?.map(({ conversation }) => {
        const userIndex = calculateUserIndex(conversation, userId);
        const conversationUserProfileImage = process.env.NEXT_PUBLIC_BACKEND_URL + "/" + conversation.conversation_users[userIndex].user.active_profile_image.image_path;
        if (conversation?.conversation_type == "individual") {
          let isActive = conversation.conversation_users[userIndex].user.user_username === params.username;
          return (
            <Link className="block text-sm" href={"/messages/" + conversation.conversation_users[userIndex].user.user_username} key={conversation.conversation_id}>
              <div className="flex gap-3 items-center" style={isActive ? { background: "rgb(229 231 235)", padding: "10px", borderRadius: "7px" } : null}>
                <img className="h-10 w-10 object-cover rounded-full" src={conversationUserProfileImage} alt="" />
                <div>
                  <h3 className="font-bold">{conversation.conversation_users[userIndex].user.user_first_name + " " + conversation.conversation_users[userIndex].user.user_last_name}</h3>
                  <div className="flex gap-4 items-center">
                    <p>{conversation?.last_message?.message_text}</p>
                    <img className="w-5 h-5 rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + conversation?.last_message?.user?.active_profile_image?.image_path} alt="" />
                  </div>
                </div>
                <i class="fa-solid fa-comment text-blue-600"></i>
              </div>
            </Link>
          );
        } else {
          let isActive = conversation.conversation_id == params.conversationId;
          return (
            <Link className="block text-sm" href={"/messages/group/" + conversation.conversation_id} key={conversation.conversation_id}>
              <div className="flex gap-3 items-center" style={isActive ? { background: "rgb(229 231 235)", padding: "10px", borderRadius: "7px" } : null}>
                {conversation?.conversation_image && <img className="h-10 w-10 object-cover rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + conversation.conversation_image} alt="" />}
                {!conversation?.conversation_image && <img className="h-10 w-10 object-cover rounded-full" src="/img/group.png" alt="" />}
                <div>
                  <h3 className="font-bold">
                    {conversation.conversation_title} <i class="fa-solid fa-people-group text-emerald-500"></i>
                  </h3>
                  {conversation?.last_message && (
                    <div className="flex gap-4 items-center">
                      <p>{conversation?.last_message?.message_text}</p>
                      <img className="w-5 h-5 rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + conversation?.last_message?.user?.active_profile_image?.image_path} alt="" />
                    </div>
                  )}
                </div>
                <i class="fa-solid fa-comment text-blue-600"></i>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
}
