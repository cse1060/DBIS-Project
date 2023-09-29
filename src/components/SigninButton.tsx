"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {useEffect} from "react";
const SigninButton = (props:any) => {
  const { data: session } = useSession();
    const router = useRouter();
    useEffect(()=>{
        if(session){
            router.push("/googleAuth");
        }
    } , [session])
  if (session && session.user) {
    console.log(session);
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => {signIn(); router.push("/googleAuth"); }} className="text-green-600 ml-auto">
      Sign In
    </button>
  );
};

export default SigninButton;