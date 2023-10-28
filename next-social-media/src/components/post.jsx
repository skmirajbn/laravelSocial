/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import CommentLikeShareSection from "./commentLikeShareSection";
import CommentSection from "./commentSection";

export default function Post({ post }) {
  const [imageCount, setImageCount] = useState(1);
  useEffect(() => {
    let imageCount = post?.images?.length;
    setImageCount(imageCount);
  }, [post]);
  return (
    <div className=" px-6 py-8 rounded-xl shadow-lg shadow-gray-400 space-y-5">
      <div className="flex items-center gap-3">
        <img className="w-12 h-12 rounded-full object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + post?.user?.profile_image.image_path} alt="" />
        <h3 className="text-xl  font-bold">{post?.user?.user_first_name + " " + post?.user?.user_last_name}</h3>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">{post?.post_title}</h3>
        <h3 className="text-base">{post?.post_body}</h3>
        <div className="flex">
          {/* One Image */}
          {imageCount == 1 && <img className="rounded-lg w-full max-h-[600px] object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + post?.images[0]?.image_path} alt="" />}
          {/* Two Images */}
          <div className="flex gap-2">{imageCount == 2 && post.images.map((image, index) => <img key={index} className="rounded-lg w-1/2 max-h-[600px] object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + image.image_path} alt="" />)}</div>
          {/* Three Images */}
          <div className="grid grid-cols-2 gap-2">{imageCount == 3 && post.images.map((image, index) => <img key={index} className="rounded-lg  max-h-[600px] object-cover" style={index == 2 ? { gridColumn: "span 2 / span 2", width: "100%", maxHeight: "400px" } : null} src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + image.image_path} alt="" />)}</div>
          {/* Four Images */}
          <div className="grid grid-cols-2 gap-2">{imageCount == 4 && post.images.map((image, index) => <img key={index} className="rounded-lg  max-h-[600px] object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + image.image_path} alt="" />)}</div>

          {/* More than 4 Images */}
          {imageCount > 4 && (
            <div className="grid grid-cols-6 gap-2 relative">
              {imageCount > 4 && post.images.map((image, index) => <img key={index} className="rounded-lg  max-h-[600px] object-cover" style={index < 2 ? { gridColumn: "span 3 / span 3", width: "100%", maxHeight: "400px" } : { gridColumn: "span 2 / span 2", width: "100%", maxHeight: "400px" }} src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + image.image_path} alt="" hidden={index > 4 ? true : null} />)}
              {imageCount > 4 && <div className="absolute text-xl font-bold text-white bottom-4 right-4 bg-black bg-opacity-50 p-3 rounded-lg">More {imageCount + 1 - 4} Images</div>}
            </div>
          )}
        </div>
        <CommentLikeShareSection post={post} />
      </div>
      <CommentSection post={post} />
    </div>
  );
}
