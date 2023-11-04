/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import Link from "next/link";
import Pusher from "pusher-js";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import MessageReceiver from "./messageReceiver";
import MessageSender from "./messageSender";

export default function MessageBody({ conversationuser, conversationID }) {
  const messageDiv = useRef();
  const [message, setMessage] = useState();
  const { user } = useAuth();

  const { data: apiMessages, mutate } = useSWR("conversationMessage", () => axios.get(`api/message/get/${conversationID}`));
  const [messages, setMessages] = useState(apiMessages);
  useEffect(() => {
    setMessages(apiMessages);
  }, [apiMessages]);

  /**
   * Sends a message when the Enter key is pressed.
   *
   * @param {Event} e - The event object.
   * @return {Promise} A promise that resolves when the message is sent.
   */
  const sendMessage = async (e) => {
    if (e.key === "Enter") {
      // Api call for sending Message
      let formData = new FormData();
      formData.append("conversation_id", conversationID);
      formData.append("message_text", message);
      let res = axios.post("api/message/send", formData);
      setMessage("");
      // mutate();
    }
  };

  useEffect(() => {
    mutate([]);
  }, [conversationID, mutate]);

  useEffect(() => {
    messageDiv.current.scrollTop = messageDiv.current.scrollHeight;
  }, [messages]);

  // ! Laravel Echo is Invoking here

  useEffect(() => {
    var pusher = new Pusher("2fbf7ea3d2be305d21c4", {
      cluster: "ap1",
    });

    var channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (data) {
      if (data.message.conversation_id === conversationID) {
        setMessages((prevMessages) => ({
          ...prevMessages,
          data: [...prevMessages.data, data.message],
        }));

        messageDiv.current.scrollTop = messageDiv?.current?.scrollHeight;
      }
    });
  }, [conversationID]);
  // ! Laravel Echo ends
  return (
    <div className="w-2/3 px-4" style={{ height: "calc(100vh - 5rem)" }}>
      <div className="h-24 py-4">
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            {conversationuser && <img className="h-14 w-14 object-cover rounded-full" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + conversationuser?.active_profile_image?.image_path} alt="" />}
            {conversationuser && (
              <Link href={`/user/${conversationuser?.user_username}`}>
                <h3 className="text-xl font-bold">{conversationuser?.user_first_name + " " + conversationuser.user_last_name}</h3>
              </Link>
            )}
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
      <div ref={messageDiv} className="overflow-y-auto py-4 px-3 rounded-lg bg-gradient-to-r from-emerald-50 to-blue-50" style={{ height: "calc(100% - 10rem)" }}>
        {!conversationuser && (
          <div className=" h-full flex flex-col justify-center items-center gap-5">
            <img className="w-60" src="img/select-conversation.svg" alt="" />
            <h3 className="font-bold text-3xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">No Convesation is selected</h3>
          </div>
        )}
        {conversationuser && (
          <div className="flex flex-col gap-3 justify-end min-h-full">
            {messages?.data?.map((message) => {
              if (message?.user_id === user.user_id) {
                return <MessageSender key={message.message_id} message={message?.message_text} user={message?.user} />;
              } else {
                return <MessageReceiver key={message.message_id} message={message?.message_text} user={message?.user} />;
              }
            })}
          </div>
        )}
      </div>
      {/* Messging Writing */}
      {conversationuser && (
        <div className="h-16 flex items-center gap-4">
          <input type="text" placeholder="Write Message Here" className="input input-bordered w-full" value={message} onChange={(e) => setMessage(e.target.value)} onKeyUp={sendMessage} />
          <i class="fa-solid fa-face-smile text-2xl"></i>
          <i class="fa-solid fa-thumbs-up text-2xl"></i>
        </div>
      )}
    </div>
  );
}
