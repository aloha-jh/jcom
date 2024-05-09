"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormWrite from "@/app/(afterLogin)/_components/FormWrite";
import ActionButton from "@/app/(afterLogin)/_components/ActionButton";
import ContentItem from "@/app/(afterLogin)/_components/ContentItem";

import { ciData, cData } from "@/app/(afterLogin)/_dummy/data";

export default function modal({ params }: any) {
  const postId = params.postId;
  const photoId = params.photoId;
  const router = useRouter();
  return (
    <div className="modal-wrap">
      <div className="modal photo-detail">
        <div className="s-left ">
          <div
            className="photo-img"
            style={{
              backgroundImage: `url('/images/1.png')`,
            }}></div>
          <ActionButton />
        </div>
        <div className="s-right">
          <Link
            href="/"
            onClick={() => {
              router.back();
            }}>
            <FontAwesomeIcon icon={faXmark} />
          </Link>
          <ul className="content">
            <ContentItem v={ciData} i={0} />
          </ul>
          <FormWrite placeholder={"답글 게시하기"} />
          <ul className="content">
            <ContentItem v={cData} i={0} />
            <ContentItem v={cData} i={0} />
            <ContentItem v={cData} i={0} />
          </ul>
        </div>
      </div>
    </div>
  );
}
