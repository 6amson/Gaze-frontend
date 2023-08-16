import notifsNewlyMinted from "../../../../public/svgs/profile/notifs-newly-minted.svg";
import notifsNewlyTransfer from "../../../../public/svgs/profile/notifs-newly-transfer.svg";
import Image from "next/image";

interface NotificationItemProps {
  newlyMinted: boolean;
}

export default function NotificationItem(props: NotificationItemProps) {
  return (
    <div className="font-raleWay border border-black p-[12px] rounded-[10px] lg:flex lg:gap-x-[15px]">
      {/*      <Image
        src={notifsNewlyTransfer.src}
        width={100}
        height={100}
        alt={"notification icon for newly transferred"}
      ></Image> */}
      <Image
        src={
          props.newlyMinted ? notifsNewlyMinted.src : notifsNewlyTransfer.src
        }
        width={140}
        className={"lg:w-[150px]"}
        height={100}
        alt={"notification icon for newly minted"}
      ></Image>
      <div>
        {" "}
        <div className="font-bold">BORED APE YATCH CLUB</div>
        <div className="text-[0.8rem]">
          The Ape with Glasses NFT was just recently minted at 8:90am by
          @bigNftguy (<span className="text-spacePurple">0x24shk624sd5</span>)
          and listed for <span className="text-spacePurple">0.93eth</span>
        </div>
      </div>
    </div>
  );
}
