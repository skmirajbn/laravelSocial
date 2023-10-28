/* eslint-disable @next/next/no-img-element */
import axios from "@/lib/axios";
import Link from "next/link";
import useSWR from "swr";

export default function SideMessages() {
  const { data } = useSWR("api/all-friends", () => axios.get("api/all-friends"));
  const friends = data?.data;

  return (
    <div className="space-y-4 overflow-y-auto h-[80vh] w-full">
      {friends &&
        friends.map((friend) => (
          <Link className="flex items-center relative" href={`/user/${friend.user_username}`} key={friend.user_id}>
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + friend?.profile_image?.image_path} alt="" />
              <i class="fa-solid fa-circle text-green-600 absolute top-0"></i>
              <h3>{friend?.user_first_name + " " + friend?.user_last_name}</h3>
            </div>
          </Link>
        ))}
    </div>
  );
}
