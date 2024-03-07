"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import "./style.css";
import Loader from "@/components/Loader/Loader";

const Blog = () => {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const getBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/blogs/getAllBlogs");
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("An error occured contact Backend Enginner");
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (loading) return <Loader />;

  if (error) return <h1>{error}</h1>;

  return (
    <div id="card-row-right" className="absolute-center">
      {blogs?.map((x) => (
        <div className="card-right card" key={x._id}>
          <Link href={`/blog/${x._id}`}>
            <img src={x.image} alt="" className="blog-image" />
            <h1>{x.title}</h1>
            <h2>{x.des}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
