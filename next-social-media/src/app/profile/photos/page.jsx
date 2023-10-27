/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable @next/next/no-img-element */
"use client";

import axios from "@/lib/axios";
import useSWR from "swr";

export default function Photos() {
  const { data: { data: photos } = {}, isLoading } = useSWR("photos", () => axios.get("api/profile/all-photos"));

  console.log(photos);
  return (
    <div className="flex flex-col gap-6 py-8">
      <div className=" rounded-lg w-full px-10 py-4 space-y-4">
        <h3 className="text-2xl font-bold">Profile Photos</h3>
        <div className="grid grid-cols-4 gap-3">
          {photos?.profile_photos?.reverse().map((photo) => (
            <img key={photo.user_id} className="rounded-lg" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + photo.image_path} alt="" />
          ))}
        </div>
      </div>
      <div className=" rounded-lg w-full px-10 py-4 space-y-4">
        <h3 className="text-2xl font-bold">Timeline Photos</h3>
        <div className="grid grid-cols-4 gap-3">
          {photos?.timeline_photos?.reverse().map((photo) => (
            <img key={photo.user_id} className="rounded-lg" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + photo.image_path} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
