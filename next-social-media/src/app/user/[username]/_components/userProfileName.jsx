import axios from "@/lib/axios";
import useSWR from "swr";

export default function UserProfileName() {
  const { data: { data: { data: user } = {} } = {} } = useSWR("/api/profile/khaleda", () => axios.get(`api/profile/${params.username}`));
  return (
    <div>
      {user && <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400  to-blue-500 bg-clip-text text-transparent">{user.user_first_name + " " + user.user_last_name}</h2>}
      {!user && <span className="loading loading-dots loading-lg text-blue-600"></span>}
    </div>
  );
}
