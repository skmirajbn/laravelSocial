/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/header";
import SideMessages from "@/components/sideMessages";
import Sidebar from "@/components/sidebar";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useState } from "react";
import useSWR from "swr";
export default function DisCoverPeople() {
  const { user } = useAuth({ middleware: "auth" });
  const { data: peoples, mutate } = useSWR("discover-people", () => axios.get("api/discover-people"));

  const [isLoading, setIsLoading] = useState({});

  const handleClick = async (toUserId) => {
    setIsLoading((prev) => ({ ...prev, [toUserId]: true }));
    let formData = new FormData();
    formData.append("to_user_id", toUserId);
    await axios.post("api/friend-request", formData);
    setIsLoading((prev) => ({ ...prev, [toUserId]: false }));

    // Update the is_friend_request_sent property in the corresponding people object
    const updatedPeoples = { ...peoples };
    updatedPeoples.data = updatedPeoples.data.map((person) => {
      if (person.user_id === toUserId) {
        return { ...person, is_friend_request_sent: true };
      }
      return person;
    });
    // Update the data in the SWR cache

    mutate(updatedPeoples);
  };
  return (
    <div>
      <Header />
      <section class="flex mt-2  gap-10 relative">
        <Sidebar user={user} />
        <div className=" w-2/4">
          {peoples &&
            peoples?.data.map((people) => (
              <div key={people.user_id} className="flex gap-3 items-center p-3">
                <img className="w-12 h-12 object-cover rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + people.profile_image.image_path} alt="" />
                <h3 className="font-medium text-lg">{people.user_first_name + " " + people.user_last_name}</h3>
                {!people.is_friend_request_sent && (
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={() => handleClick(people.user_id)}>
                    Add Friend <i class="fa-solid fa-user-plus"></i>
                  </button>
                )}
                {isLoading[people.user_id] && <h3>Sending Friend Request</h3>}
                {people.is_friend_request_sent && <div className="bg-gray-300 text-black px-4 py-2 rounded-lg">Request Sent</div>}
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
