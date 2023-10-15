import { useState } from "react";

export default function CommentLikeShareSection() {
  const [isShowing, setIsShowing] = useState(false);
  const handleMouseEnter = () => {
    setIsShowing(true);
  };
  const handleMouseLeave = () => {
    setIsShowing(false);
  };
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
        <i class="fa-solid fa-comment text-3xl"></i> 750 Comment
      </div>
      <div>
        <i class="fa-solid fa-share text-3xl"></i> 150 Share
      </div>
    </div>
  );
}
