"use client";
import BlogLike from '@/components/BlogLikeDislike';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AllBlogs() {

    const [blogs, setBlogs] = useState<any>(undefined)

    async function getBlogs() {
        const data = await axios.get("/api/blogs/all")
        console.log(data.data.blogs);
        setBlogs(data.data.blogs)
    }

    useEffect(() => {
        getBlogs();
    }, [])
    useEffect(() => {
        console.log(blogs);

    }, [blogs])

    if (blogs === undefined) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div>
            {blogs.map((blog: any, idx: any) =>
                <>
                    {console.log(blog)}
                    <h1>{blog.user_name}</h1>
                    <h1>{blog.title}</h1>
                    <h1>{blog.body}</h1>
                    <img src={blog.user_img} />
                    <h1>{blog.date}</h1>
                    <BlogLike likes={blog.likes} id={blog.blog_id} dislikes={blog.dislikes} />
                </>
            )}
        </div>
    )
}
