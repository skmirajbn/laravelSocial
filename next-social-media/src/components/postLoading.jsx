export default function PostLoading() {
  return (
    <div className=" px-6 py-8 rounded-xl shadow-lg shadow-gray-400">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">
          <div className="bg-slate-300 w-full h-10 rounded-full animate-pulse"></div>
        </h3>
        <h3 className="text-base">
          <div className="bg-slate-300 w-full h-7 rounded-full animate-pulse"></div>
        </h3>
        <div className="flex">
          <div className="bg-slate-300 w-full h-96 rounded-xl animate-pulse"></div>
        </div>
        {/* Like Comment Share Section */}
        <div className="flex justify-between text-lg gap-3">
          <div className="bg-slate-300 w-full h-7 rounded-full animate-pulse"></div>
          <div className="bg-slate-300 w-full h-7 rounded-full animate-pulse"></div>
          <div className="bg-slate-300 w-full h-7 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-slate-300 w-full h-16 rounded-xl animate-pulse"></div>
        <div className="bg-slate-300 w-full h-16 rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
}
