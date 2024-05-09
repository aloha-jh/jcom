import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type Props = {
  params: { q: string };
};
export default function SearchForm({ params }: Props) {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input placeholder={params ? params.q : ""} />
    </div>
  );
}
