import Navlink from "@/components/navlink/navlink";
import styles from "./navbar.module.css"

export default function Navbar({  }){
    return (
      <ul className={styles.flexContainer}>
        <Navlink url="/" text="Top"></Navlink>
        <Navlink url="/about" text="About"></Navlink>
        <Navlink url="/blog/" text="Blog"></Navlink>
      </ul>
    );
}