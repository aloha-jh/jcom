"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, ChangeEventHandler, FormEventHandler } from "react";
import { faImage } from "@fortawesome/free-solid-svg-icons";
//
type Props = {
  placeholder: string;
};
export default function FormWrite({ placeholder }: Props) {
  const [desc, setDesc] = useState();
  const descRef = useRef(null);
  const imageRef = useRef(null);

  const onChangeText: ChangeEventHandler<HTMLTextAreaElement> = (e: any) => {
    setDesc(e.currentTarget.value);
  };
  const onClickSubmit: FormEventHandler = (e: any) => {
    e.preventDefault();
    // console.log(desc);
  };
  const onClickUpload = () => {
    imageRef.current?.click();
  };

  return (
    <div className="input-write">
      <div className="writer ">
        <div className="user-img"></div>
      </div>
      <div className="desc">
        <form>
          <textarea
            value={desc}
            ref={descRef}
            onChange={onChangeText}
            placeholder={placeholder}
          />
          <div className="btns">
            <button onClick={onClickUpload}>
              <FontAwesomeIcon icon={faImage} />
            </button>
            <input className="custom-file-upload" type="file" ref={imageRef} />
            <button onClick={onClickSubmit}>게시하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}
