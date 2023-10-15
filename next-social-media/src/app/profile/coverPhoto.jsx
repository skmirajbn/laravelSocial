import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function CoverPhoto() {
  const [imageUrl, setImageUrl] = useState("img/cover.jpg");
  const [isUpdating, setIsUpdating] = useState(false);

  const { data, isLoading, mutate, isValidating } = useSWR("coverImage", () => axios.get("api/cover-image"));

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
    formData.append("coverImage", file);
    await axios.post("api/cover-image", formData);
    mutate();
    setIsUpdating(false);
  };
  return (
    <div className="relative">
      {data && <img className="h-[30rem] w-full object-cover rounded-lg" src={imageUrl} alt="" />}
      {isUpdating && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <span className="loading loading-ring  w-96 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        </div>
      )}
      {!data && <div className="h-[30rem] w-full object-cover rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate-pulse" src={imageUrl} alt=""></div>}

      <label htmlFor="imageInput">
        <div className="bg-gray-200 absolute top-7 right-7 h-10 w-10 rounded-full flex justify-center items-center shadow-md shadow-gray-500">
          <i class="fa-solid fa-camera  text-2xl text-black "></i>
        </div>
      </label>
      <input id="imageInput" type="file" hidden onChange={handlePhotoChange} />
    </div>
  );
}
