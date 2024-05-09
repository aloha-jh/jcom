"use client";
import { useRouter } from "next/navigation";
export default function MsgList() {
  const router = useRouter();
  const onClickMsgList = () => {
    router.push(`/messages/1`);
  };
  return (
    <li onClick={onClickMsgList}>
      <div className="user-img">
        <div className="user-profile-img"></div>
      </div>
      <div className="user-info">
        <p>
          <b>지나</b>
          <span>@aloha2jh</span>
          <span>몇초</span>
        </p>
        <p className="desc">안녕히 가세요</p>
      </div>
    </li>
  );
}
