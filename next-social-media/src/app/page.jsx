/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable */
"use client";
import Header from "@/components/header";
import Post from "@/components/post";
import SideMessages from "@/components/sideMessages";
import Sidebar from "@/components/sidebar";
import { useAuth } from "@/hooks/auth";
import UseEcho from "@/hooks/echo";
import axios from "@/lib/axios";

import { useEffect, useState } from "react";
// window.pusher = Pusher;
export default function Home() {
  const echo = UseEcho;
  const { user } = useAuth({ middleware: "auth" });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const fetcher = async () => {
    setIsLoading(true);
    let apiEndPoint = "api/homeposts?page=" + page;

    try {
      const res = await axios.get(apiEndPoint);
      setPosts((prevPost) => [...prevPost, ...res.data.data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetcher();
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  useEffect(() => {
    // const echo = new Echo({
    //   broadcaster: "pusher",
    //   key: "mydsfgdskey",

    //   client: new Pusher("mydsfgdskey", {
    //     wsHost: "localhost",
    //     wsPort: 6001,
    //     cluster: "mt1",
    //     disableStats: true,
    //     forceTLS: false,
    //   }),
    // });

    echo
      .channel("message")
      .subscribed(() => {})
      .listen("Message", (data) => {});
  }, []);

  return (
    <div>
      <Header />
      <section class="flex mt-2 bg-[#F0F2F5] gap-10 relative">
        <Sidebar user={user} />
        <div className=" w-2/4">{posts && posts.map((post) => <Post key={post.post_id} post={post} />)}</div>
        <div className="w-1/4 bg-white flex flex-col items-end px-8 py-6 sticky top-20 h-full">
          <SideMessages />
        </div>
      </section>
    </div>
  );
}
