//import { ciData, cData } from "@/app/(afterLogin)/_dummy/data";

export const msgData = [
  { me: false, txt: "안녕하세요", createAt: new Date() },
  { me: true, txt: "네 안녕하세요", createAt: new Date() },
  {
    me: false,
    txt: "날씨가 아주 좋네요. 테스트때문에 길게 문장을 입력해야 하니까 입력중",
    createAt: new Date(),
  },
  {
    me: true,
    txt: "날씨가 아주 좋네요. 테스트때문에 길게 문장을 입력해야 하니까 입력중",
    createAt: new Date(),
  },
];

export const user = {
  name: "지나",
  id: "@aloha2jh",
  path: "/images/pink.png",
};

export const flowData = [
  { name: "지나", id: "@aloha2jh", flow: false },
  { name: "라이언", id: "@lyan", flow: false },
  { name: "춘식", id: "@spring_seek", flow: false },
];

export const ciData = {
  user: { id: "spring_seek", name: "춘식", image: "./hi.png" },
  desc: "고구마 백개",
  createAt: new Date(),
  postId: 123,
  images: [{ id: 1, path: "1.png" }],
};

export const cData = {
  user: { id: "spring_seek", name: "춘식", image: "./hi.png" },
  desc: "고구마 백개",
  createAt: new Date(),
  postId: 123,
  images: [{ id: 1, path: "1.png" }],
};

// /home의 탭(2) 데이터 / 탐색하기>클릭> 링크탭(3) 데이터
export const dataRec = [
  {
    user: { id: "spring_seek", name: "춘식", image: "./hi.png" },
    desc: "노래 듣는게 좋아 행보쿠",
    createAt: new Date(),
    postId: 123,
    images: [
      { id: 1, path: "/images/1.png" },
      { id: 1, path: "/images/3.png" },
    ],
  },
  {
    user: { id: "spring_seek", name: "춘식", image: "./hi.png" },
    desc: "여기 딸기케이크 100조각만 주세요~",
    createAt: "2024-05-02",
    postId: 123,
    images: [
      { id: 1, path: "/images/2.png" },
      { id: 1, path: "/images/2.png" },
      { id: 1, path: "/images/2.png" },
      { id: 1, path: "/images/2.png" },
    ],
  },
  {
    user: { id: "chun_seek", name: "춘식잉", image: "./hi.png" },
    desc: "여름엔 water melon",
    createAt: "2024-05-02",
    postId: 123,
    images: [
      { id: 1, path: "/images/3.png" },
      { id: 1, path: "/images/3.png" },
      { id: 1, path: "/images/3.png" },
    ],
  },
];

export const dataFol = [
  {
    user: { id: "sea", name: "바다", image: "./hi.png" },
    desc: "산호초는 사라져가고 있나요",
    createAt: "2024-05-02",
    postId: 123,
    images: [{ id: 1, path: "/images/sh3.png" }],
  },
  {
    user: { id: "sea", name: "sea", image: "./hi.png" },
    desc: "산호초2",
    createAt: "2024-05-02",
    postId: 123,
    images: [{ id: 1, path: "/images/sh1.png" }],
  },
  {
    user: { id: "underTheSea", name: "바다", image: "./hi.png" },
    desc: "산호초",
    createAt: "2024-05-02",
    postId: 123,
    images: [{ id: 1, path: "/images/sh2.png" }],
  },
  {
    user: { id: "ocean", name: "ocean", image: "./hi.png" },
    desc: "산호초",
    createAt: "2024-05-02",
    postId: 123,
    images: [{ id: 1, path: "/images/sh4.png" }],
  },
];

export const trand = [
  {
    user: { id: "spring_seek", name: "춘식", image: "./hi.png" },
    desc: "고구마 백개",
    createAt: new Date(),
    postId: 123,
    images: [{ id: 1, path: "images/live2.png" }],
  },
  {
    user: { id: "spring_seek", name: "춘식", image: "./hi.png" },
    desc: "뭘봐",
    createAt: "2024-05-02",
    postId: 123,
    images: [{ id: 1, path: "images/live1.png" }],
  },
  {
    user: { id: "chun_seek", name: "춘식잉", image: "./hi.png" },
    desc: "귀여운 방해꾼",
    createAt: "2024-05-02",
    postId: 123,
    images: [{ id: 1, path: "images/live3.png" }],
  },
];
