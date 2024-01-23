import { IoMdSearch } from "react-icons/io";

const SearchInput = ({width}) => {
  return (
    <div className="flex items-center justify-around py-3 px-5 bg-white rounded-lg border border-navbar-search-placeholder">
      <IoMdSearch className="w-7 h-7" />
      <input
        className={`h-8 w-${width} mx-4 placeholder:navbar-search-placeholder placeholder:font-normal`}
        type="text"
        placeholder="Buscar Por Ciudad, Cargo, Empresa O Profesión"
      />
      <button className="h-10 rounded-lg text-xl font-normal bg-main-purple text-white m-auto align-middle px-6">
        Buscar
      </button>
    </div>
  );
};

export default SearchInput;
