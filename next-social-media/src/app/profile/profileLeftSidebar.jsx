import ProfileFriends from "./profileFriends";
import ProfileIntro from "./profileIntro";
import TimelinePhotos from "./timelinePhotos";

export default function ProfileLeftSidebar({ posts }) {
  return (
    <div className="w-1/3 ">
      <div className="space-y-8 sticky -top-60">
        <ProfileIntro />
        <TimelinePhotos posts={posts} />
        <ProfileFriends />
      </div>
    </div>
  );
}
