export default function CreatePost() {
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg">
      <div className="p-6 space-y-4">
        <div className="flex gap-6 items-center">
          <img className="w-12 h-12 object-cover rounded-full" src="img/profile.jpg" alt="" />
          <textarea type="text" rows="2" placeholder="Whats on Your Mind?" className="input w-full border border-gray-300 p-3 h-auto"></textarea>
          <h3 className="bg-blue-600 h-fit px-4 py-2 text-xl font-semibold text-white rounded-lg">Post</h3>
        </div>
        <div className="flex gap-3">
          {/* Single Image For post */}
          <div className="relative w-fit">
            <img className="w-20 max-h-28 rounded-md" src="img/profile.jpg" alt="" />
            <div className="absolute bg-red-600 w-5 h-5 text-white flex items-center justify-center rounded-full text-xs top-px right-px">
              <i class="fa-solid fa-x"></i>
            </div>
          </div>
          {/* Single Image For post */}
          <div className="relative w-fit">
            <img className="w-20 max-h-28 rounded-md" src="img/profile.jpg" alt="" />
            <div className="absolute bg-red-600 w-5 h-5 text-white flex items-center justify-center rounded-full text-xs top-px right-px">
              <i class="fa-solid fa-x"></i>
            </div>
          </div>
          {/* Single Image For post */}
          <div className="relative w-fit">
            <img className="w-20 max-h-28 rounded-md" src="img/profile.jpg" alt="" />
            <div className="absolute bg-red-600 w-5 h-5 text-white flex items-center justify-center rounded-full text-xs top-px right-px">
              <i class="fa-solid fa-x"></i>
            </div>
          </div>
          {/* Single Image For post */}
          <div className="relative w-fit">
            <img className="w-20 max-h-28 rounded-md" src="img/profile.jpg" alt="" />
            <div className="absolute bg-red-600 w-5 h-5 text-white flex items-center justify-center rounded-full text-xs top-px right-px">
              <i class="fa-solid fa-x"></i>
            </div>
          </div>
        </div>

        <div className="flex gap-4 px-20">
          <label htmlFor="image">
            <i class="fa-solid fa-image text-2xl text-green-500"></i>
          </label>

          <input id="image" type="file" name="image" hidden />
          <i class="fa-solid fa-paperclip text-2xl text-blue-700"></i>
        </div>
      </div>
    </div>
  );
}
