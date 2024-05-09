import { ReactNode } from "react";

import "@/app/style/page.main0.css";
import "@/app/style/module.modal.css";

type props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: props) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
