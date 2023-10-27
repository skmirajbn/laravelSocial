"use client";
import Header from "@/components/header";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import UserCoverPhoto from "./_components/userCoverPhoto";
import UserProfilePicture from "./_components/userProfilePicture";

export default function UserProfileLayout({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  const { data: userInformation } = useSWR("/api/profile/khaleda", () => axios.get(`api/profile/${params.username}`));
  if (userInformation?.data?.data == null && userInformation != undefined) {
    window.location.href = "/profile";
  }
  return (
    <div>
      <Header />
      <div className="container">
        <UserCoverPhoto />
        <div className="flex gap-6 items-end -mt-20 px-10">
          <UserProfilePicture />
        </div>
        <hr className="mt-3" />
        <div className="flex px-16 py-2 gap-4 text-xl font-medium text-gray-700 border-b border-t border-gray-400">
          <Link className="text-blue-600" href="/profile">
            Posts
          </Link>
          <a href="">About</a>
          <a href="">Friends</a>
          <Link href="/profile/photos">Photos</Link>
          <a href="">Groups</a>
        </div>
        {children}
      </div>
    </div>
  );
}
