export default function UserProfileIntro() {
  return (
    <div className="shadow-lg shadow-gray-400 rounded-lg p-6 space-y-4">
      <h3 className="text-2xl font-bold">Intro</h3>
      <h4 className="text-lg font-bold">Bio </h4>
      <p>
        Bio data <i class="fa-solid fa-pen text-blue-700 pl-2"></i>
      </p>
      <span className="loading loading-dots loading-md text-blue-600"></span>
    </div>
  );
}
