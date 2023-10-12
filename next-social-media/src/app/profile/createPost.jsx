import axios from "@/lib/axios";
import { useRef, useState } from "react";
import PostImage from "./_createPostComponents/postImage";

export default function CreatePost() {
  const photoInput = useRef();
  const [imageSrcs, setImageSrcs] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");

  const handlePhotoChange = async (e) => {
    setImageSrcs([]);
    setSelectedFiles([]);
    let updatedImageSrcs = [];
    let files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        let src = e.target.result;
        updatedImageSrcs.push(src);

        if (updatedImageSrcs.length === files.length) {
          setImageSrcs(updatedImageSrcs);
        }
      };
      reader.readAsDataURL(file);
    });
    setSelectedFiles(files);
  };
  const removeImage = (index) => {
    const updateImageSrcs = [...imageSrcs];
    updateImageSrcs.splice(index, 1);
    setImageSrcs(updateImageSrcs);

    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);

    // Update input elements with remaining Files
    // photoInput.current.value = [];
    // updatedFiles.forEach((file) => {
    //   photoInput.current.files.push(file);
    // });
  };

  const createPost = () => {
    const formData = new FormData();
    formData.append("post_title", postTitle);
    formData.append("post_body", postText);
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append(`images[]`, selectedFiles[i]);
    }
    axios.post("api/posts", formData);
  };

  console.log(selectedFiles);
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg">
      <div className="p-6 space-y-4">
        <div className="flex gap-6 items-center">
          <img className="w-12 h-12 object-cover rounded-full" src="img/profile.jpg" alt="" />
          <div className="flex flex-col gap-2 w-full">
            <input className="input w-full border border-gray-300 p-3" type="text" placeholder="Post Title" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
            <textarea type="text" rows="3" placeholder="Whats on Your Mind?" className="input w-full border border-gray-300 p-3 h-auto" value={postText} onChange={(e) => setPostText(e.target.value)}></textarea>
          </div>
          <button className="bg-blue-600 h-fit px-4 py-2 text-xl font-semibold text-white rounded-lg" onClick={createPost}>
            Post
          </button>
        </div>
        <div className="flex gap-3">
          {imageSrcs.map((src, index) => (
            <PostImage key={index} src={src} removeImage={() => removeImage(index)} />
          ))}
        </div>

        <div className="flex gap-4 px-20">
          <label htmlFor="image">
            <i class="fa-solid fa-image text-2xl text-green-500"></i>
          </label>
          <input ref={photoInput} id="image" type="file" name="image" multiple hidden onChange={handlePhotoChange} />
          <i class="fa-solid fa-paperclip text-2xl text-blue-700"></i>
        </div>
      </div>
    </div>
  );
}
