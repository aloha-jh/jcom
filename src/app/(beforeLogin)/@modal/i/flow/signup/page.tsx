"use client";
import "@/app/style/page.main0.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/*
Q. 만약 이메일 다음 클릭시 비밀번호 뜨게 어떻게 하지?
-step 이란 값으로 저장~

Q. 루트 경로로 이동해도 안꺼지는데,
문서에 router.back()

Q. catchAll 은 어떤상황에서쓰이는지 잘 모르겠다;

*/
export default function modal() {
  const [id, setId] = useState();
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState();
  const [profile, setProfile] = useState();
  const router = useRouter();
  const onChangeId = (e: any) => {
    setId(e.target.value);
  };
  const onChangeNickName = (e: any) => {
    setNickName(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const onChangeProfile = (e: any) => {
    setProfile(e.target.value);
  };
  const onSubmitJoin = (e: any) => {
    e.prevent.default();
  };
  return (
    <>
      <div className="modal-wrap">
        <div className="modal join-wrap login">
          <Link            href="/"            onClick={() => {
              router.back();
            }}>
            <FontAwesomeIcon icon={faXmark} />
          </Link>
          <form>
            <ul>
              <li>
                <span>아이디</span>
                <input type="text" value={id} onChange={onChangeId} />
              </li>
              <li>
                <span>닉네임</span>
                <input
                  type="text"
                  value={nickName}
                  onChange={onChangeNickName}
                />
              </li>

              <li>
                <span>비밀번호</span>
                <input
                  type="password"
                  value={password}
                  onChange={onChangePassword}
                />
              </li>
              <li>
                <span>프로필</span>
                <input type="file" value={profile} onChange={onChangeProfile} />
              </li>
            </ul>
            <button onSubmit={onSubmitJoin}>가입하기</button>
          </form>
        </div>
      </div>
    </>
  );
}
