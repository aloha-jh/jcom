import Search from "@/app/(afterLogin)/_components/Search";
import BackButton from "../_components/BackButton";

import LinkTab from "@/app/(afterLogin)/_components/LinkTab";

type Props = {
  searchParams: {
    q: string;
    tab: string;

    //filter?:string;
  };
};
export default function Home({ searchParams }: Props) {
  return (
    <div className="search-page-wrap">
      <div className="search-wrap">
        <BackButton />
        <Search params={searchParams} />
      </div>
      <LinkTab params={searchParams} />
    </div>
  );
}
