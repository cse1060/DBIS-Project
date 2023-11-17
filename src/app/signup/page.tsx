"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import SigninButton from "@/components/SigninButton";
import "../../css/login.css"
import ParticleBackground from "@/components/ParticleBackground";
export default function SignupPage() {
    const router = useRouter();
    const [user , setUser] = useState({
        email : "",
        password : "" ,
        username :"",
    })

    const[loading , setLoading] = useState(false);

    const onSignup = async ()=>{
        try {
            setLoading(true);
            const response  = await axios.post("/api/users/signup" , user);
            console.log(response.data);
            router.push("/login");
        } catch (error : any) {
            console.log(error);
        }finally{
            setLoading(true);
        }
    }

    return (
      <div id="container" className="container sign-up">
        <SigninButton type="signup" />
            <h1>{loading ? "Processing" : "Signup"}</h1>
            
            
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="text"
                    id="username"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    placeholder="username"
                  />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input
                    type="text"
                    id="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    placeholder="email"
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    id="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    placeholder="password"
                  />
                </div>
                <button onClick={onSignup}>Signup here</button>
                <p>
                  <span>Already have an account?</span>
                  <Link href="/login">Visit Login Page</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row content-row">
          <div className="col align-items-center flex-col"></div>
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
        <video id="background-video" autoPlay loop muted>
          <source src="video/videoplayback.webm" type="video/webm" />
        </video>
      </div>
      // <h1>Hello</h1>
    );
}

    

    // <div>
    //         <SigninButton type = "signup"/>
    //         <h1>{loading ? "Processing" : "Signup" }</h1>
    //         <hr />
    //         <label htmlFor="username" >username: </label>
    //         <input 
    //             type="text"
    //             id="username"
    //             value={user.username}
    //             onChange={(e)=> setUser({...user , username : e.target.value})}
    //             placeholder="username"
    //         /><br />
    //         <label htmlFor="email" >email: </label>
    //         <input 
    //             type="text"
    //             id="email"
    //             value={user.email}
    //             onChange={(e)=> setUser({...user , email : e.target.value})}
    //             placeholder="email"
    //         /><br />
    //         <label htmlFor="password" >password: </label>
    //         <input 
    //             type="password"
    //             id="password"
    //             value={user.password}
    //             onChange={(e)=> setUser({...user , password : e.target.value})}
    //             placeholder="password"
    //         /><br />
    //         <button
    //             onClick={onSignup}
    //         >Signup here</button>
    //         <br />
    //         <Link href="/login">Visit Login Page</Link>
    //     </div>