import Navbar from "@/components/navbar/navbar";
import Seachbar from "@/components/seachbar/seachbar";
import Logo from "@/components/logo/logo";
import styles from "./header.module.css"

export default function Header({ }) {
    return (
        <header className = {styles.flex}>
            <Logo url="/icon.png"/>
            <Navbar />
            <Seachbar />
        </header>
    )
}