export default function Sidebar() {
  return (
    <div class="w-1/4 px-4 py-3 space-y-3 sticky top-20 overflow-y-auto h-[90vh] ">
      <div class="flex items-center space-x-3 ">
        <img class="w-10 h-10 rounded-full object-cover" src="img/profile.jpg" alt="" />
        <h3>Sheikh Rownakul Islam Miraj</h3>
      </div>
      <div class="flex items-center space-x-3">
        <img class="w-10 h-10 scale-75" src="img/friends.png" alt="" />
        <h3>Friends</h3>
      </div>
      <div class="flex items-center space-x-3">
        <img class="w-10 h-10 rounded-full object-cover" src="img/groups.webp" alt="" />
        <h3>Groups</h3>
      </div>
      <div class="flex items-center space-x-3">
        <img class="w-10 h-10 rounded-full object-cover" src="img/groups.webp" alt="" />
        <h3>Groups</h3>
      </div>
      <div class="flex items-center space-x-3">
        <img class="w-10 h-10 rounded-full object-cover" src="img/groups.webp" alt="" />
        <h3>Groups</h3>
      </div>
    </div>
  );
}
