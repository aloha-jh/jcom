import BackArea from "@/app/(afterLogin)/_components/BackArea";
import MsgListItem from "@/app/(afterLogin)/_components/MsgListItem";
import { msgData } from "@/app/(afterLogin)/_dummy/data";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function Home() {
  return (
    <div className="msg-detail-wrap">
      <BackArea title={`지나`} />
      <div className="profile-other">
        <div className="user-img"></div>
        <p>
          <b>지나</b>
          <span>@aloha2jh</span>
        </p>
      </div>
      <ul className="msg-detail">
        {msgData.map((v) => (
          <MsgListItem data={v} />
        ))}
      </ul>
    </div>
  );
}
