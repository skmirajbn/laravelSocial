/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@/hooks/auth";

import axios from "@/lib/axios";
import { useEffect, useState } from "react";

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

  //   imported

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    let dataPhotos = [];
    posts.forEach((post) => {
      let images = post.images;
      images.forEach((image) => {
        dataPhotos.push(image);
      });
    });
    setPhotos(dataPhotos);
  }, [posts]);

  return (
    <div className="flex gap-6 py-8">
      <div className=" rounded-lg w-full px-10 py-4 space-y-4">
        <h3 className="text-lg font-medium">Timeline Photos</h3>
        <div className="grid grid-cols-4 gap-3">{photos && photos.map((photo) => <img className="rounded-lg" src={process.env.NEXT_PUBLIC_BACKEND_URL + "/" + photo.image_path} alt="" />)}</div>
      </div>
    </div>
  );
}
