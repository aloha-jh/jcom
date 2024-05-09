"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faHouse,
  faMagnifyingGlass,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useSelectedLayoutSegment } from "next/navigation";
const user = {
  id: "aloha2jh",
};

export default function Header() {
  const segment = useSelectedLayoutSegment();
  // console.log(segment);
  return (
    <header>
      <h1>J</h1>
      <ul>
        <li className={segment === "home" ? "active" : ""}>
          <Link href="/home">
            <FontAwesomeIcon icon={faHouse} />홈
          </Link>
        </li>
        <li
          className={
            segment === "explore" || segment === "search" ? "active" : ""
          }>
          <Link href="/explore">
            <FontAwesomeIcon icon={faMagnifyingGlass} /> 탐색하기
          </Link>
        </li>
        <li className={segment === "messages" ? "active" : ""}>
          <Link href="/messages">
            <FontAwesomeIcon icon={faEnvelope} /> 쪽지
          </Link>
        </li>
        <li className={segment === user.id ? "active" : ""}>
          <Link href="/aloha2jh">
            <FontAwesomeIcon icon={faUser} /> 프로필
          </Link>
        </li>
      </ul>
      <button>
        <Link href="/compose/post">게시하기</Link>
      </button>
    </header>
  );
}
