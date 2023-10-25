/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import MessageReceiver from "./messageReceiver";
import MessageSender from "./messageSender";

export default function MessageBody({ conversationuser, conversationID }) {
  const messageDiv = useRef();
  const [message, setMessage] = useState();

  const sendMessage = (e) => {
    if (e.key === "Enter") {
      // Api call for sending Message
      let formData = new FormData();
      formData.append("conversation_id", conversationID);
      formData.append("message_text", message);
    }
  };

  useEffect(() => {
    messageDiv.current.scrollTop = messageDiv.current.scrollHeight;
  }, []);
  return (
    <div className="w-2/3 px-4" style={{ height: "calc(100vh - 5rem)" }}>
      <div className="h-24 py-4">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <img className="h-14 w-14 object-cover rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + conversationuser?.active_profile_image?.image_path} alt="" />
            {conversationuser && <h3 className="text-xl font-bold">{conversationuser?.user_first_name + " " + conversationuser.user_last_name}</h3>}
          </div>
          <div className="flex gap-4 text-blue-600">
            <i class="fa-solid fa-phone text-xl"></i>
            <i class="fa-solid fa-video text-xl"></i>
            <i class="fa-solid fa-circle-info text-xl"></i>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 mt-2"></div>
      </div>
      {/* Messages */}
      <div ref={messageDiv} className="overflow-y-auto py-4 px-3" style={{ height: "calc(100% - 10rem)" }}>
        <div className="flex flex-col gap-3 justify-end min-h-full">
          <MessageSender message="Hello, Dear How are You?" />
          <MessageReceiver message="Dhong bad dao !" />
        </div>
      </div>
      {/* Messging Writing */}
      <div className="h-16 flex items-center gap-4">
        <input type="text" placeholder="Write Message Here" className="input input-bordered w-full" value={message} onChange={(e) => setMessage(e.target.value)} onKeyUp={sendMessage} />
        <i class="fa-solid fa-face-smile text-2xl"></i>
        <i class="fa-solid fa-thumbs-up text-2xl"></i>
      </div>
    </div>
  );
}
