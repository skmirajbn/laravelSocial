"use client";
import axios from "@/lib/axios";
import { useRef, useState } from "react";

export default function SearchChats() {
  const searchSuggestion = useRef();
  const [resultUsers, setResultUsers] = useState();
  const handleOnFocus = () => {
    searchSuggestion.current.classList.remove("hidden");
  };
  const handleOnBlue = () => {
    // searchSuggestion.current.classList.add("hidden");
  };
  let timeOutId;
  const handleSearch = async (e) => {
    clearTimeout(timeOutId);
    let keyword = e.target.value.trim();
    let res;
    timeOutId = setTimeout(async () => {
      res = await axios.get(`api/search-friends/${keyword}`);
      setResultUsers(res.data);
    }, 500);
  };
  console.log(resultUsers);
  return (
    <div className="h-40 space-y-3 overflow-hidden">
      <div className=" bg-white  flex justify-between items-center h-16">
        <h2 className="text-2xl font-bold">Chats</h2>
        <div className="flex gap-4">
          <div className="bg-gray-300 h-10 w-10 flex justify-center items-center rounded-full">
            <i class="fa-solid fa-ellipsis text-xl"></i>
          </div>
          <div className="bg-gray-300 h-10 w-10 flex justify-center items-center rounded-full">
            <i class="fa-solid fa-pen-to-square text-xl"></i>
          </div>
        </div>
      </div>
      <input type="text" placeholder="Search Chats" className="input input-bordered w-full max-w-xs rounded-full bg-gray-100 h-[2rem]" onFocus={handleOnFocus} onBlur={handleOnBlue} onChange={handleSearch} />
      <div ref={searchSuggestion} className="absolute bg-gray-200 h-fit py-3 px-4 rounded-lg space-y-2">
        {/* Single User */}
        {resultUsers &&
          resultUsers.map((user) => (
            <div className="flex items-center gap-3 py-3 px-8 hover:bg-gray-300 rounded-lg">
              <img className="w-9 h-9 object-cover rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + user.active_profile_image.image_path} alt="" />
              <h3>{user.user_first_name + " " + user.user_last_name}</h3>
            </div>
          ))}
      </div>
      <h3 className="text-xl font-bold">Inbox</h3>
    </div>
  );
}
