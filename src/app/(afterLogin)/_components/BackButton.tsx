"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const onClickBackBtn = () => {
    router.back();
  };
  return (
    <>
      <button className="btn-back" onClick={onClickBackBtn}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </>
  );
}
