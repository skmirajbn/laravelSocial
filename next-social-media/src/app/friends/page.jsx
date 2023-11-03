/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/header";
import SideMessages from "@/components/sideMessages";
import Sidebar from "@/components/sidebar";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import useSWR from "swr";
export default function Friend() {
  const { user } = useAuth({ middleware: "auth" });
  const { data: friends } = useSWR("friends", () => axios.get("api/all-friends"));
  return (
    <div>
      <Header />
      <section class="flex mt-2 bg-[#F0F2F5] gap-10 relative">
        <Sidebar user={user} />
        <div className=" w-2/4 py-6">
          <h3 className="text-lg font-bold">All Friends</h3>
          {friends?.data.map((friend) => (
            <div key={friend.user_id} className="flex gap-3 items-center p-3">
              <img className="w-12 h-12 object-cover rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + friend.profile_image?.image_path} alt="" />
              <h3 className="font-medium text-lg">{friend.user_first_name + " " + friend.user_last_name}</h3>
            </div>
          ))}
        </div>
        <div className="w-1/4 bg-white flex flex-col items-end px-8 py-6 sticky top-20 h-full">
          <SideMessages />
        </div>
      </section>
    </div>
  );
}
