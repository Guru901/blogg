"use client";

import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";

const Write = () => {
  const [form, setForm] = useState({});
  const [image, setImage] = useState();
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState();
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/blogs/write", {
      title: form.title,
      des: form.title,
      body: form.body,
      image: image,
    });
    console.log(data);
    if (data.success) {
      router.push("/");
    }
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/login", admin);

      setLogin(data.login);
    } catch (error) {
      alert("error");
    }
  };

  const handleChangePassword = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  if (error) {
    return <h1>Error Contact Backend Engineer</h1>;
  }

  return (
    <div>
      {login ? (
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="des"
            placeholder="des"
            required
            onChange={handleChange}
          />
          <textarea
            name="body"
            cols="50"
            rows="20"
            required
            onChange={handleChange}
          ></textarea>

          <CldUploadWidget
            uploadPreset="bncxkbx4"
            onSuccess={(results) => {
              setImage(results.info.secure_url);
            }}
          >
            {({ open }) => {
              return (
                <button type="button" onClick={() => open()}>
                  <div className=" file-input file-input-bordered w-[93svw] h-[2rem] max-w-lg">
                    <div className="w-[8rem] bg-[#2A323C] h-full rounded-s-md flex items-center justify-center">
                      <h1 className="font-bold text-sm">CHOOSE FILE</h1>
                    </div>
                    <div className="w-[13rem]  h-full"></div>
                  </div>
                </button>
              );
            }}
          </CldUploadWidget>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <form className="form login-form" onSubmit={handleSubmitPassword}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChangePassword}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChangePassword}
            />
            <button type="submit" className="loginBtn">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Write;
