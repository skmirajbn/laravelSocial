import PostLoading from "@/components/postLoading";
import UserProfileLeftSidebar from "./_components/userProfileLeftSidebar";

export default function UserProfile() {
  return (
    <div className="flex gap-6 py-8">
      <UserProfileLeftSidebar />
      {/* Profile Timeline */}
      <div className="w-2/3 space-y-8">
        Post is here
        <div>
          <PostLoading />
        </div>
      </div>
    </div>
  );
}
