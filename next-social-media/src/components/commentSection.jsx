/* eslint-disable @next/next/no-img-element */
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useState } from "react";
import useSWR from "swr";
import SingleComment from "./singleComment";

export default function CommentSection({ post, fetcher }) {
  const { data: profileImage } = useSWR("profileImage", () => axios.get("api/profile-image"));
  const { user } = useAuth({ middleware: "auth" });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChagne = (e) => {
    setInput(e.target.value);
  };

  const submitComment = async (e) => {
    if (e.key == "Enter") {
      setIsLoading(true);
      let formData = new FormData();
      formData.append("commentText", input);
      setInput("");
      let commentObject = {
        comment_text: input,
        user: {
          user_first_name: user.user_first_name,
          user_last_name: user.user_last_name,
          profile_image: {
            image_path: profileImage.data.image_path,
          },
        },
      };
      post.comments.push(commentObject);
      setIsLoading(false);
      await axios.post(`api/comment/${post.post_id}`, formData);
      fetcher();
    }
  };

  let comments = post?.comments;

  return (
    <div className="flex flex-col gap-4">
      {comments &&
        comments.map((comment) => {
          return <SingleComment key={comment.comment_id} comment={comment} />;
        })}
      {/* Writing Comment */}
      <div className="flex flex-col items-end gap-2">
        <input className="border-gray-500 border-2 w-full p-4 rounded-lg" type="text" placeholder="Enter Comment Here" value={input} onChange={handleChagne} onKeyUp={submitComment} />
        <div className="flex gap-3 items-center">
          <i class="fa-solid fa-face-smile text-3xl text-blue-500"></i>
          <i class="fa-solid fa-paper-plane text-blue-600 text-3xl"></i>
        </div>
      </div>
    </div>
  );
}
