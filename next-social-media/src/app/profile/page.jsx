/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/header";
import Post from "@/components/post";
import { useAuth } from "@/hooks/auth";

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
            <h2 className="text-4xl font-bold">{user?.user_first_name + " " + user?.user_last_name}</h2>
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
            {/* Write Post */}
            <div className="shadow-lg shadow-gray-400 rounded-lg">
              <div className="p-6 space-y-4">
                <div className="flex gap-6 items-center">
                  <img className="w-12 h-12 object-cover rounded-full" src="img/profile.jpg" alt="" />
                  <textarea type="text" rows="2" placeholder="Whats on Your Mind?" className="input w-full border border-gray-300 p-3 h-auto"></textarea>
                  <h3 className="bg-blue-600 h-fit px-4 py-2 text-xl font-semibold text-white rounded-lg">Post</h3>
                </div>
                <div className="flex gap-4 px-20">
                  <i class="fa-solid fa-image text-2xl text-green-500"></i>
                  <i class="fa-solid fa-paperclip text-2xl text-blue-700"></i>
                </div>
              </div>
            </div>
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
