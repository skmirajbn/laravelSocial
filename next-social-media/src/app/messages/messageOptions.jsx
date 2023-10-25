"use client";
/* eslint-disable @next/next/no-img-element */
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import useSWR from "swr";

export default function MessageOptions({ conversationuser }) {
  const { user } = useAuth();
  const { data } = useSWR("profileImage", () => axios.get("/profile-image"));

  return (
    <div className="w-1/3 py-4 space-y-4">
      <img className="h-32 w-32 object-cover rounded-full mx-auto" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + conversationuser?.active_profile_image?.image_path} alt="" />
      {conversationuser && <h3 className="text-2xl text-center font-bold">{conversationuser?.user_first_name + " " + conversationuser?.user_last_name}</h3>}
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
    </div>
  );
}
