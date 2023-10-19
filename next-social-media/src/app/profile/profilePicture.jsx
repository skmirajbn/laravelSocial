/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function ProfilePicture() {
  const [imageUrl, setImageUrl] = useState("img/avatar.png");
  const [isUpdating, setIsUpdating] = useState(false);

  const { data, isLoading, mutate, isValidating } = useSWR("profileImage", () => axios.get("api/profile-image"));

  useEffect(() => {
    if (data?.data?.image_path) {
      setImageUrl(process.env.NEXT_PUBLIC_BACKEND_URL + "/" + data?.data?.image_path);
    }
  }, [isLoading]);

  const handlePhotoChange = async (e) => {
    setIsUpdating(true);

    // showing the photo in the circle
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let imageUrl = e.target.result;
      setImageUrl(imageUrl);
    };
    reader.readAsDataURL(file);

    // Sending to the server
    let formData = new FormData();
    formData.append("profileImage", file);
    await axios.post("api/profile-image", formData);
    mutate();
    setIsUpdating(false);
  };

  return (
    <div className=" relative">
      <div className="bg-gradient-to-t from-blue-500 to-emerald-400 rounded-full p-1">
        <img className="object-cover h-44 w-44 rounded-full" src={imageUrl} alt="" />
      </div>
      {isUpdating && <span className="loading loading-ring  w-full h-full absolute top-0 text-white"></span>}
      <label htmlFor="fileIput">
        <div id="imageIcon" className="w-10 h-10 bg-gray-200 shadow-md shadow-gray-500 absolute top-32 right-0 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-camera  text-2xl text-black "></i>
        </div>
      </label>
      <input id="fileIput" type="file" hidden onChange={handlePhotoChange} />
    </div>
  );
}
