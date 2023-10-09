"use client";
import Header from "@/components/header";
import SideMessages from "@/components/sideMessages";
import Sidebar from "@/components/sidebar";
import { useAuth } from "@/hooks/auth";
import Post from "../components/post";
export default function Home() {
  const { user } = useAuth({ middleware: "auth" });
  console.log(user);
  return (
    <div>
      <Header />
      <h3>The name of user is : {user?.user_first_name}</h3>
      <section class="flex mt-2 bg-[#F0F2F5] gap-10 relative">
        <Sidebar />
        <div className=" w-2/4">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="w-1/4 bg-white flex flex-col items-end px-8 py-6 sticky top-20 h-full">
          <SideMessages />
        </div>
      </section>
    </div>
  );
}
