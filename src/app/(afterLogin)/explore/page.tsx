import Search from "@/app/(afterLogin)/_components/Search";
import Trand from "@/app/(afterLogin)/_components/Trand";
/*

검색창이랑 나를위한 트렌드.
*/

export default function Home() {
  return (
    <div className="explore-wrap">
      <div className="search-wrap">
        <Search />
      </div>
      <Trand />
    </div>
  );
}
