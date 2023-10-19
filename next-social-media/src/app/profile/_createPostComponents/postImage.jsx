/* eslint-disable @next/next/no-img-element */
export default function PostImage({ src, removeImage }) {
  return (
    <div className="relative w-fit">
      <img className="w-20 h-20 object-cover rounded-md" src={src} alt="" />
      <div className="absolute bg-red-600 w-5 h-5 text-white flex items-center justify-center rounded-full text-xs top-px right-px" onClick={removeImage}>
        <i class="fa-solid fa-x"></i>
      </div>
    </div>
  );
}
