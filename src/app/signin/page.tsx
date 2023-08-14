'use client'

import Image from "next/image";
import Link from "next/link"
import Header from "../components/globals/Header";
import "./signin.scss";
import emailIcon from "../../../public/emailIcon.svg";
import passwordIcon from "../../../public/passwordIcon.svg";
import { useState, useEffect } from "react";



export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    
    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const datum = {
        email: email,
        password: password,
    }

    const data = JSON.stringify(datum);

    return (
        // eslint-disable react/no-unescaped-entities
        <div>
            <div className="mainDiv">
                <Header></Header>
                <div className="subMainDiv">
                    <div className="subMainDiv1">
                    </div>
                    <div className="subMainDiv2">
                        <div className="subMainDiv2Form">
                            <p className="signupDiv">SIGN IN</p>
                            <form>
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
                                        type={showPassword ? "text" : "password"} 
                                        required
                                    />
                                </div>
                                <button className="submitButton" type="submit">SIGN IN</button>
                                <div className="alternateSignin">
                                    <p>I don't have an account,</p>
                                    <Link href={'/signup'}><p>SIGN UP</p></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}