import { useState } from "react";

export default function CommentLikeShareSection({ post }) {
  const [isShowing, setIsShowing] = useState(false);
  const handleMouseEnter = () => {
    setIsShowing(true);
  };
  const handleMouseLeave = () => {
    setIsShowing(false);
  };
  const length = post?.comments?.length;
  return (
    <div className="flex justify-between text-lg relative">
      {/* Post React Section */}
      {isShowing && (
        <div className="text-3xl absolute space-x-3 -top-12 left-0 -ml-3 bg-gray-200 p-3 rounded-full" onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
          <span>👍</span>
          <span>😁</span>
          <span>❤️</span>
          <span>😢</span>
          <span>😡</span>
          <span>😎</span>
        </div>
      )}

      <div onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
        <i class="fa-solid fa-thumbs-up text-3xl"></i> 0 Like
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
