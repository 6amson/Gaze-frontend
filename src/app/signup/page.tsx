import gazelogo from "../../../public/svgs/globals/gazelogo.svg";
import Image from "next/image";

export default function Signup() {


    return (
        <div>
            <div className="mainDiv">
                <div>
                    <header>
                        <div>
                            <Image
                                width={"100"}
                                height={"100"}
                                className={"gazeLogo"}
                                alt={"gaze logo"}
                                src={gazelogo.src}
                            ></Image>
                        </div>
                    </header>
                </div>
                <div className="subMainDiv">
                    <p>lets do it</p>
                </div>
            </div>
        </div>
    )
}