import Image from "next/image";
import Header from "../components/globals/Header";
import "./signup.scss";
import usernameIcon from "../../../public/usernameIcon.svg";
import emailIcon from "../../../public/emailIcon.svg";
import passwordIcon from "../../../public/passwordIcon.svg";

export default function Signup() {


    return (
        <div>
            <div className="mainDiv">
                <Header></Header>
                <div className="subMainDiv">
                    <div className="subMainDiv1">
                    </div>
                    <div className="subMainDiv2">
                        <div className="subMainDiv2Form">
                            <p>SIGN UP</p>
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}