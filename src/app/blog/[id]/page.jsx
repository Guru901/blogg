"use client";

import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader/Loader";

const Science = () => {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState();

  const path = usePathname();
  const blogId = path.split("/")[2];

  const getBlogById = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/blogs/getBlogById", { blogId });
      setBlog(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogById();
  }, []);

  const formatTextWithNewlines = (text) => {
    return text?.replace(/<br\/>/g, "\n");
  };

  if (loading)
    return (
      <h1>
        <Loader />
      </h1>
    );

  return (
    <div>
      <div className="absolute-center">
        <div className="hero-card absolute-center">
          <img src={blog?.image} alt="" />
        </div>
      </div>
      <div className="main-blog">
        <div className="blog-head">{blog?.title}</div>
        <div className="blog-body">
          <pre className="pre" style={{ whiteSpace: "pre-line" }}>
            {formatTextWithNewlines(blog?.body)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Science;
