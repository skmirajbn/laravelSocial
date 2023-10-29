import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export default function CommentLikeShareSection({ post: apiPost, fetcher }) {
  const [post, setPost] = useState();
  const [isShowing, setIsShowing] = useState(false);
  const { user } = useAuth();
  const totalLikes = post?.post_likes?.length;
  const handleMouseEnter = () => {
    setIsShowing(true);
  };
  const handleMouseLeave = () => {
    setIsShowing(false);
  };
  const length = post?.comments?.length;

  const doLike = async (likeType) => {
    let postId = post.post_id;
    let apiEndPoint = `/api/${postId}/${likeType}`;
    const res = await axios.post(apiEndPoint);
    console.log(res);
    post?.post_likes?.forEach((like, index) => {
      if (like.user_id == user.user_id) {
        post.post_likes[index] = {
          ...like,
          post_like_type_id: likeType,
        };

        setPost({ ...post });
      }
    });
    if (post?.post_likes?.length == 0) {
      setPost({
        ...post,
        post_likes: [
          ...post.post_likes,
          {
            user_id: user.user_id,
            post_like_type_id: likeType,
          },
        ],
      });
    }
  };
  useEffect(() => {
    setPost(apiPost);
  }, [apiPost]);
  console.log(post);
  return (
    <div className="flex justify-between text-lg relative">
      {/* Post React Section */}
      {isShowing && (
        <div className="text-3xl absolute space-x-3 -top-12 left-0 -ml-3 bg-gray-200 p-3 rounded-full cursor-pointer" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
          <span onClick={() => doLike(1)}>👍</span>
          <span onClick={() => doLike(2)}>😁</span>
          <span onClick={() => doLike(3)}>❤️</span>
          <span onClick={() => doLike(4)}>😢</span>
          <span onClick={() => doLike(5)}>😡</span>
          <span onClick={() => doLike(6)}>😎</span>
        </div>
      )}

      <div className="flex items-center" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
        {post?.post_likes?.map((postLike) => {
          //check user is user.user_id and post like
          if (postLike.user_id === user.user_id && postLike.post_like_type_id === 1)
            return (
              <div className="text-3xl" key={postLike.post_like_type_id}>
                👍
              </div>
            );
          if (postLike.user_id === user.user_id && postLike.post_like_type_id === 2)
            return (
              <div className="text-3xl" key={postLike.post_like_type_id}>
                😁
              </div>
            );
          if (postLike.user_id === user.user_id && postLike.post_like_type_id === 3)
            return (
              <div className="text-3xl" key={postLike.post_like_type_id}>
                ❤️
              </div>
            );
          if (postLike.user_id === user.user_id && postLike.post_like_type_id === 4)
            return (
              <div className="text-3xl" key={postLike.post_like_type_id}>
                😢
              </div>
            );
          if (postLike.user_id === user.user_id && postLike.post_like_type_id === 5)
            return (
              <div className="text-3xl" key={postLike.post_like_type_id}>
                😡
              </div>
            );
          if (postLike.user_id === user.user_id && postLike.post_like_type_id === 6)
            return (
              <div className="text-3xl" key={postLike.post_like_type_id}>
                😎
              </div>
            );
        })}
        {post?.post_likes?.length == 0 && <i class="fa-solid fa-thumbs-up text-3xl pr-2"></i>}
        {totalLikes} React
      </div>
      <div>
        <i class="fa-solid fa-comment text-3xl"></i> {length} {length > 1 ? "Comments" : "Comment"}
      </div>
      <div>
        <i class="fa-solid fa-share text-3xl"></i> 0 Share
      </div>
    </div>
  );
}
