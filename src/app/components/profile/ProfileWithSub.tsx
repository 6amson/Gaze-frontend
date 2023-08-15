import ProfileTitle from "./ProfileTitle";
import ProfileItem from "./ProfileItem";

export default function ProfileWithSub() {
  return (
    <div className="h-screen  w-full pt-[32px] xl:pt-[51px]">
      <ProfileTitle></ProfileTitle>
      <div className="flex flex-col gap-y-[10px] pb-[50px] mt-[40px] sm:flex-row sm:gap-x-[10px] sm:justify-between    sm:flex-wrap sm:gap-y-[40px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return <ProfileItem key={index}></ProfileItem>;
        })}
      </div>
    </div>
  );
}
