import axios from "@/lib/axios";
import Link from "next/link";
import useSWR from "swr";

export default function Sidebar({ user }) {
  const { data, isLoading, mutate, isValidating } = useSWR("profileImage", () => axios.get("api/profile-image"));
  return (
    <div class="w-1/4 px-4 py-3 space-y-3 sticky top-20 overflow-y-auto h-[90vh] ">
      <div class="flex items-center space-x-3 ">
        {!data?.data?.image_path && <img class="w-10 h-10 rounded-full object-cover" src="img/avatar.png" alt="" />}
        {data?.data?.image_path && <img class="w-10 h-10 rounded-full object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + data?.data?.image_path} alt="" />}
        {user && <h3>{user?.user_first_name + " " + user?.user_last_name}</h3>}
      </div>
      <Link className="block" href="/friends">
        <div class="flex items-center space-x-3">
          <img class="w-10 h-10 scale-75" src="img/friends.png" alt="" />
          <h3>Friends</h3>
        </div>
      </Link>
      <div class="flex items-center space-x-3">
        <img class="w-10 h-10 rounded-full object-cover" src="img/groups.webp" alt="" />
        <h3>Groups</h3>
      </div>
      <Link className="block" href="/friend-requests">
        <div class="flex items-center space-x-3">
          <img class="w-10 h-10 rounded-full object-cover" src="img/friend-requests.png" alt="" />
          <h3>Friend Requests</h3>
        </div>
      </Link>
      <Link href="/discover-people" className="block">
        <div class="flex items-center space-x-3">
          <img class="w-10 h-10 rounded-full object-cover" src="img/discover-people.png" alt="" />
          <h3>Discover People</h3>
        </div>
      </Link>
    </div>
  );
}
