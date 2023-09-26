"use client";
import React, { useState } from 'react'
import axios from 'axios';

export default function forgotPassword() {
  const [email , setemail] = useState("");
  const forgotPassword = async ()=>{
    try {
      if(email.length>0){
        const res = await axios.post("/api/users/forgotPassword" , {email : email});
        console.log(res);
      }
    } catch (error:any) {
      console.log(error.message);
    }
    
  }
  return (
    <div>
      <label htmlFor='email'>Email</label>
      <input 
        type='email'
        id="email"
        value={email}
        placeholder='email'
        onChange={(e)=>setemail(e.target.value)}
      />
      <br></br>
      <button onClick={forgotPassword}>Submit</button>
    </div>
  )
}
