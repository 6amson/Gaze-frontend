"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/globals/Header";
import "./signup.scss";
import usernameIcon from "../../../public/usernameIcon.svg";
import emailIcon from "../../../public/emailIcon.svg";
import passwordIcon from "../../../public/passwordIcon.svg";
import gazingMan from "../../../public/svgs/signup-in/gazing-man.svg";
import clouds from "../../../public/svgs/signup-in/clouds.svg";
import signupInStars from "../../../public/svgs/signup-in/signup-in-stars.svg";
import purpleTextLogo from "../../../public/svgs/globals/purple-text-logo-alone.svg";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Dna } from "react-loader-spinner";

export default function Signup() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = "https://gazebackend.cyclic.cloud/";

  const router = useRouter();

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const datum = {
    username: username,
    email: email,
    password: password,
  };

  const data = JSON.stringify(datum);

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(`${url}user/signup`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { refreshToken } = res.data;
      const { accessToken } = res.data;
      const { id } = res.data;
      localStorage.setItem("Gaze_userAccess_AT", accessToken);
      Cookies.set("Gaze_userAccess_RT", refreshToken, {
        secure: true,
        sameSite: "lax",
      });
      const encodedString = encodeURIComponent(id);

      if (res.status == 201) {
        // console.log(res);
        router.push(`/profile/${encodedString}`);
      }
    } catch (err: any) {
      console.info("this is the error:", err);

      if (err.code === "ERR_NETWORK") {
        toast.error("This is from our end, please retry.", {
          position: "top-center",
          autoClose: 2500,
          theme: "dark",
        });
        return;
      } else if (err.response.data.statusCode == 409) {
        toast.error("User already exist.", {
          position: "top-center",
          autoClose: 2500,
          theme: "dark",
        });
      } else if (err.response.data.statusCode == 400) {
        toast.error("Please, flll the form appropriately.", {
          position: "top-center",
          autoClose: 2500,
          theme: "dark",
        });
      } else if (err.response.data.statusCode == 500) {
        toast.error("This is from our end, please try again", {
          position: "top-center",
          autoClose: 2500,
          theme: "dark",
        });
      } else {
        toast.error("This is from our end, please try again", {
          position: "top-center",
          autoClose: 2500,
          theme: "dark",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="mainDiv">
        <div className="headerCont">
          {" "}
          {/* <div className="headerDiv">
            <Header></Header>
          </div> */}
        </div>
        <div className="subMainDiv">
          <div className="subMainDiv1">
            <Image
              width={700}
              height={300}
              className={"absolute top-0"}
              alt={"man gazing"}
              src={signupInStars.src}
            ></Image>
            <div className={"absolute top-[10%] flex flex-col items-center"}>
              <Image
                width={350}
                height={300}
                alt={"clouds"}
                src={purpleTextLogo.src}
              ></Image>
              <Image
                width={500}
                height={300}
                alt={"clouds"}
                src={clouds.src}
              ></Image>
            </div>
            <Image
              width={350}
              className={"absolute bottom-[-5%]"}
              height={300}
              alt={"man gazing"}
              src={gazingMan.src}
            ></Image>
          </div>
          <div className="subMainDiv2 font-raleWay">
            <div className="subMainDiv2Form">
              <p className="signupDiv">SIGN UP</p>
              <form>
                <div className="inputDiv">
                  <label htmlFor="username">USERNAME</label>
                  <Image
                    src={usernameIcon}
                    alt="username icon"
                    width={20}
                    className="usernameIcon"
                    height={15}
                  ></Image>
                  <input
                    id="username"
                    name="username"
                    placeholder="Username"
                    required
                    onChange={handleUsernameChange}
                  />
                </div>

                <div className="inputDiv">
                  <label htmlFor="email">EMAIL</label>
                  <Image
                    src={emailIcon}
                    alt="email icon"
                    width={20}
                    className="emailIcon"
                    height={15}
                  ></Image>
                  <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    type={email}
                    onChange={handleEmailChange}
                  />
                </div>

                <div className="inputDiv">
                  <label htmlFor="password">PASSWORD</label>
                  <Image
                    src={passwordIcon}
                    alt="password icon"
                    width={20}
                    className="passwordIcon"
                    height={15}
                  ></Image>
                  <input
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    type={showPassword ? "text" : "password"}
                    onChange={handlePasswordChange}
                  />
                  <input
                    id="showP"
                    type="checkbox"
                    className="showPassword"
                    checked={showPassword}
                    onChange={handleTogglePassword}
                  />
                </div>
                <button
                  className="submitButton"
                  onClick={handleSignup}
                  disabled={loading}
                >
                  SIGN UP
                </button>
                <div className="alternateSignin">
                  <p>I already have an account,</p>
                  <Link href={"/signin"}>
                    <p>SIGN IN</p>
                  </Link>
                  <ToastContainer />
                  <Dna
                    visible={loading}
                    height="150"
                    width="150"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
