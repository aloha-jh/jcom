'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="main-0 before-login">
        <section className="s1">
          <h1>J</h1>
        </section>
        <section className="s2">
          <h2>지금 일어나고 있는 일</h2>
          <ul className="btns">
            <li>
              <p>지금 가입하세요.</p>
              <button>
                <Link href="/i/flow/signup">계정만들기</Link>
              </button>
            </li>
            <li>
              <p>이미 가입하셨나요?</p>
              <button>
                <Link href="/login">로그인</Link>
              </button>
            </li>
          </ul>
        </section>
      </div>{/* main-0 */}
    </main>
  );
}
