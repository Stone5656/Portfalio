import Logo from "./logo";
import  NavList  from "./navlist";
import  SearchBar  from "./searchbar";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-2 px-4 flex justify-between items-center">
      <Logo />
      <NavList />
      <div className="invisible md:visible">
        <SearchBar />
      </div>
    </header>
  );
}