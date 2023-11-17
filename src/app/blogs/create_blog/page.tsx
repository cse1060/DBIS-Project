"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../../../css/create_blog.scss";
import ParticleBackground from "@/components/ParticleBackground";
export default function Blog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgurl, setImgurl] = useState("");
  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event: any) => {
    setBody(event.target.value);
  };
  const handleImgurlChange = (event: any) => {
    setImgurl(event.target.value);
  };

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("Title:", title);
    console.log("Body:", body);
    console.log("ImgUrl:", imgurl);
    const res = await axios.post("/api/blogs/create_blog", {
      title: title,
      body: body,
      imgurl: imgurl,
    });

    console.log(res.data);
    if (res.data.success === true) {
      router.push("/blogs/all");
    }
  };

  return (
      <div className="box">
          <ParticleBackground/>
      <center>
        <h1>Upload Blog</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <label>
          <b>Title:</b>
          <br />
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          <b>Body:</b>
          <br />
          <textarea value={body} onChange={handleBodyChange} />
        </label>
        <label>
          <b>Img:</b>
          <br />
          <input value={imgurl}  onChange={handleImgurlChange} />
        </label>
        <label>
          <button
            type="submit"
            className="submit-btn"
            style={{
              color: "black",
              border: "1px solid black",
              borderRadius: "10px",
              width: "70px",
            }}
          >
            <b>Submit</b>
          </button>
        </label>
      </form>
    </div>
  );
}
