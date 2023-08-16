import ProfileSideBar from "@/app/components/profile/ProfileSideBar";
import ProfileHeader from "@/app/components/profile/ProfileHeader";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-screen">
      <div className="flex">
        <div className="w-[100%] max-w-[220px] relative h-screen z-30 bg-red-500 border ">
          <ProfileSideBar></ProfileSideBar>
        </div>
        <div className="w-full">
          <div className="w-full h-[75px] max-h-[75px] relative border">
            {" "}
            <ProfileHeader></ProfileHeader>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
