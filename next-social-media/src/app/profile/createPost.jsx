import { useRef, useState } from "react";
import PostImage from "./_createPostComponents/postImage";

export default function CreatePost() {
  const photoInput = useRef();
  const [imageSrcs, setImageSrcs] = useState([]);

  const handlePhotoChange = (e) => {
    setImageSrcs([]);
    let updatedImageSrcs = [];
    let files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        let src = e.target.result;
        updatedImageSrcs.push(src);
      };
      reader.readAsDataURL(file);
    });
    setImageSrcs(updatedImageSrcs);
  };

  console.log("createpost is rerendering");
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg">
      <div className="p-6 space-y-4">
        <div className="flex gap-6 items-center">
          <img className="w-12 h-12 object-cover rounded-full" src="img/profile.jpg" alt="" />
          <textarea type="text" rows="2" placeholder="Whats on Your Mind?" className="input w-full border border-gray-300 p-3 h-auto"></textarea>
          <h3 className="bg-blue-600 h-fit px-4 py-2 text-xl font-semibold text-white rounded-lg">Post</h3>
        </div>
        <div className="flex gap-3">
          {imageSrcs.map((src) => (
            <PostImage src={src} />
          ))}
        </div>

        <div className="flex gap-4 px-20">
          <label htmlFor="image">
            <i class="fa-solid fa-image text-2xl text-green-500"></i>
          </label>
          <input ref={photoInput} id="image" type="file" name="image" hidden multiple onChange={handlePhotoChange} />
          <i class="fa-solid fa-paperclip text-2xl text-blue-700"></i>
        </div>
      </div>
    </div>
  );
}
