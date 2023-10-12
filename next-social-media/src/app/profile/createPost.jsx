export default function CreatePost() {
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg">
      <div className="p-6 space-y-4">
        <div className="flex gap-6 items-center">
          <img className="w-12 h-12 object-cover rounded-full" src="img/profile.jpg" alt="" />
          <textarea type="text" rows="2" placeholder="Whats on Your Mind?" className="input w-full border border-gray-300 p-3 h-auto"></textarea>
          <h3 className="bg-blue-600 h-fit px-4 py-2 text-xl font-semibold text-white rounded-lg">Post</h3>
        </div>
        <div className="flex gap-4 px-20">
          <i class="fa-solid fa-image text-2xl text-green-500"></i>
          <i class="fa-solid fa-paperclip text-2xl text-blue-700"></i>
        </div>
      </div>
    </div>
  );
}
