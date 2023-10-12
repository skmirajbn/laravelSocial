/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/header";
import Post from "@/components/post";
import { useAuth } from "@/hooks/auth";

import CreatePost from "./createPost";
import Mypage from "./mypage";
import ProfileLeftSidebar from "./profileLeftSidebar";

export default function Profile() {
  const { user } = useAuth({ middleware: "auth" });

  return (
    <div>
      <Mypage />
      <Header />
      <div className="container">
        <img className="h-[30rem] w-full object-cover rounded-lg" src="img/cover.jpg" alt="" />
        <div className="flex gap-6 items-end -mt-20 px-10">
          <img className="h-44 w-44 object-cover rounded-full" src="img/profile.jpg" alt="" />
          <div>
            {user && <h2 className="text-4xl font-bold">{user?.user_first_name + " " + user?.user_last_name}</h2>}
            {!user && <span className="loading loading-dots loading-lg text-blue-600"></span>}
            <h5>64 Friends</h5>
          </div>
        </div>
        <hr className="mt-3" />
        <div className="flex px-16 py-2 gap-4 text-xl font-medium text-gray-700 border-b border-t border-gray-400">
          <a className="text-blue-600" href="">
            Posts
          </a>
          <a href="">About</a>
          <a href="">Friends</a>
          <a href="">Photos</a>
          <a href="">Groups</a>
        </div>
        <div className="flex gap-6 py-8">
          <ProfileLeftSidebar />
          {/* Profile Timeline */}
          <div className="w-2/3 space-y-8">
            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}
