"use client";
import React  , {useEffect , useState} from 'react'
import {useSession} from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function GoogleAuth() {
    const { data: session } = useSession();
    const [loading , setLoading] = useState(true);
    const router = useRouter();
    const [user , setUser] = useState({
        email : "",
        username :"",
    })

    async function isNewUser(){
        const res = await axios.get(`/api/auth/googleauth?email=${session?.user?.email}`);
        console.log(res.data.status)
        const status = res.data.status;
        if(status){
            router.push("/login");
            return;
        }
        setLoading(false);
        user.email = session?.user?.email ?? "";
    }
    useEffect(()=>{
        if(session){isNewUser()};
    } , [session])
    if(loading){
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    }

    async function register(){
        const res =await axios.post("/api/auth/googleauth" , user);
        router.push("/login");
    }
    return (
        <>
            <h1>You are a new user</h1>
            <label htmlFor='username'></label>
            <label htmlFor="username" >username: </label>
            <input 
                type="text"
                id="username"
                value={user.username}
                onChange={(e)=> setUser({...user , username : e.target.value})}
                placeholder="username"
            /><br />
            <button onClick={register}>Register Google Account</button>
        </>
    )
    
}
