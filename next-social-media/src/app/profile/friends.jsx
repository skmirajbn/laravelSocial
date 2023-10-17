import axios from "@/lib/axios";
import useSWR from "swr";

export default function Friends() {
  const { data: friends } = useSWR("friends", () => axios.get("api/all-friends"));

  return (
    <h5>
      {friends?.data?.length} Friend{friends?.data?.length > 1 ? "s" : null}
    </h5>
  );
}
