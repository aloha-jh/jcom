"use client";
import { useState } from "react";

type Props = {
  params: { q: string; tab: string };
};
export default function SearchFilter({ params }: Props) {
  const [selectedOption, setSelectedOption] = useState(0);
  console.log("filter");
  console.log(params);
  const handleOptionChange = (option: number) => {
    setSelectedOption(option);
    // params.q params.tab
    const sltedFilter = option === 0 ? "all" : "follows";

    // let location = `/search?q${params.q}&tab=${params.tab}&filter=${sltedFilter}`;
    // console.log(location);
  };

  return (
    <div className="search-filter">
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 0}
          onChange={() => handleOptionChange(0)}
        />
        모든 사용자
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 1}
          onChange={() => handleOptionChange(1)}
        />
        내가 팔로우하는 사용자
      </label>
    </div>
  );
}
