import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function SingleComment({ comment }) {
  const [isLiked, setIsLiked] = useState();
  const [likes, setLikes] = useState(0);
  const { user } = useAuth();
  useEffect(() => {
    comment.likes?.forEach((like) => (like.user_id == user.user_id ? setIsLiked(true) : setIsLiked(false)));
  }, [comment, user]);
  useEffect(() => {
    setLikes(comment?.likes?.length);
  }, [comment]);

  const doCommentLike = async (commentId) => {
    setIsLiked((prev) => {
      if (prev) {
        setLikes((prev) => prev - 1);
        return !prev;
      } else {
        setLikes((prev) => prev + 1);
        return !prev;
      }
    });
    const res = await axios.post(`api/comment/like/${commentId}`);
  };
  return (
    <div>
      <div className="flex gap-3">
        <img className="w-10 h-10 rounded-full object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + comment?.user?.profile_image?.image_path} alt="" />
        <div>
          <h3 className="font-bold">{comment.user.user_first_name + " " + comment.user.user_last_name}</h3>
          <div className="flex items-center gap-3">
            <div>
              <h3>{comment.comment_text}</h3>
              <h5
                className="text-blue-600 text-md cursor-pointer"
                onClick={() => {
                  doCommentLike(comment.comment_id);
                }}
              >
                {isLiked ? "Unlike" : "Like"}
              </h5>
              <h6 className="text-sm">{likes} Likes</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
