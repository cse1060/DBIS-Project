"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import SigninButton from "@/components/SigninButton";

export default function LoginPage() {
    const router = useRouter();
    const [user , setUser] = useState({
        email : "",
        password : "" ,
    })

    const onLoginup = async ()=>{
        try {
            const response  = await axios.post("/api/users/login" , user);
            console.log(response.data);
            router.push("/profile");
        } catch (error :any) {
            console.log(error);
        }
    }

    return(
        <div>
            <SigninButton type="login"/>
            <h1>Login</h1>
            <hr />
            <label htmlFor="email" >email: </label>
            <input 
                type="text"
                id="email"
                value={user.email}
                onChange={(e)=> setUser({...user , email : e.target.value})}
                placeholder="email"
            /><br />
            <label htmlFor="password" >password: </label>
            <input 
                type="password"
                id="password"
                value={user.password}
                onChange={(e)=> setUser({...user , password : e.target.value})}
                placeholder="password"
            /><br />
            <button
                onClick={onLoginup}
            >Login here</button>
            <br />
            <Link href="/signup">Visit Signup Page</Link>
            <hr></hr>
            <Link href="/forgotPassword">Forgot Password ?</Link>
        </div>
    );
}