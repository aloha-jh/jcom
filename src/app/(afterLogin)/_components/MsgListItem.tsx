type Props = {
  data: any;
};
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.locale("ko");
export default function MsgListItem({ data }: Props) {
  return (
    <li className={data.me ? "me" : "you"}>
      <div className="msg-box">
        <p>{data.txt}</p>
      </div>
      <p className="msg-info">
        <span className="time">
          {dayjs(data.createAt).format("YYYY년 M월 D일 A HH시 MM분")}
        </span>
      </p>
    </li>
  );
}
