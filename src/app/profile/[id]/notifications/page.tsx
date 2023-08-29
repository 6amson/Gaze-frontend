"use client";
import NotificationItem from "@/app/components/profile/NotificationItem";
import { UserPageContext } from "@/app/components/UserPageContext";
import { useContext } from "react";
import { UserPageContextTypes } from "@/app/components/UserPageContext";
export default function Notifications() {
  const {
    isSubscribed,
    isValidated,
    askPermissionAndUpdate,
    nftNotificationList,
    handleNotificationList,
  } = useContext(UserPageContext) as UserPageContextTypes;

  return (
    <div className="w-full px-[10px]">
      <div className="mt-[37px] flex xl:px-[30px] 2xl:px-[14px] flex-col gap-y-[20px] pb-[40px] sm:pb-[50px]">
        {" "}
        {[1, 2, 3, 4, 6, 7, 8].map((item, index) => {
          return (
            <NotificationItem
              newlyMinted={Math.random() > 0.5}
              key={index}
            ></NotificationItem>
          );
        })}
      </div>
    </div>
  );
}
