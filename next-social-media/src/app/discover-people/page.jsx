"use client";
import Header from "@/components/header";
import SideMessages from "@/components/sideMessages";
import Sidebar from "@/components/sidebar";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import useSWR from "swr";
export default function DisCoverPeople() {
  const { user } = useAuth({ middleware: "auth" });
  const { data: peoples } = useSWR("discover-people", () => axios.get("api/disocver-people"));
  return (
    <div>
      <Header />
      <section class="flex mt-2 bg-[#F0F2F5] gap-10 relative">
        <Sidebar user={user} />
        <div className=" w-2/4">
          {peoples &&
            peoples.data.map((people) => (
              <div className="flex gap-3 items-center p-3">
                <img className="w-12 h-12 object-cover rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + people.profile_image.image_path} alt="" />
                <h3 className="font-medium text-lg">{people.user_first_name + " " + people.user_last_name}</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Add Friend <i class="fa-solid fa-user-plus"></i>
                </button>
                <div className="bg-gray-300 text-black px-4 py-2 rounded-lg hidden">Request Sent</div>
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
