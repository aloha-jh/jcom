import { ReactNode } from "react";
import Profile from "@/app/(afterLogin)/_components/Profile";
import Header from "@/app/(afterLogin)/_components/Header";
import Search from "@/app/(afterLogin)/_components/Search";
import "@/app/style/page.main1.css";
import "@/app/style/module.modal.css";
import Trand from "@/app/(afterLogin)/_components/Trand";
import Flow from "@/app/(afterLogin)/_components/Flow";

type props = { children: ReactNode; modal: ReactNode };

export default function HomeLayout({ children, modal }: props) {
  console.log(children);
  return (
    <>
      <div className="main-1 after-login">
        <div className="left-wrap">
          <div className="left">
            <Header />
            <Profile />
          </div>
        </div>
        <main>
          <article>{children}</article>
          <aside>
            <Search />
            <Trand />
            <Flow />
          </aside>
        </main>
      </div>
      {modal}
    </>
  );
}
