/* eslint-disable @next/next/no-img-element */
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function UserProfilePicture() {
  const params = useParams();
  const { data: { data: { data: { active_profile_image: profileImage } = {} } = {} } = {} } = useSWR("/api/profile/khaleda", () => axios.get(`api/profile/${params.username}`));
  return (
    <div className=" relative">
      <div className="bg-gradient-to-t from-blue-500 to-emerald-400 rounded-full p-1">
        <img className="object-cover h-44 w-44 rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + profileImage?.image_path} alt="" />
      </div>
    </div>
  );
}
