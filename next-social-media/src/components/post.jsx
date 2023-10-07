export default function Post() {
  return (
    <div>
      <div className="space-y-2 py-2">
        <h3 className="text-3xl">Here is the post text</h3>
        <div className="flex">
          <img className="rounded-lg w-full" src="img/post-image.webp" alt="" />
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
