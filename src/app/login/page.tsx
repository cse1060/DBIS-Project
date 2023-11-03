"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import SigninButton from "@/components/SigninButton";
import "../../css/login.css";


export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLoginup = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log(response.data);
      if (response.data.isnew) {
        router.push(`/profile/create/${response.data.username}`);
      } else {
        router.push(`/profile/${response.data.username}`);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div id="container" className="container sign-in">
      <SigninButton type="login" />
      <div className="row">
        <div className="col align-items-center flex-col sign-up"></div>
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              <button>Sign in</button>
              <p>
                <Link href="/forgotPassword">Forgot Password ?</Link>
              </p>
              <p>
                <span>Don't have an account?</span>
                <Link href="\signup">SignUp here</Link>
              </p>
            </div>
          </div>
          <div className="form-wrapper"></div>
        </div>
      </div>
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome</h2>
          </div>
          <div className="img sign-in"></div>
        </div>
      </div>
      <video id="background-video" autoPlay loop muted>
        <source src="video/videoplayback.webm" type="video/webm" />
      </video>
    </div>
  );
}
