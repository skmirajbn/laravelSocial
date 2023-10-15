export default function ProfileDisplayName({ user }) {
  return (
    <div>
      {user && <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400  to-blue-500 bg-clip-text text-transparent">{user?.user_first_name + " " + user?.user_last_name}</h2>}
      {!user && <span className="loading loading-dots loading-lg text-blue-600"></span>}
    </div>
  );
}
