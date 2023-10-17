"use client";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import useSWR from "swr";
import logo from "./../../public/img/logo.png";
import MessengerModal from "./utils/messengerModal";
import NotificationModal from "./utils/notificationModal";

export default function Header() {
  const { logout, mutate } = useAuth({ middleware: "auth" });
  const router = useRouter();
  const doLogOut = () => {
    logout();
    mutate(null, false);
    router.push("/login");
  };
  const messageModal = useRef();
  const showToggle = () => {
    messageModal.current.classList.toggle("hidden");
    console.log("message clicked");
  };
  const notificationModal = useRef();
  const notificationToggle = () => {
    notificationModal.current.classList.toggle("hidden");
  };

  const profileDropDown = useRef();
  const toggleProfileDropdown = (e) => {
    profileDropDown.current.classList.toggle("hidden");
  };
  const { data: profileImage } = useSWR("profileImage", () => axios.get("api/profile-image"));
  return (
    <header class=" flex justify-between items-center bg-white text-black px-5 shadow-lg sticky top-0 z-10 h-20">
      <div class="flex space-x-4 w-1/4">
        <Link href="/">
          <Image class="w-10" src={logo} alt="" />
        </Link>
        <input class="w-44 rounded-full px-4 py-1 text-black bg-gray-200" type="text" placeholder="Search" />
      </div>
      <nav class="flex space-x-16 text-bold justify-center w-2/4 text-2xl">
        <a class="text-blue-600" href="#">
          <i class="fa-solid fa-house"></i>
        </a>
        <a href="#">
          <i class="fa-solid fa-people-group"></i>
        </a>
        <a href="#">
          <i class="fa-solid fa-gamepad"></i>
        </a>
      </nav>
      <div class="w-1/4 flex space-x-4 justify-end items-center text-2xl">
        <div class="  block">
          <div class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full">
            <a href="#">
              <i class="fa-solid fa-ellipsis-vertical px-px"></i>
            </a>
            <a href="#">
              <i class="fa-solid fa-ellipsis-vertical px-px"></i>
            </a>
            <a href="#">
              <i class="fa-solid fa-ellipsis-vertical px-px"></i>
            </a>
          </div>
        </div>
        <div class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full relative">
          <i class="fa-brands fa-facebook-messenger" onClick={showToggle}></i>
          <div className="bg-red-600 h-5 w-5 rounded-full absolute flex justify-center items-center text-xs text-white font-medium -right-1 -top-1">15</div>
          <MessengerModal messageModal={messageModal} />
        </div>
        <div href="#" class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full relative">
          <i class="fa-solid fa-bell " onClick={notificationToggle}></i>
          <div className="bg-red-600 h-5 w-5 rounded-full absolute flex justify-center items-center text-xs text-white font-medium -right-1 -top-1">28</div>
          <NotificationModal notificationModal={notificationModal} />
        </div>
        <div className="flex items-center gap-2 relative" onClick={toggleProfileDropdown}>
          <img class="w-12 h-12 rounded-full overflow-hidden object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + profileImage?.data?.image_path} alt="" />
          <i class="fa-solid fa-chevron-down text-sm"></i>
          {/* DropDown */}
          <div ref={profileDropDown} className="absolute bg-gray-200 rounded-lg py-3 px-8 -bottom-28 right-0 text-lg font-bold space-y-2 hidden">
            <Link href="/profile">
              <h3 className="flex gap-2 items-center text-blue-600">
                Profile <i class="fa-solid fa-user"></i>
              </h3>
            </Link>
            <div className="bg-gray-400 h-px w-full" />
            <h3 className="flex gap-2 items-center text-red-600 cursor-pointer" onClick={doLogOut}>
              Logout <i class="fa-solid fa-right-from-bracket"></i>
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}
