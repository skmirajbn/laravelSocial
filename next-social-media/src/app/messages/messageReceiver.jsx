/* eslint-disable @next/next/no-img-element */
export default function MessageReceiver({ message, user }) {
  return (
    <div className="flex items-center gap-4 justify-start">
      <img className="h-11 w-11 object-cover rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + user.active_profile_image.image_path} alt="" />
      <h5 className="bg-blue-600 w-fit px-4 py-2 rounded-full text-white">{message}</h5>
    </div>
  );
}
