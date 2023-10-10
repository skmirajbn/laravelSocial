import Link from "next/link";

function MessengerModal({ messageModal }) {
  return (
    <div ref={messageModal} className="absolute bg-white top-14 -right-32 px-2 w-80 py-2 shadow-lg shadow-gray-700 rounded-md hidden">
      <i class="text-white text-5xl fa-solid fa-sort-up absolute -top-4 left-1/2 -translate-x-1/2"></i>
      <div className="space-y-6 max-h-[83vh] overflow-auto px-3 py-3">
        {/* Single Message */}
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
            <i class="fa-solid fa-circle text-green-600 text-sm"></i>
          </div>
          <h5 className="text-xs">Hello How are you?</h5>
          <hr />
        </div>
        {/* Single Message */}
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
            <i class="fa-solid fa-circle text-green-600 text-sm"></i>
          </div>
          <h5 className="text-xs">Hello How are you?</h5>
          <hr />
        </div>
        {/* Single Message */}
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
            <i class="fa-solid fa-circle text-green-600 text-sm"></i>
          </div>
          <h5 className="text-xs">Hello How are you?</h5>
          <hr />
        </div>
        {/* Single Message */}
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
            <i class="fa-solid fa-circle text-green-600 text-sm"></i>
          </div>
          <h5 className="text-xs">Hello How are you?</h5>
          <hr />
        </div>
        {/* Single Message */}
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
            <i class="fa-solid fa-circle text-green-600 text-sm"></i>
          </div>
          <h5 className="text-xs">Hello How are you?</h5>
          <hr />
        </div>
        {/* Single Message */}
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
            <i class="fa-solid fa-circle text-green-600 text-sm"></i>
          </div>
          <h5 className="text-xs">Hello How are you?</h5>
          <hr />
        </div>
        {/* Single Message */}
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
            <i class="fa-solid fa-circle text-green-600 text-sm"></i>
          </div>
          <h5 className="text-xs">Hello How are you?</h5>
          <hr />
        </div>
        {/* Single Message */}
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
            <i class="fa-solid fa-circle text-green-600 text-sm"></i>
          </div>
          <h5 className="text-xs">Hello How are you?</h5>
          <hr />
        </div>
        {/* Single Message */}
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-sm">Sheikh Rownakul Islam Miraj</h3>
            <i class="fa-solid fa-circle text-green-600 text-sm"></i>
          </div>
          <h5 className="text-xs">Hello How are you?</h5>
          <hr />
        </div>
      </div>
      <Link href="/messages" className="block text-sm text-blue-600 text-center py-2">
        See All in Messenger
      </Link>
    </div>
  );
}

export default MessengerModal;
