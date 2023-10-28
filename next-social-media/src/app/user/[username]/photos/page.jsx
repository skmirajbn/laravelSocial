"use client";
import axios from "@/lib/axios";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function UserPhotos() {
  const params = useParams();
  const { data } = useSWR("/api/profile/khaleda", () => axios.get(`api/profile/${params.username}`));
  const profileImages = data?.data?.data?.profile_image;
  const timelineImages = data?.data?.data?.images;
  const coverImages = data?.data?.data?.cover_images;

  return (
    <div className="flex flex-col gap-6 py-8">
      <div className=" rounded-lg w-full px-10 py-4 space-y-4">
        <h3 className="text-2xl font-bold">Timeline Photos</h3>
        <div className="grid grid-cols-4 gap-3">
          {timelineImages?.reverse().map((photo) => (
            <img key={photo.user_id} className="rounded-lg" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + photo.image_path} alt="" />
          ))}
        </div>
      </div>
      <div className=" rounded-lg w-full px-10 py-4 space-y-4">
        <h3 className="text-2xl font-bold">Profile Photos</h3>
        <div className="grid grid-cols-4 gap-3">
          {profileImages?.reverse().map((photo) => (
            <img key={photo.user_id} className="rounded-lg" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + photo.image_path} alt="" />
          ))}
        </div>
      </div>
      <div className=" rounded-lg w-full px-10 py-4 space-y-4">
        <h3 className="text-2xl font-bold">Cover Photos</h3>
        <div className="grid grid-cols-4 gap-3">
          {coverImages?.reverse().map((photo) => (
            <img key={photo.user_id} className="rounded-lg" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + photo.image_path} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
