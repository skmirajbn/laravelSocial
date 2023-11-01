import Link from "next/link";
import SingleNotification from "./singleNotification";

export default function NotificationModal({ notificationModal }) {
  return (
    <div ref={notificationModal} className="absolute bg-white top-14 -right-24 px-2 w-80 py-2 shadow-lg shadow-gray-700 rounded-md hidden">
      <i class="text-white text-5xl fa-solid fa-sort-up absolute -top-4 left-1/2 -translate-x-1/2"></i>
      <div className="space-y-6 max-h-[83vh] overflow-auto px-3 py-3">
        <h3 className="text-sm text-right text-blue-600 underline">Mark all as Read</h3>
        <SingleNotification />
      </div>
      <Link href="/messages" className="block text-sm text-blue-600 text-center py-2">
        See All in Messenger
      </Link>
    </div>
  );
}
