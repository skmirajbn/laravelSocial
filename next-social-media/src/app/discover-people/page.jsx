"use client";
import Header from "@/components/header";
import SideMessages from "@/components/sideMessages";
import Sidebar from "@/components/sidebar";
import { useAuth } from "@/hooks/auth";
export default function DisCoverPeople() {
  const { user } = useAuth({ middleware: "auth" });
  return (
    <div>
      <Header />
      <section class="flex mt-2 bg-[#F0F2F5] gap-10 relative">
        <Sidebar user={user} />
        <div className=" w-2/4">{/* <Post /> */}</div>
        <div className="w-1/4 bg-white flex flex-col items-end px-8 py-6 sticky top-20 h-full">
          <SideMessages />
        </div>
      </section>
    </div>
  );
}
