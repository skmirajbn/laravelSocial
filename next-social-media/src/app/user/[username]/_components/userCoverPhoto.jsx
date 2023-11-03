import axios from "@/lib/axios";
import { useParams } from "next/navigation";
import useSWR from "swr";

/* eslint-disable @next/next/no-img-element */
export default function UserCoverPhoto() {
  const params = useParams();
  const { data: { data: { data: { active_cover_image: coverImage } = {} } = {} } = {} } = useSWR("/api/profile/khaleda", () => axios.get(`api/profile/${params.username}`));
  return (
    <div className="relative">
      {coverImage && <img className="h-[30rem] w-full object-cover rounded-lg" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + coverImage?.image_path} alt="" />}
      {!coverImage && <img className="h-[30rem] w-full object-cover rounded-lg" src="/img/cover.jpg" alt="" />}
    </div>
  );
}
