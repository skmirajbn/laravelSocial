/* eslint-disable @next/next/no-img-element */
export default function MessageOptions() {
  return (
    <div className="w-1/4 py-4 space-y-4">
      <img className="h-32 w-32 object-cover rounded-full mx-auto" src="img/profile.jpg" alt="" />
      <h3 className="text-2xl text-center font-bold">Mr. Mokhles Uddin</h3>
      <h5 className="text-center">
        <i class="fa-solid fa-circle text-green-600"></i> Online
      </h5>
      <div className="flex justify-center gap-6 text-xl">
        <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-user"></i>
        </div>
        <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-volume-xmark"></i>
        </div>
        <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
}
