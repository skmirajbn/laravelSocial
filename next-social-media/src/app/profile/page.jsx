/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/header";
import Post from "@/components/post";
import { useAuth } from "@/hooks/auth";

import PostLoading from "@/components/postLoading";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import CreatePost from "./createPost";
import Mypage from "./mypage";
import ProfileLeftSidebar from "./profileLeftSidebar";

export default function Profile() {
  const { user } = useAuth({ middleware: "auth" });
  const [postLoading, setPostLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  // const fetcher = (url) => axios.get(url).then((res) => res.data);
  // const {
  //   data: dataPosts,
  //   error,
  //   mutate,
  // } = useSWR(`api/posts?page=${page}`, fetcher, {
  //   revalidateIfStale: false,
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  //   onSuccess: (data) => {
  //     setPosts((prevPosts) => [...prevPosts, ...data.data]);
  //   },
  // });
  console.log("page is " + page);
  const fetcher = (page) => {
    axios.get(`api/posts?page=${page}`).then((res) => {
      setPosts((prev) => {
        if (prev == undefined) {
          setPage((prevPage) => prevPage + 1);
          console.log(page);
          return [...res.data.data];
        } else {
          let localId = prev[prev.length - 1]?.post_id;
          let serverId = res?.data?.data[res.data.data.length - 1]?.post_id;

          if (serverId < localId) {
            setPage((prevPage) => prevPage + 1);

            return [...prev, ...res.data.data];
          }
        }
      });
    });
  };

  useEffect(() => {
    fetcher(page);
  }, []);

  const handleScroll = (page) => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollHeight - scrollTop === clientHeight) {
      fetcher(page);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(page));
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <div>
      <Mypage />
      <Header />
      <div className="container">
        <img className="h-[30rem] w-full object-cover rounded-lg" src="img/cover.jpg" alt="" />
        <div className="flex gap-6 items-end -mt-20 px-10">
          <img className="h-44 w-44 object-cover rounded-full" src="img/profile.jpg" alt="" />
          <div>
            {user && <h2 className="text-4xl font-bold">{user?.user_first_name + " " + user?.user_last_name}</h2>}
            {!user && <span className="loading loading-dots loading-lg text-blue-600"></span>}
            <h5>64 Friends</h5>
          </div>
        </div>
        <hr className="mt-3" />
        <div className="flex px-16 py-2 gap-4 text-xl font-medium text-gray-700 border-b border-t border-gray-400">
          <a className="text-blue-600" href="">
            Posts
          </a>
          <a href="">About</a>
          <a href="">Friends</a>
          <a href="">Photos</a>
          <a href="">Groups</a>
        </div>
        <div className="flex gap-6 py-8">
          <ProfileLeftSidebar />
          {/* Profile Timeline */}
          <div className="w-2/3 space-y-8">
            <CreatePost setPosts={setPosts} />
            {posts && posts?.map((post) => <Post post={post} />)}
            {postLoading && (
              <div>
                <PostLoading />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
