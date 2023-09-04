"use client";
import ProfileSideBar from "@/app/components/profile/ProfileSideBar";
import ProfileHeader from "@/app/components/profile/ProfileHeader";
import { ToastContainer, toast } from "react-toastify";
import UserPageProvider from "@/app/components/UserPageContext";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useContext } from "react";
import { UserPageContext } from "@/app/components/UserPageContext";
import { UserPageContextTypes } from "@/app/components/UserPageContext";
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { verifyValidAndSusbscribeTwo, isValid, isSubscribed } = useContext(
    UserPageContext
  ) as UserPageContextTypes;

  useEffect(() => {
    verifyValidAndSusbscribeTwo();
  }, []);
  return (
    <section className="w-full h-screen">
      <div className="flex">
        <div className="w-[100%] max-w-[54px] xl:max-w-[220px] relative h-screen z-30  border ">
          <ProfileSideBar></ProfileSideBar>
        </div>
        <div className="w-[100%]">
          <div className="w-full h-full xl:max-h-[60px] max-h-[45px] relative border z-20">
            {" "}
            <ProfileHeader></ProfileHeader>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
