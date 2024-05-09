"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";
import Content from "@/app/(afterLogin)/_components/Content";
import FormWrite from "@/app/(afterLogin)/_components/FormWrite";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import { dataRec, dataFol } from "@/app/(afterLogin)/_dummy/data"; // dummyData
// context API 적용해서 하위에 데이터 다르게 주기 (섹션2 context API적용해보기 )
// 데이터 주는 컴포넌트 Tab / 받는 Content

export default function Tab() {
  const [tab, setTab] = useState(0);

  const handleTabChange = (index: number) => () => {
    setTab(index);
  };

  return (
    <>
      <div className="btns">
        <button
          className={tab === 0 ? "active" : ""}
          onClick={handleTabChange(0)}>
          <b>추천</b>
        </button>
        <button
          className={tab === 1 ? "active" : ""}
          onClick={handleTabChange(1)}>
          <b>팔로우 중</b>
        </button>
      </div>
      <FormWrite placeholder={"무슨일이 일어나고 있나요?"} />
      {tab == 0 ? <Content data={dataRec} /> : <Content data={dataFol} />}
    </>
  );
}
