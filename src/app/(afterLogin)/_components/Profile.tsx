"use client";
import { useState } from "react";

export default function Profile() {
  const [showBtn, setShowBtn] = useState(false);
  const onClickProfile = () => {
    setShowBtn(!showBtn);
  };
  return (
    <>
      <div className="profile" onClick={onClickProfile}>
        <div className="user-img"></div>
        <p>
          <b>지나</b>
          <span>@aloha2jh</span>
        </p>
      </div>
      <div className={`btn-logout ${showBtn ? "" : "hidden"}`}>
        <button>로그아웃</button>
      </div>
    </>
  );
}
