import { useState,useRef,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setIsOpen(false);
    setInputValue("")
  });

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen && inputValue.trim()) {
      console.log("Searching for:", inputValue);
    }
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      ref={ref}
      className="search-box relative w-fit h-fit"
    >
      <button
        className="btn-search absolute right-0 icon bg-transparent border-none font-bold text-white cursor-pointer rounded-full outline-none"
        onClick={toggleSearch}
      >
        <FontAwesomeIcon icon={faSearch} className="m-auto" />
      </button>
      <input
        type="text"
        className={`input-search icon transition-all duration-500 ease-in-out ${
          isOpen ? "open" : ""
        }`}
        placeholder=""
        value={inputValue}
        onChange={handleInput}
      />
    </div>
  );
}

function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}