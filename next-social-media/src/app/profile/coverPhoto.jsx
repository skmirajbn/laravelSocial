export default function CoverPhoto() {
  const [imageUrl, setImageUrl] = useState("img/avatar.png");
  const [isUpdating, setIsUpdating] = useState(false);

  const { data, isLoading, mutate, isValidating } = useSWR("profileImage", () => axios.get("api/profile-image"));

  useEffect(() => {
    if (data?.data?.image_path) {
      setImageUrl(process.env.NEXT_PUBLIC_BACKEND_URL + "/" + data?.data?.image_path);
    }
  }, [isLoading]);

  const handlePhotoChange = async (e) => {
    setIsUpdating(true);

    // showing the photo in the circle
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let imageUrl = e.target.result;
      setImageUrl(imageUrl);
    };
    reader.readAsDataURL(file);

    // Sending to the server
    let formData = new FormData();
    formData.append("profileImage", file);
    await axios.post("api/profile-image", formData);
    mutate();
    setIsUpdating(false);
  };
  return (
    <div className="relative">
      <img className="h-[30rem] w-full object-cover rounded-lg" src="img/cover.jpg" alt="" />
      <label htmlFor="imageInput">
        <div className="bg-gray-200 absolute top-7 right-7 h-10 w-10 rounded-full flex justify-center items-center shadow-md shadow-gray-500">
          <i class="fa-solid fa-camera  text-2xl text-black "></i>
        </div>
      </label>
      <input id="imageInput" type="file" hidden onChange={handlePhotoChange} />
    </div>
  );
}
