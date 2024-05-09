import ContentItem from "@/app/(afterLogin)/_components/ContentItem";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import FormWrite from "@/app/(afterLogin)/_components/FormWrite";

import { ciData, cData } from "@/app/(afterLogin)/_dummy/data";
import BackArea from "@/app/(afterLogin)/_components/BackArea";
export default function Home() {
  return (
    <div className="my-profile-wrap">
      <BackArea title={"게시하기"} />

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
  );
}
