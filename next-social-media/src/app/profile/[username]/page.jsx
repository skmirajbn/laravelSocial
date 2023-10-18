/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/header";
import Post from "@/components/post";
import { useAuth } from "@/hooks/auth";

import PostLoading from "@/components/postLoading";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import CoverPhoto from "../coverPhoto";
import CreatePost from "../createPost";
import Friends from "../friends";
import ProfileDisplayName from "../profileDisplayName";
import ProfileLeftSidebar from "../profileLeftSidebar";
import ProfilePicture from "../profilePicture";

export default function ProfileUsername({ params }) {
  const { user } = useAuth({ middleware: "auth" });
  const [postLoading, setPostLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const fetcher = async () => {
    setIsLoading(true);
    let apiEndPoint = `api/posts/${params.username}?page=` + page;
    console.log(apiEndPoint);
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
    console.log("useEffect called");
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

  return (
    <div>
      <h3>Username is {params.username}</h3>
      <Header />
      <div className="container">
        <CoverPhoto />
        <div className="flex gap-6 items-end -mt-20 px-10">
          <ProfilePicture />
          <div>
            <ProfileDisplayName user={user} />
            <Friends />
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
          <ProfileLeftSidebar posts={posts} />
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
