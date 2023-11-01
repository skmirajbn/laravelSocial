import axios from "@/lib/axios";
import Link from "next/link";
import useSWR from "swr";
import SingleNotification from "./singleNotification";

export default function NotificationModal({ notificationModal }) {
  const { data: apiNotifications, isLoading } = useSWR("/api/notifications", () => axios.get("/api/notifications"));
  const notifications = apiNotifications?.data?.data;
  const length = notifications?.length;
  return (
    <div ref={notificationModal} className="absolute bg-white top-14 -right-24 px-2 w-80 py-2 shadow-lg shadow-gray-700 rounded-md hidden">
      <i class="text-white text-5xl fa-solid fa-sort-up absolute -top-4 left-1/2 -translate-x-1/2"></i>
      <div className="space-y-6 max-h-[83vh] overflow-auto px-3 py-3">
        <h3 className="text-sm text-right text-blue-600 underline">Mark all as Read</h3>
        {notifications &&
          notifications?.map((notification) => {
            return <SingleNotification notificationMessage={notification.notification_message} key={notification.notification_id} />;
          })}
      </div>
      <Link href="/messages" className="block text-sm text-blue-600 text-center py-2">
        See All in Messenger
      </Link>
    </div>
  );
}
