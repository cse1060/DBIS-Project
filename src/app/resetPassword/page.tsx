"use client";
import React from 'react'
import { useEffect ,useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function resetPassword() {
    const router = useRouter();
    const [userId ,setUserId] = useState(0);
    const [token , setToken] = useState("");
    const [verified , setVerified] = useState(false);
    const [error , setError] = useState("");
    const [newPassword ,setNewPassword] = useState("");
    const [confirmPassword ,setConfirmPassword] = useState("");

    const verifyUserToken = async () =>{
        try {
            const data = await axios.get(`/api/users/resetPassword?token=${userId}=${token}`);
            console.log(data.data);
            if(data.data.result === true){
                setVerified(true);
            }else{
                setError("Either yhe token is wrong or the token expired")
            }
        } catch (error : any) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        const urlToken = window.location.search.split('=');
        setToken(urlToken[2] || "");
        setUserId(parseInt(urlToken[1]) || 0);
    },[])

    useEffect(()=>{
        if(token.length > 0){
            verifyUserToken();
        }
    },[token]);
    if(!verified){
        return (
            <div>
                {error ? 
                <h1>{error}</h1> :<>
                <h1>Verifying Please wait...</h1>
                <h1>token : {token}</h1>
                </>
                }
            </div>
        )
    }
    const reset = async ()=>{
        const res = await axios.post("/api/users/resetPassword" , {
            userId : userId,
            password : newPassword
        }); 
        router.push("/login");
    }
  return (
    <div>
        <label htmlFor='password' >New password</label>
        <input 
            type = "password"
            id = "password"
            value = {newPassword}
            onChange={(e)=>{
                setNewPassword(e.target.value);
            }}
            placeholder='password'
        />
        <br />
        <label htmlFor='confirmpassword' >Confirm password</label>
        <input 
            type = "password"
            id = "confirmPassword"
            value = {confirmPassword}
            onChange={(e)=>{
                setConfirmPassword(e.target.value);
            }}
            placeholder='password'
        />
        {
            confirmPassword.length>0 ? (confirmPassword === newPassword ? <button onClick={reset}>Reset</button>: "Password are different" ) : null 
        }
    </div>
  )
}
