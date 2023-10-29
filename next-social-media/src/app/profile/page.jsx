/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import Post from "@/components/post";
import { useAuth } from "@/hooks/auth";

import PostLoading from "@/components/postLoading";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import CreatePost from "./createPost";
import ProfileLeftSidebar from "./profileLeftSidebar";

export default function Profile() {
  const { user } = useAuth({ middleware: "auth" });
  const [postLoading, setPostLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const fetcher = async () => {
    setIsLoading(true);
    let apiEndPoint = "api/posts?page=" + page;

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

  return (
    <div className="flex gap-6 py-8">
      <ProfileLeftSidebar posts={posts} />
      {/* Profile Timeline */}
      <div className="w-2/3 space-y-8">
        <CreatePost setPosts={setPosts} />
        {posts && posts?.map((post) => <Post key={post.post_id} post={post} fetcher={fetcher} />)}
        {postLoading && (
          <div>
            <PostLoading />
          </div>
        )}
      </div>
    </div>
  );
}
