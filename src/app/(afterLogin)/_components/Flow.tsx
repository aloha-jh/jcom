"use client";
import { useState } from "react";
import { flowData } from "@/app/(afterLogin)/_dummy/data";
export default function Flow() {
  const [data, setData] = useState(flowData);
  return (
    <ul className="flow">
      <h3>팔로우 추천</h3>
      {data.map((v, i) => (
        <li key={i}>
          <div className="user-img"></div>
          <p>
            <b>{v.name}</b>
            <span>{v.id}</span>
          </p>
          <button className={!v.flow ? "" : "grey"}>팔로우</button>
        </li>
      ))}
    </ul>
  );
}
