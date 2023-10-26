/* eslint-disable @next/next/no-img-element */
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function CreateGroupModal() {
  const searchSuggestion = useRef();
  const [resultUsers, setResultUsers] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const [groupTitle, setGroupTitle] = useState([]);
  const [groupImageFile, setGroupImageFile] = useState([]);
  const router = useRouter();
  const groupPhoto = useRef();
  const handleOnFocus = () => {
    searchSuggestion.current.classList.remove("hidden");
  };
  const handleOnBlur = () => {
    setTimeout(() => {
      //   searchSuggestion.current.classList.add("hidden");
    }, 200);
  };
  let timeOutId;
  const handleSearch = async (e) => {
    setIsSearching(true);
    clearTimeout(timeOutId);
    let keyword = e?.target?.value?.trim();
    let res;
    timeOutId = setTimeout(async () => {
      res = await axios.get(`api/search-friends/${keyword}`);
      let resultUsersFiltered = res?.data?.filter((user) => {
        return !groupList.some((guser) => {
          return user.user_id === guser.user_id;
        });
      });
      setResultUsers(resultUsersFiltered);
      setIsSearching(false);
    }, 500);
  };

  const addToList = (user) => {
    setGroupList((prev) => [...prev, user]);
    setResultUsers("");
  };

  const removeUser = (userId) => {
    let deletedGroupList = groupList.filter((user) => {
      if (user.user_id != userId) {
        return true;
      }
    });
    setGroupList(deletedGroupList);
  };

  const onGroupPhotoChange = (e) => {
    let file = e.target.files[0];
    setGroupImageFile(file);
    // Reading file as data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      groupPhoto.current.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const createGroup = async () => {
    setIsCreatingGroup(true);
    let formData = new FormData();
    groupList.forEach((user) => {
      formData.append("user_id[]", user.user_id);
    });
    formData.append("group_title", groupTitle);
    formData.append("group_image_file", groupImageFile);
    let res = await axios.post("api/conversation/group/create", formData);
    let newConversationId = res.data.data.conversation_id;
    setIsCreatingGroup(false);
    document.getElementById("createGroupModal").close();
    setResultUsers([]);
    setGroupList([]);
    setGroupTitle("");
    setGroupImageFile(null);
    groupPhoto.current.src = "/img/group.png";
    router.replace(`/messages/group/${newConversationId}`);
  };

  return (
    <dialog id="createGroupModal" className="modal">
      <div className="modal-box h-[65vh] relative bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="flex flex-col gap-5 z-30">
          <h3 className="font-bold text-xl bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            <i class="fa-solid fa-user-group"></i> Create Group Conversation
          </h3>
          <div className="flex gap-3">
            <div className="w-full">
              <h5>Conversation Title:</h5>
              <input type="text" placeholder="Enter Conversation Title" className="input input-bordered input-info w-full" value={groupTitle} onChange={(e) => setGroupTitle(e.target.value)} />
            </div>
            <div className="flex items-center relative min-w-fit w-fit">
              <label htmlFor="conversationImage">
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-400 absolute -right-1 -top-1">
                  <i class="fa-solid fa-camera absolute text-white text-lg"></i>
                </div>
              </label>
              <input hidden type="file" id="conversationImage" onChange={onGroupPhotoChange} />
              <img ref={groupPhoto} className="w-16 h-16 object-cover rounded-full" src="/img/group.png" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 self-center">
            {groupList &&
              groupList.map((user) => (
                <div key={user.user_id} className="flex items-center gap-2 bg-gray-200 w-fit p-2 rounded-lg relative">
                  <div className="w-5 h-5 rounded-full flex justify-center items-center bg-red-600 absolute -right-2 -top-2" onClick={() => removeUser(user.user_id)}>
                    <i class="fa-solid fa-x text-sm text-white"></i>
                  </div>
                  <img className="w-8 h-8 object-cover rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + user.active_profile_image.image_path} alt="" />
                  <h3>{user.user_first_name + " " + user.user_last_name}</h3>
                </div>
              ))}
          </div>
          <div className="flex gap-3">
            <input type="text" placeholder="Search Friends" className="input input-bordered input-info w-full" onFocus={handleOnFocus} onBlur={handleOnBlur} onChange={handleSearch} />
            {isSearching && <span className="loading loading-bars loading-sm"></span>}
          </div>
          <div ref={searchSuggestion} className="">
            {resultUsers && (
              <div className="bg-gray-200 rounded-lg h-fit py-3 px-4  space-y-2">
                {resultUsers &&
                  resultUsers.map((user) => (
                    <div key={user.user_name} className="flex items-center gap-3 py-3 px-8 hover:bg-gray-300 rounded-lg" onClick={() => addToList(user)}>
                      <img className="w-9 h-9 object-cover rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + user.active_profile_image.image_path} alt="" />
                      {user && <h3>{user.user_first_name + " " + user.user_last_name}</h3>}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3 items-center justify-end w-full mt-3">
          {isCreatingGroup && <span className="loading loading-spinner loading-md text-emerald-500"></span>}
          {groupList.length > 1 && !isCreatingGroup && (
            <button className="btn bg-gradient-to-r from-emerald-400 to-blue-400 text-white" onClick={createGroup}>
              Create Group
            </button>
          )}
          <div className="">
            <form method="dialog">
              <button className="btn bg-red-500 text-white">Close</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
}
