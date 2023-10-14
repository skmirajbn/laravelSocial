import { useState } from "react";

export default function ProfilePicture() {
  const [loading, isLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("img/profile.jpg");

  const handlePhotoChange = (e) => {
    let file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      let imageUrl = e.target.result;
      setImageUrl(imageUrl);
    };
    reader.readAsDataURL(file);
    console.log(file);
  };

  return (
    <div className=" relative">
      <div className="bg-white rounded-full p-1">
        <img className="object-cover h-44 w-44 rounded-full" src={imageUrl} alt="" />
      </div>
      <span className="loading loading-ring  w-full h-full absolute top-0 text-white"></span>
      <label htmlFor="fileIput">
        <div id="imageIcon" className="w-10 h-10 bg-gray-200 shadow-md shadow-gray-500 absolute top-32 right-0 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-camera  text-2xl text-black "></i>
        </div>
      </label>
      <input id="fileIput" type="file" hidden onChange={handlePhotoChange} />
    </div>
  );
}
