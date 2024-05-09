import Content from "@/app/(afterLogin)/_components/Content";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import ProfileMy from "@/app/(afterLogin)/_components/ProfileMy";
import BackArea from "@/app/(afterLogin)/_components/BackArea";

import { user, dataRec } from "@/app/(afterLogin)/_dummy/data";

export default function Home() {
  return (
    <div className="my-profile-wrap">
      <BackArea title={user.name} />
      <ProfileMy user={user} />
      <Content data={dataRec} />
    </div>
  );
}
