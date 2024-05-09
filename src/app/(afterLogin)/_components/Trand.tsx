"use client";
import { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const trandData = [
  { group: "실시간 트렌드", title: "춘식이 고양이설", posted: "1,264" },
  { group: "실시간 트렌드", title: "춘식이 고구마", posted: "823" },
  { group: "실시간 트렌드", title: "춘식이 꼬리 말린이유", posted: "3,264" },
];

export default function Trand() {
  const [data, setData] = useState(trandData);
  const segment = useSelectedLayoutSegment();
  if (segment == "explore") return null;
  return (
    <ul className="trand">
      <h3>나를위한 트렌드</h3>
      {data.map((v, i) => (
        <li key={i}>
          <Link href={`/search?q=${v.title}&tab=trand`}>
            <span>{v.group}</span>
            <b>{v.title}</b>
            <span>{v.posted} posted</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
