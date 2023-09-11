"use client";
import "react-toastify/dist/ReactToastify.css";
import NotificationItem from "@/app/components/profile/NotificationItem";
import { UserPageContext } from "@/app/components/UserPageContext";
import { useContext, useEffect } from "react";
import noNotifs from "../../../../../public/svgs/profile/nonotifs.svg";
import { RevolvingDot } from "react-loader-spinner";
import { UserPageContextTypes } from "@/app/components/UserPageContext";
import Image from "next/image";
export default function Notifications() {
  const {
    isSubscribed,
    isValid,
    askPermissionAndUpdate,
    nftNotificationList,
    handleNotificationList,
    loadingNotifs,
    collectionName,
  } = useContext(UserPageContext) as UserPageContextTypes;

  useEffect(() => {
    handleNotificationList();
  }, []);

  console.log(nftNotificationList);

  return (
    <div className="w-full px-[10px]">
      {loadingNotifs ? (
        <div className="w-full relative flex items-center justify-center mt-2 h-[90vh]">
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
      ) : nftNotificationList.length > 0 ? (
        <div className="mt-[37px] flex xl:px-[30px] 2xl:px-[14px] flex-col gap-y-[20px] pb-[40px] sm:pb-[50px] ">
          {" "}
          {nftNotificationList.map((item, index) => {
            return (
              <NotificationItem
                newlyMinted={item.status === "New Mint"}
                key={index}
                collectionName={collectionName}
                addrFrom={item.addrFrom}
                addrTo={item.addrTo}
                tokenId={item.tokenId}
              ></NotificationItem>
            );
          })}
          <button
            onClick={() => {
              handleNotificationList();
            }}
          >
            fetch Notification List
          </button>
        </div>
      ) : (
        <div className="w-full h-[90vh] flex items-center justify-center">
          <Image
            src={noNotifs.src}
            className={"xl:w-[500px] lg:w-[400px] w-[60vw]"}
            width={500}
            height={400}
            alt="monitor with no notifications on its screen"
          ></Image>
        </div>
      )}
    </div>
  );
}
