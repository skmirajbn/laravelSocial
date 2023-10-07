export default function SingleMessageSidebar() {
  return (
    <div className="flex gap-3 items-center">
      <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
      <div>
        <h3>Jahangir Alam</h3>
        <p>Hello How are you?</p>
      </div>
      <i class="fa-solid fa-comment text-blue-600"></i>
    </div>
  );
}
