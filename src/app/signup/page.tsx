'use client'

import Image from "next/image";
import Header from "../components/globals/Header";
import "./signup.scss";
import usernameIcon from "../../../public/usernameIcon.svg";
import emailIcon from "../../../public/emailIcon.svg";
import passwordIcon from "../../../public/passwordIcon.svg";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useRouter, usePathname} from 'next/navigation';
import Cookies from 'js-cookie';
// import path from 'path';

export default function Signup() {

    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleUsernameChange = (e: any) => {
        setUsername(e.target.value);
    }

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    };

    const datum = {
        username: username,
        email: email,
        password: password,
    }

    const data = JSON.stringify(datum);

    const handleAuth = async(): Promise<any> => {
        const accesstoken = localStorage.getItem('token');
        const refreshtoken = Cookies.get('Gaze_userAccess_AT');

        if (accesstoken && refreshtoken || accesstoken && !refreshtoken) {
            // console.log(accesstoken);
            axios.get('http://localhost:3005/user/verify', {
                headers: {
                    'Authorization': `Bearer ${accesstoken}`
                }
            }).then((res) => {

                if (res.status == 200) {
                    Cookies.set('Gaze_userAccess_AT', res.data);
                    const { userId } = res.data;
                    const encodedString = encodeURIComponent(userId);
                    router.push(`${pathname}`);
                }

            }).catch((err) => {
                console.log(err);
                // router.push('/signin');
            });

        } else if (!accesstoken && !refreshtoken) {
            // router.push('/signin');
        }
    }


    return (
        <div>
            <div className="mainDiv">
                <Header></Header>
                <div className="subMainDiv">
                    <div className="subMainDiv1">
                    </div>
                    <div className="subMainDiv2">
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
                                    />
                                </div>
                                <button className="submitButton" type="submit">SIGN UP</button>
                                <div className="alternateSignin">
                                    <p>I already have an account,</p>
                                    <p>SIGN IN</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}