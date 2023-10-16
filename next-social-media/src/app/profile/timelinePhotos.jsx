export default function TimelinePhotos({ posts }) {
  console.log(posts);
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg p-6 space-y-4 ">
      <h3 className="text-2xl font-bold">Photos</h3>
      <div className="grid grid-cols-3 gap-4">
        <img className="rounded-md h-24 w-24 object-cover mx-auto" src="img/profile.jpg" alt="" />
      </div>
    </div>
  );
}

// Need different routing for the photos of timeline will do tomorrow
