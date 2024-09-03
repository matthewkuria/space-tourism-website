import logo from "../assets/shared/logo.svg"
import closebtn from "../assets/shared/icon-hamburger.svg"
import { useState } from "react"
import NavLinks from "./NavLinks"
import HamburgerMenu from "./HamburgerMenu"
const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const toggleHamburger =() => {
        setHamburgerOpen(!hamburgerOpen)
    }
    return (
        <nav className=" relative  h-20 flex  justify-between mt-10 items-center p-5 md:p-0 text-white">
            <div className="nav-logo md:pl-10 p-5">
                <a href={`/`}>
                    <img src={logo} alt="nav-logo image"/>
                </a>
            </div>
            <div className=" absolute left-32 right-0  h-[0.5px] bg-white w-1/3"></div>
            <NavLinks />
            <div className="hamburger-icon flex md:hidden">
               <button onClick={toggleHamburger}><img src={closebtn} alt="close btn"/> </button>
            </div>
           {hamburgerOpen &&  <HamburgerMenu />}
        </nav>
    )
}
export default NavBar