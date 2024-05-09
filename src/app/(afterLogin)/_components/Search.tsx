"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import SearchFilter from "@/app/(afterLogin)/_components/SearchFilter";
import SearchForm from "@/app/(afterLogin)/_components/SearchForm";
/*


router 값 받아와서, search 면 검색필터로 보이게 하기

*/

type Props = {
  params: {
    q?: string;
    tab?: string;
  };
};
export default function Search({ params }: Props) {
  const segment = useSelectedLayoutSegment();
  // console.log(params);
  if (segment == "explore") {
    //explore일때 제외
    return null;
  } else if (segment == "search") {
    //search페이지에서는 검색필터
    return (
      <div className="search-filter-wrap">
        <h3>검색 필터</h3>
        <SearchFilter params={params} />
      </div>
    );
  } else {
    return <SearchForm params={params} />;
  }
}
