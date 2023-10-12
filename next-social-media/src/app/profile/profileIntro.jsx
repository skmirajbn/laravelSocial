import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useState } from "react";
import useSWR from "swr";

function ProfileIntro() {
  const { data: bioData, mutate } = useSWR("api/about/bio", () => axios.get("api/about/bio"));
  const { user } = useAuth({ middleware: "auth" });
  const [isEditing, setIsEditing] = useState(false);
  const [isupdating, setIsUpdating] = useState(false);

  const update = (e) => {
    e.preventDefault();
    let updatedBio = e.target[0].value;
    let mutatedData = {
      ...bioData,
      data: { ...bioData.data, bio: updatedBio },
    };
    setIsUpdating(true);
    axios.put("api/about/bio", { bio: updatedBio }).then((e) => setIsUpdating(false));
    // mutatedData = JSON.stringify(mutatedData);
    mutate(mutatedData);
    setIsEditing(false);
  };
  const editPenClick = () => {
    setIsEditing(true);
  };
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg p-6 space-y-4">
      <h3 className="text-2xl font-bold">Intro</h3>
      <h4 className="text-lg font-bold">Bio </h4>
      {isupdating && (
        <div className="flex items-center gap-3 text-green-600">
          <h5 className="text-sm italic ">Updating</h5>
          <span className="loading loading-dots loading-sm"></span>
        </div>
      )}
      {bioData && !isEditing && (
        <p>
          {bioData?.data.bio} <i class="fa-solid fa-pen text-blue-700 pl-2" onClick={editPenClick}></i>
        </p>
      )}
      {!bioData && <span className="loading loading-dots loading-md text-blue-600"></span>}
      {isEditing && (bioData?.data.bio || bioData?.data.bio == "") && (
        <form onSubmit={update}>
          <div className="flex flex-col gap-2">
            <textarea name="bio" className="border border-black rounded-md p-2">
              {bioData?.data.bio}
            </textarea>
            <button type="submit" className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg text-sm">
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ProfileIntro;
