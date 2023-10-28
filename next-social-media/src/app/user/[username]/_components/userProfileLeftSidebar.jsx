import UserProfileFriends from "./userProfileFriends";
import UserProfileIntro from "./userProfileIntro";
import UserTimelinePhotos from "./userTimelinePhotos";

export default function UserProfileLeftSidebar() {
  return (
    <div className="w-1/3 ">
      <div className="space-y-8 sticky -top-60">
        <UserProfileIntro />
        <UserTimelinePhotos />
        <UserProfileFriends />
      </div>
    </div>
  );
}
