"use client";
import "@/app/style/page.main0.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation'


/*
Q. 만약 이메일 다음 클릭시 비밀번호 뜨게 어떻게 하지?
-step 이란 값으로 저장~

Notie. 제로초 강의랑 다르게 했음; 인터셉팅 라우터 굳이 사용안해도 모달 기능 구현되서
메인 홈페이지를 컴포넌트화 시켰음. 이게 파일경로 들어가면 페이지 그대로 url이랑 매칭 되고 직관적이여서

Q. 루트 경로로 이동해도 안꺼지는데,
next 공식문서에 router.back()

Q. catchAll 은 어떤상황에서쓰이는지 잘 모르겠다;

*/
export default function modal() {
    const [id, setId] = useState('');
    const [pass, setPass] = useState();
    const [step, setStep] = useState(1);
    const router = useRouter();

    const onChangeId = (e: any) => {
        setId(e.target.value);
    }
    const onChangePass = (e: any) => {
        setPass(e.target.value);
    }
    const onClickNextBtn = () => {
        // if (id !== '') {
        //     setStep(2);
        // }
        setStep(2);
    }
    const onSubmitLogin = (e: any) => {
        e.prevent.default();
    }

    return (
        <>
            < div className="modal-wrap" >
                <div className="modal login-wrap">
                    <Link href="/" onClick={() => { router.back() }}><FontAwesomeIcon icon={faXmark} /></Link>
                    {step === 1 ?
                        <>
                            <ul>
                                <li>
                                    <span>아이디를 입력하세요</span>
                                    <input type="text"
                                        value={id} onChange={onChangeId} />
                                </li>
                            </ul>
                            <button onClick={onClickNextBtn}>다음</button>
                        </>
                        :
                        <form>
                            <ul>
                                <li>
                                    <span>아이디</span>
                                    <input type="text"
                                        value={id} readOnly />
                                </li>
                                <li>
                                    <span>비밀번호</span>
                                    <input type="password"
                                        value={pass} onChange={onChangePass} />
                                </li>
                                <li>
                                </li>
                            </ul>
                            <button onSubmit={onSubmitLogin}>로그인 하기</button>
                        </form>
                    }
                </div>
            </div >
        </>
    )
}