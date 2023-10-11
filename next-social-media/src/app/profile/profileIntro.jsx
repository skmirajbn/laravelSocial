import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useState } from "react";
import useSWR from "swr";

function ProfileIntro() {
  const { data: bioData, mutate } = useSWR("api/about/bio", () => axios.get("api/about/bio"));
  const { user } = useAuth({ middleware: "auth" });
  const [isEditing, setIsEditing] = useState(false);

  const update = (e) => {
    e.preventDefault();
    let updatedBio = e.target[0].value;
    let mutatedData = {
      ...bioData,
      data: { ...bioData.data, bio: updatedBio },
    };
    console.log(mutatedData);
    // mutatedData = JSON.stringify(mutatedData);
    mutate(mutatedData);
    setIsEditing(false);
  };
  const editPenClick = () => {
    setIsEditing(true);
  };
  console.log(bioData);
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg p-6 space-y-4">
      <h3 className="text-2xl font-bold">Intro</h3>
      <h4 className="text-lg font-bold">Bio </h4>
      {bioData && !isEditing && (
        <p>
          {bioData?.data.bio} <i class="fa-solid fa-pen" onClick={editPenClick}></i>
        </p>
      )}
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
