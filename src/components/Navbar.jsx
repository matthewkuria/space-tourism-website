import logo from "../assets/shared/logo.svg"
import closebtn from "../assets/shared/icon-hamburger.svg"
const NavBar = () => {
    return (
        <nav className=" relative  h-20 flex  justify-between mt-10 items-center p-5 md:p-0 text-white">
            <div className="nav-logo md:pl-10 p-5">
                <img src={logo} alt="nav-logo image"/>
            </div>
            <div className=" absolute left-20 right-0  h-[0.5px] bg-white w-1/3"></div>
            <div className="nav-items bg-transparent backdrop-blur-md w-2/3 px-10">
                <ol className=" hidden md:flex lg:flex justify-around items-center uppercase list-decimal h-20 pr-10">
                <li className="hover:border-b-2 py-7 px-4"><a href="">home</a></li>
                <li className="hover:border-b-2 py-7 px-4"><a href="">destination</a></li>
                <li className="hover:border-b-2 py-7 px-4"><a href="">crew</a></li>
                <li className="hover:border-b-2 py-7 px-4"><a href="">technology</a></li>
            </ol>
            </div>
            <div className="hamburger-icon flex md:hidden">
                <img src={closebtn} alt="" />
            </div>
        </nav>
    )
}
export default NavBar