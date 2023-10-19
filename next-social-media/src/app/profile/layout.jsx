/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/header";
import { useAuth } from "@/hooks/auth";

import axios from "@/lib/axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import CoverPhoto from "./coverPhoto";
import Friends from "./friends";
import Mypage from "./mypage";
import ProfileDisplayName from "./profileDisplayName";
import ProfilePicture from "./profilePicture";

export default function ProfileLayout({ children }) {
  const { user } = useAuth({ middleware: "auth" });
  const [postLoading, setPostLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const fetcher = async () => {
    setIsLoading(true);
    let apiEndPoint = "api/posts?page=" + page;
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
      <Mypage />
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
          <Link className="text-blue-600" href="/profile">
            Posts
          </Link>
          <a href="">About</a>
          <a href="">Friends</a>
          <Link href="/profile/photos">Photos</Link>
          <a href="">Groups</a>
        </div>
        {children}
      </div>
    </div>
  );
}
