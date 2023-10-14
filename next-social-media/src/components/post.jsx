import { useEffect, useState } from "react";

export default function Post({ post }) {
  const [imageCount, setImageCount] = useState(1);
  useEffect(() => {
    let imageCount = post.images.length;
    setImageCount(imageCount);
  }, [post]);
  return (
    <div className=" px-6 py-8 rounded-xl shadow-lg shadow-gray-400">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">{post?.post_title}</h3>
        <h3 className="text-base">{post?.post_body}</h3>
        <div className="flex">
          {/* One Image */}
          {imageCount == 1 && <img className="rounded-lg w-full max-h-[600px] object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + post?.images[0]?.image_path} alt="" />}
          {/* Two Images */}
          <div className="flex gap-2">{imageCount == 2 && post.images.map((image) => <img className="rounded-lg w-1/2 max-h-[600px] object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + image.image_path} alt="" />)}</div>
          {/* Three Images */}
          <div className="grid grid-cols-2 gap-2">{imageCount == 3 && post.images.map((image, index) => <img className="rounded-lg  max-h-[600px] object-cover" style={index == 2 ? { gridColumn: "span 2 / span 2", width: "100%", maxHeight: "400px" } : null} src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + image.image_path} alt="" />)}</div>
          {/* Four Images */}
          <div className="grid grid-cols-2 gap-2">{imageCount == 4 && post.images.map((image) => <img className="rounded-lg  max-h-[600px] object-cover" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + image.image_path} alt="" />)}</div>

          {/* More than 4 Images */}
          {imageCount > 4 && (
            <div className="grid grid-cols-6 gap-2 relative">
              {imageCount > 4 && post.images.map((image, index) => <img className="rounded-lg  max-h-[600px] object-cover" style={index < 2 ? { gridColumn: "span 3 / span 3", width: "100%", maxHeight: "400px" } : { gridColumn: "span 2 / span 2", width: "100%", maxHeight: "400px" }} src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + image.image_path} alt="" hidden={index > 4 ? true : null} />)}
              {imageCount > 4 && <div className="absolute text-xl font-bold text-white bottom-4 right-4 bg-black bg-opacity-50 p-3 rounded-lg">More {imageCount + 1 - 4} Images</div>}
            </div>
          )}
        </div>
        {/* Like Comment Share Section */}
        <div className="flex justify-between text-lg">
          <div>
            <i class="fa-solid fa-thumbs-up"></i> 2670 Like
          </div>
          <div>
            <i class="fa-solid fa-comment"></i> 750 Comment
          </div>
          <div>
            <i class="fa-solid fa-share"></i> 150 Share
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full object-cover" src="img/profile.jpg" alt="" />
          <div>
            <h3>Very Nice pic</h3>
            <h5 className="text-blue-600 text-sm">32 Like</h5>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <textarea className="border-gray-500 border-2 w-full p-4 rounded-lg" type="text" placeholder="Enter Comment Here" />
          <div className="flex gap-3 items-center">
            <i class="fa-solid fa-face-smile text-3xl text-blue-500"></i>
            <i class="fa-solid fa-paper-plane text-blue-600 text-3xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
