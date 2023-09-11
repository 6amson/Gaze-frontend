import notifsNewlyMinted from "../../../../public/svgs/profile/notifs-newly-minted.svg";
import notifsNewlyTransfer from "../../../../public/svgs/profile/notifs-newly-transfer.svg";
import Image from "next/image";

interface NotificationItemProps {
  newlyMinted: boolean;
  tokenId: number;
  transactionHash?: string;
  collectionName: string;
  addrTo: string;
  addrFrom: string;
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
        src={notifsNewlyTransfer.src}
        width={140}
        className={`${props.newlyMinted && "hidden"} lg:w-[150px]`}
        height={100}
        alt={"notification icon for newly minted"}
      ></Image>
      <Image
        src={notifsNewlyMinted.src}
        width={140}
        className={`${!props.newlyMinted && "hidden"} lg:w-[150px]`}
        height={100}
        alt={"notification icon for newly minted"}
      ></Image>
      <div>
        {" "}
        <div className="font-bold truncate uppercase">
          {props.collectionName}
        </div>
        <div className="text-[0.8rem] break-all">
          An Nft <span>with tokenId {props.tokenId.toString()} </span> was just
          recently {props.newlyMinted ? "minted" : "transferred"}{" "}
          <span className={`${props.newlyMinted ? "hidden" : ""}`}>
            from <span className="text-spacePurple">{props.addrFrom} to</span>
            <span className=""> {props.addrTo}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
