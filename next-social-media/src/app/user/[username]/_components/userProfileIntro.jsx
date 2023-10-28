"use client";
import axios from "axios";
import useSWR from "swr";

export default function UserProfileIntro() {
  const { data } = useSWR("/api/profile/khaleda", () => axios.get(`api/profile/${params.username}`));
  const bio = data?.data?.data?.about?.about_bio;
  console.log(bio);
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg p-6 space-y-4">
      <h3 className="text-2xl font-bold">Intro</h3>
      <h4 className="text-lg font-bold">Bio </h4>
      <p>{bio}</p>
      {!data && <span className="loading loading-dots loading-md text-blue-600"></span>}
    </div>
  );
}
