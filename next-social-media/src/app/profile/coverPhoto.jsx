export default function CoverPhoto() {
  const handleChange = () => {};
  return (
    <div className="relative">
      <img className="h-[30rem] w-full object-cover rounded-lg" src="img/cover.jpg" alt="" />
      <label htmlFor="imageInput">
        <div className="bg-gray-200 absolute top-7 right-7 h-10 w-10 rounded-full flex justify-center items-center shadow-md shadow-gray-500">
          <i class="fa-solid fa-camera  text-2xl text-black "></i>
        </div>
      </label>
      <input id="imageInput" type="file" hidden onChange={handleChange} />
    </div>
  );
}
