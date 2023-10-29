"use client";
import Header from "@/components/header";
import axios from "@/lib/axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";
import UserCoverPhoto from "./_components/userCoverPhoto";
import UserProfileName from "./_components/userProfileName";
import UserProfilePicture from "./_components/userProfilePicture";

export default function UserProfileLayout({ children }) {
  const params = useParams();
  const { data: { data: { data: userInfo } = {} } = {}, mutate } = useSWR("/api/profile/khaleda", () => axios.get(`api/profile/${params.username}`));

  if (userInfo?.user_username != params?.username) {
    mutate(undefined);
  }

  if (userInfo === null) {
    window.location.href = "/profile";
    return;
  }

  return (
    <div>
      <Header />
      <div className="container">
        <UserCoverPhoto />
        <div className="flex gap-6 items-end -mt-20 px-10">
          <UserProfilePicture />
          <div>
            <UserProfileName />
            <h5>
              {userInfo?.friends.length} Friend{userInfo?.friends.length > 1 ? "s" : null}
            </h5>
          </div>
          <Link href={`/messages/${userInfo?.user_username}`} className="ml-auto">
            <h5 className="text-lg bg-gray-200 p-2 rounded-lg">
              <i class="fa-brands fa-facebook-messenger text-xl"></i> Send Message
            </h5>
          </Link>
        </div>
        <hr className="mt-3" />
        <div className="flex px-16 py-2 gap-4 text-xl font-medium text-gray-700 border-b border-t border-gray-400">
          <Link className="text-blue-600" href={`/user/${userInfo?.user_username}`}>
            Posts
          </Link>
          <a href="">About</a>
          <a href="">Friends</a>
          <Link href={`/user/${userInfo?.user_username}/photos`}>Photos</Link>
          <a href="">Groups</a>
        </div>
        {children}
      </div>
    </div>
  );
}
