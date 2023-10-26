"use client";
/* eslint-disable @next/next/no-img-element */
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import useSWR from "swr";

export default function GroupMessageOptions({ conversationGroup }) {
  const { user } = useAuth();
  const { data } = useSWR("profileImage", () => axios.get("/profile-image"));
  console.log(conversationGroup?.conversation?.conversation_users);
  return (
    <div className="w-1/3 py-4 space-y-4">
      {conversationGroup?.conversation?.conversation_image && <img className="h-32 w-32 object-cover rounded-full mx-auto" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + conversationGroup?.conversation?.conversation_image} alt="" />}
      {!conversationGroup?.conversation?.conversation_image && <img className="h-32 w-32 object-cover rounded-full mx-auto" src="/img/group.png" alt="" />}
      {conversationGroup && <h3 className="text-2xl text-center font-bold">{conversationGroup?.conversation?.conversation_title}</h3>}
      <h5 className="text-center">
        <i class="fa-solid fa-circle text-green-600"></i> Online
      </h5>
      <div className="flex justify-center gap-6 text-xl">
        <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-user"></i>
        </div>
        <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-volume-xmark"></i>
        </div>
        <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl text-center font-bold text-black">Group Members</h3>
        <div className="space-y-4 px-6">
          {conversationGroup &&
            conversationGroup?.conversation?.conversation_users?.map((cUser) => (
              <div className="flex items-center gap-3" key={cUser.user.user_id}>
                <img className="w-12 h-12 rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + cUser.user.active_profile_image.image_path} alt="" />
                <h5 className="text-lg font-bold">{cUser.user.user_first_name}</h5>
                <h5 className="text-sm text-gray-400">{cUser.conversation_user_role}</h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
