"use client";
import Link from "next/link";
import Content from "@/app/(afterLogin)/_components/Content";
import { useState } from "react";
import {
  trand,
  dataRec as forme,
  dataFol as live,
} from "@/app/(afterLogin)/_dummy/data";

type Props = {
  params: {
    q?: string;
    tab?: string;
  };
};
export default function LinkTab({ params }: Props) {
  const onClickLinkTab = (tab: string) => {};
  console.log(params);
  const slted = params.tab;
  const query = params.q;

  let tabContent: any = [];
  if (slted === "trand") {
    tabContent = trand;
  } else if (slted === "forme") {
    tabContent = forme;
  } else if (slted === "live") {
    tabContent = live;
  }
  return (
    <div className="link-tab-wrap">
      <div className="btns ">
        <button className={slted === "trand" ? "active" : ""}>
          <Link href={`search?q=${query}&tab=trand`}>
            <b>트랜드</b>
          </Link>
        </button>
        <button className={slted === "forme" ? "active" : ""}>
          <Link href={`/search?q=${query}&tab=forme`}>
            <b>나를 위한 추천</b>
          </Link>
        </button>
        <button className={slted === "live" ? "active" : ""}>
          <Link href={`search?q=${query}&tab=live`}>
            <b>최신</b>
          </Link>
        </button>
      </div>

      <Content data={tabContent} />
    </div>
  );
}
