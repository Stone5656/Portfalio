import Navlink from "../navlink/navlink"

export default function Navbar({  }){
    return(
        <ul>
            <Navlink url="/">Top</Navlink>
            <Navlink url="/about">About</Navlink>
            <Navlink url="/blog/">Blog</Navlink>
        </ul>
    )
}