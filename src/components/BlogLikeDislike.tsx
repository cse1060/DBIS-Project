import axios from 'axios'
import React, { useState } from 'react'

export default function BlogLike(props: any) {

    async function addLike() {
        const obj = {
            likes: likes + 1,
            dislikes: isdisliked ? dislikes - 1 : dislikes,
            id: props.id
        }
        await axios.post("/api/blogs/like", obj)
        setLikes(likes + 1)
        if (isdisliked) {
            setDislikes(dislikes - 1)
            setDisliked(false)
        }
        setLiked(true)
    }
    async function addDislike() {
        const obj = {
            likes: isliked ? likes - 1 : likes,
            dislikes: dislikes + 1,
            id: props.id
        }
        await axios.post("/api/blogs/like", obj)
        setDislikes(dislikes + 1)
        if (isliked) {
            setLikes(likes - 1);
            setLiked(false)
        }
        setDisliked(true)
    }

    const [likes, setLikes] = useState<any>(props.likes)
    const [isliked, setLiked] = useState(false)

    const [dislikes, setDislikes] = useState<any>(props.dislikes)
    const [isdisliked, setDisliked] = useState(false)
    return (
        <div>
            <h1>Likes : {likes}</h1>
            {!isliked &&
                <p onClick={addLike}>Like</p>}
            <h1>Dislikes : {dislikes}</h1>
            {!isdisliked &&
                <p onClick={addDislike}>Dislike</p>}
        </div>
    )
}
