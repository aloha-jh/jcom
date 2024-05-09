"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormWrite from "@/app/(afterLogin)/_components/FormWrite";

export default function modal() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState();
  const [step, setStep] = useState(1);
  const router = useRouter();

  const onChangeId = (e: any) => {
    setId(e.target.value);
  };
  const onChangePass = (e: any) => {
    setPass(e.target.value);
  };
  const onClickNextBtn = () => {
    // if (id !== '') {
    //     setStep(2);
    // }
    setStep(2);
  };
  const onSubmitLogin = (e: any) => {
    e.prevent.default();
  };

  return (
    <>
      <div className="modal-wrap">
        <div className="modal login-wrap">
          <Link
            href="/"
            onClick={() => {
              router.back();
            }}>
            <FontAwesomeIcon icon={faXmark} />
          </Link>
          <FormWrite placeholder={"무슨일이 일어나고 있나요?"} />
        </div>
      </div>
    </>
  );
}
