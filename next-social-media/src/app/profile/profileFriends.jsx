/* eslint-disable @next/next/no-img-element */
import axios from "@/lib/axios";
import Link from "next/link";
import useSWR from "swr";

export default function ProfileFriends() {
  const { data: friends } = useSWR("friends", () => axios.get("api/all-friends"));
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg p-6 space-y-4">
      <h3 className="text-2xl font-bold">Friends</h3>
      <div className="grid grid-cols-3 gap-4">
        {friends?.data.map((friend) => (
          <Link key={friend.user_id} href={`/user/${friend.user_username}`}>
            <div className="flex flex-col justify-center items-center">
              <img className="rounded-md h-24 w-24 object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + friend?.profile_image?.image_path} alt="" />
              <h3 className="text-xs font-bold text-center">{friend.user_first_name + " " + friend.user_last_name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
