"use client";
import { useAuth } from "@/hooks/auth";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import logo from "./../../public/img/logo.png";
import profile from "./../../public/img/profile.jpg";

export default function Header() {
  const { logout } = useAuth({ middleware: "auth" });
  const messageModal = useRef();
  const showToggle = () => {
    messageModal.current.classList.toggle("hidden");
    console.log("message clicked");
  };
  const profileDropDown = useRef();
  const toggleProfileDropdown = (e) => {
    profileDropDown.current.classList.toggle("hidden");
  };
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

          {/* Modal */}
          <div ref={messageModal} className="absolute bg-white top-14 -right-32 px-2 w-80 py-2 shadow-lg shadow-gray-700 rounded-md hidden">
            <i class="text-white text-5xl fa-solid fa-sort-up absolute -top-4 left-1/2 -translate-x-1/2"></i>
            <div className="space-y-6 max-h-[83vh] overflow-auto px-3 py-3">
              {/* Single Message */}
              <div className="space-y-2">
                <div className="flex gap-3 items-center">
                  <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
                  <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
                  <i class="fa-solid fa-circle text-green-600 text-sm"></i>
                </div>
                <h5 className="text-xs">Hello How are you?</h5>
                <hr />
              </div>
              {/* Single Message */}
              <div className="space-y-2">
                <div className="flex gap-3 items-center">
                  <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
                  <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
                  <i class="fa-solid fa-circle text-green-600 text-sm"></i>
                </div>
                <h5 className="text-xs">Hello How are you?</h5>
                <hr />
              </div>
              {/* Single Message */}
              <div className="space-y-2">
                <div className="flex gap-3 items-center">
                  <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
                  <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
                  <i class="fa-solid fa-circle text-green-600 text-sm"></i>
                </div>
                <h5 className="text-xs">Hello How are you?</h5>
                <hr />
              </div>
              {/* Single Message */}
              <div className="space-y-2">
                <div className="flex gap-3 items-center">
                  <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
                  <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
                  <i class="fa-solid fa-circle text-green-600 text-sm"></i>
                </div>
                <h5 className="text-xs">Hello How are you?</h5>
                <hr />
              </div>
              {/* Single Message */}
              <div className="space-y-2">
                <div className="flex gap-3 items-center">
                  <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
                  <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
                  <i class="fa-solid fa-circle text-green-600 text-sm"></i>
                </div>
                <h5 className="text-xs">Hello How are you?</h5>
                <hr />
              </div>
              {/* Single Message */}
              <div className="space-y-2">
                <div className="flex gap-3 items-center">
                  <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
                  <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
                  <i class="fa-solid fa-circle text-green-600 text-sm"></i>
                </div>
                <h5 className="text-xs">Hello How are you?</h5>
                <hr />
              </div>
              {/* Single Message */}
              <div className="space-y-2">
                <div className="flex gap-3 items-center">
                  <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
                  <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
                  <i class="fa-solid fa-circle text-green-600 text-sm"></i>
                </div>
                <h5 className="text-xs">Hello How are you?</h5>
                <hr />
              </div>
              {/* Single Message */}
              <div className="space-y-2">
                <div className="flex gap-3 items-center">
                  <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
                  <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
                  <i class="fa-solid fa-circle text-green-600 text-sm"></i>
                </div>
                <h5 className="text-xs">Hello How are you?</h5>
                <hr />
              </div>
              {/* Single Message */}
              <div className="space-y-2">
                <div className="flex gap-3 items-center">
                  <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
                  <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
                  <i class="fa-solid fa-circle text-green-600 text-sm"></i>
                </div>
                <h5 className="text-xs">Hello How are you?</h5>
                <hr />
              </div>
            </div>
            <Link href="/messages" className="block text-sm text-blue-600 text-center py-2">
              See All in Messenger
            </Link>
          </div>
        </div>
        <a href="#" class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full relative">
          <i class="fa-solid fa-bell "></i>
          <div className="bg-red-600 h-5 w-5 rounded-full absolute flex justify-center items-center text-xs text-white font-medium -right-1 -top-1">28</div>
        </a>
        <div className="flex items-center gap-2 relative" onClick={toggleProfileDropdown}>
          <Image class="w-12 h-12 rounded-full overflow-hidden object-cover" src={profile} alt="" />
          <i class="fa-solid fa-chevron-down text-sm"></i>
          {/* DropDown */}
          <div ref={profileDropDown} className="absolute bg-gray-200 rounded-lg py-3 px-8 -bottom-28 right-0 text-lg font-bold space-y-2 hidden">
            <Link href="/profile">
              <h3 className="flex gap-2 items-center text-blue-600">
                Profile <i class="fa-solid fa-user"></i>
              </h3>
            </Link>
            <div className="bg-gray-400 h-px w-full" />
            <h3 className="flex flex gap-2 items-center text-red-600" onClick={logout}>
              Logout <i class="fa-solid fa-right-from-bracket"></i>
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}
