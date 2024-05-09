"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const data = [
  { name: "comment", num: 2333, me: false, icon: faComment },
  { name: "share", num: 3, me: false, icon: faArrowsRotate },
  { name: "liked", num: 30, me: true, icon: faHeart },
];

export default function ActionButton() {
  /* 
        1. 정보 보여주기 O        
        2. 클릭시 정보+1 O // 
        3. 내가 눌렀는지 정보보여주기-클래스연결 O
   */

  const [btnData, setBtnData] = useState(data);

  const onClickActionBtn = (name: string) => {
    setBtnData((prevData) =>
      prevData.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            me: !item.me, // me 값을 반대로 변경
            num: item.me ? item.num - 1 : item.num + 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <ul className="btns action-btns">
      {btnData.map((v, i) => (
        <li
          key={i + v.name}
          className={`${v.name} ${v.me ? "clicked" : ""}`}
          onClick={() => onClickActionBtn(v.name)}>
          <FontAwesomeIcon icon={v.icon} />
          <span>{v.num}</span>
        </li>
      ))}
    </ul>
  );
}
