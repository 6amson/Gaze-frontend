import Image from "next/image";
import Header from "../components/globals/Header";
import "./signin.scss";
import emailIcon from "../../../public/emailIcon.svg";
import passwordIcon from "../../../public/passwordIcon.svg";


export default function Signin() {


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