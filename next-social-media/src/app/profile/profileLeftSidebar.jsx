import ProfileIntro from "./profileIntro";

export default function ProfileLeftSidebar(props) {
  return (
    <div className="w-1/3 space-y-8 ">
      <ProfileIntro />
      <div className="shadow-lg shadow-gray-400 rounded-lg p-6 space-y-4">
        <h3 className="text-2xl font-bold">Photos</h3>
        <div className="grid grid-cols-3 gap-4">
          <img className="rounded-md h-24 w-24 object-cover mx-auto" src="img/profile.jpg" alt="" />
          <img className="rounded-md h-24 w-24 object-cover mx-auto" src="img/profile.jpg" alt="" />
          <img className="rounded-md h-24 w-24 object-cover mx-auto" src="img/profile.jpg" alt="" />
          <img className="rounded-md h-24 w-24 object-cover mx-auto" src="img/profile.jpg" alt="" />
          <img className="rounded-md h-24 w-24 object-cover mx-auto" src="img/profile.jpg" alt="" />
          <img className="rounded-md h-24 w-24 object-cover mx-auto" src="img/profile.jpg" alt="" />
          <img className="rounded-md h-24 w-24 object-cover mx-auto" src="img/profile.jpg" alt="" />
          <img className="rounded-md h-24 w-24 object-cover mx-auto" src="img/profile.jpg" alt="" />
          <img className="rounded-md h-24 w-24 object-cover mx-auto" src="img/profile.jpg" alt="" />
        </div>
      </div>
      <div className="shadow-lg shadow-gray-400 rounded-lg p-6 space-y-4">
        <h3 className="text-2xl font-bold">Friends</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center">
            <img className="rounded-md h-24 w-24 object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-xs font-bold text-center">SM Jahangir Alam</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="rounded-md h-24 w-24 object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-xs font-bold text-center">SM Jahangir Alam</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="rounded-md h-24 w-24 object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-xs font-bold text-center">SM Jahangir Alam</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="rounded-md h-24 w-24 object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-xs font-bold text-center">SM Jahangir Alam</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="rounded-md h-24 w-24 object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-xs font-bold text-center">SM Jahangir Alam</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="rounded-md h-24 w-24 object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-xs font-bold text-center">SM Jahangir Alam</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="rounded-md h-24 w-24 object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-xs font-bold text-center">SM Jahangir Alam</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="rounded-md h-24 w-24 object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-xs font-bold text-center">SM Jahangir Alam</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="rounded-md h-24 w-24 object-cover" src="img/profile.jpg" alt="" />
            <h3 className="text-xs font-bold text-center">SM Jahangir Alam</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
