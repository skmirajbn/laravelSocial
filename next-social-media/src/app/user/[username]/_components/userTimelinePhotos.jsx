/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import useSWR from "swr";

export default function UserTimelinePhotos() {
  const { data } = useSWR("/api/profile/khaleda", () => axios.get(`api/profile/${params.username}`));
  const photos = data?.data?.data.images;
  console.log(photos);
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg p-6 space-y-4 ">
      <h3 className="text-2xl font-bold">Photos</h3>
      <div className="grid grid-cols-3 gap-4">{photos && photos.slice(0, 12).map((photo) => <img key={photo.image_id} className="rounded-md h-24 w-24 object-cover mx-auto" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + photo.image_path} alt="" />)}</div>
    </div>
  );
}
