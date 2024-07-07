"use client";

import { RevolvingDot } from "react-loader-spinner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  const url = process.env.NEXT_PUBLIC_API_PATH;

  const handleAuth = async (): Promise<any> => {
    const accesstoken = localStorage.getItem("Gaze_userAccess_AT");
    const refreshtoken = Cookies.get("Gaze_userAccess_RT");

    if ((accesstoken && refreshtoken) || (accesstoken && !refreshtoken)) {
      axios
        .get(`${url}user/verify`, {
          headers: {
            Authorization: `Bearer ${accesstoken}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            Cookies.set("Gaze_userAccess_RT", res.data.refreshToken);
            const { userId } = res.data;
            const { contractAddress } = res.data;
            const encodedString = encodeURIComponent(userId);
            router.push(`/profile/${encodedString}/notifications`);
            return {
              encodedString: encodedString,
              contractAddress,
            };
          }
        })
        .catch((err) => {
          console.log(err);
          router.push("/signup");
        })
        .finally(() => {});
    } else if (accesstoken == null) {
      router.push("/signup");
    }
  };

  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <RevolvingDot
        radius={100}
        strokeWidth={2}
        color="#A157FF "
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass="absolute mt-[50px]"
        visible={true}
      />
    </div>
  );
}
