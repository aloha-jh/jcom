"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ActionButton from "@/app/(afterLogin)/_components/ActionButton";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");
type Props = {
  v: {
    user: { id: string; name: string; image: any };
    desc: string;
    imgPath: any;
    createAt: Date;
    postId: number;
    images: [{ id: number; path: string }];
  };
  i: number;
};
export default function ContentItem({ v, i }: Props) {
  const router = useRouter();
  const onClickContentItem = () => {
    router.push(`/${v.user.id}/status/${v.postId}`);
  };
  const onClickPhoto = (valId: number) => {
    router.push(`/${v.user.id}/status/${v.postId}/photo/${valId}`);
  };
  const onClickUser = () => {
    router.push(`/${v.user.id}`);
  };

  return (
    <li key={i + v.user.id} onClickCapture={onClickContentItem}>
      <div className="writer">
        <div className="user-img u1" onClick={onClickUser}></div>
      </div>
      <div className="desc">
        <div onClick={onClickUser}>
          <b>{v.user.name}</b>
          <span>@{v.user.id}</span>
          <span className="time">{dayjs(v.createAt).fromNow(true)}</span>
        </div>
        <p>{v.desc}</p>
        <div className={`img-wrap layout-${v.images.length}`}>
          {v.images.length >= 1
            ? v.images.map((val, i) => (
                <div
                  onClick={() => {
                    onClickPhoto(val.id);
                  }}
                  className={`img-post img-post-${i}`}
                  style={{
                    backgroundImage: `url('${val.path}')`,
                  }}></div>
              ))
            : ""}
        </div>
        <ActionButton />
      </div>
    </li>
  );
}
