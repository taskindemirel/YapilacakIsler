import "./SearchItem.css";
import { CgSearch } from "react-icons/cg";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <CgSearch className="searchIcon" />
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Aramak için bir kelime girin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
