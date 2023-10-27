/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable @next/next/no-img-element */
"use client";

import useSWR from "swr";

export default function Photos() {
  const { data: photos, isLoading } = useSWR("photos", () => axios.get("api/profile/all-photos"));
  console.log(photos);
  return (
    <div className="flex gap-6 py-8">
      <div className=" rounded-lg w-full px-10 py-4 space-y-4">
        <h3 className="text-lg font-medium">Timeline Photos</h3>
        <div className="grid grid-cols-4 gap-3">
          <img className="rounded-lg" src="/img/profile.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
