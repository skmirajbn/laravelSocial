import axios from "@/lib/axios";
import useSWR from "swr";

/* eslint-disable @next/next/no-img-element */
export default function UserCoverPhoto() {
  const {} = useSWR("coverImage", () => axios.get(""));
  return (
    <div className="relative">
      <img className="h-[30rem] w-full object-cover rounded-lg" src="/img/profile.jpg" alt="" />

      {/* <div className="h-[30rem] w-full object-cover rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate-pulse" src="/img/profile.jpg" alt=""></div> */}
    </div>
  );
}
