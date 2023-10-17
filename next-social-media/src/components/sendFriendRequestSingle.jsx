export default function SendFriendRequestSingle() {
  return (
    <div className="flex gap-3 items-center p-3">
      <img className="w-12 h-12 object-cover rounded-full" src="img/profile.jpg" alt="" />
      <h3 className="font-medium text-lg">Sk Miraj</h3>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Add Friend <i class="fa-solid fa-user-plus"></i>
      </button>
      <div className="bg-gray-300 text-black px-4 py-2 rounded-lg hidden">Request Sent</div>
    </div>
  );
}
