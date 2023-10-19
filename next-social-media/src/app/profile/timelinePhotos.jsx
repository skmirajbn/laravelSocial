/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export default function TimelinePhotos({ posts }) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    let dataPhotos = [];
    posts.forEach((post) => {
      let images = post.images;
      images.forEach((image) => {
        dataPhotos.push(image);
      });
    });
    setPhotos(dataPhotos);
  }, [posts]);
  console.log(photos);
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg p-6 space-y-4 ">
      <h3 className="text-2xl font-bold">Photos</h3>
      <div className="grid grid-cols-3 gap-4">
        {photos.slice(0, 12).map((photo) => (
          <img key={photo.image_id} className="rounded-md h-24 w-24 object-cover mx-auto" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + photo.image_path} alt="" />
        ))}
      </div>
    </div>
  );
}

// Need different routing for the photos of timeline will do tomorrow
