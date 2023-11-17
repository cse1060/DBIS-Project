"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
        console.log('Title:', title);
        console.log('Body:', body);
        console.log('ImgUrl:', imgurl);
        const res = await axios.post("/api/blogs/create_blog", { title: title, body: body, imgurl: imgurl })

        console.log(res.data)
        if (res.data.success === true) {
            router.push("/blogs/all")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            <br />
            <br />
            <label>
                Body:
                <input type="text" value={body} onChange={handleBodyChange} />
            </label>
            <label>
                Img:
                <input value={imgurl} onChange={handleImgurlChange} />
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}