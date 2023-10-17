import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useState } from "react";
import useSWR from "swr";

export default function CommentSection({ post }) {
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
      await axios.post(`api/comment/${post.post_id}`, formData);
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
    }
  };

  let comments = post?.comments;
  return (
    <div className="flex flex-col gap-4">
      postId is {post.post_id}
      {/* Comment */}
      {comments &&
        comments.map((comment) => (
          <div>
            <div className="flex gap-3">
              <img className="w-10 h-10 rounded-full object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + comment?.user?.profile_image?.image_path} alt="" />
              <div>
                <h3 className="font-bold">{comment.user.user_first_name + " " + comment.user.user_last_name}</h3>
                <div className="flex items-center gap-3">
                  <div>
                    <h3>{comment.comment_text}</h3>
                    <h5 className="text-blue-600 text-sm">32 Like</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
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
