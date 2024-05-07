import Link from "next/link";
import { useState, useEffect } from "react";
import SearchBar from "./searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; // ハンバーガーメニューのアイコン

export default function NavList() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="absolute md:hidden right-4">
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="icon" />
      </button>
      <div
        className={
          isOpen
            ? "flex flex-col md:flex-row md:items-center md:justify-between"
            : "hidden"
        }
      >
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
        <div className="visible md:invisible">
          <SearchBar />
        </div>
      </div>
    </>
  );
}