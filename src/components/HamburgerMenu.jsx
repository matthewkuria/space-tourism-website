export default function HamburgerMenu() {
    return (
        <div className="nav-items bg-slate-900 w-2/3 absolute top-20 left-0 right-0 z-50">
            <ul className="  uppercase  h-20 pr-10">
                <li className=" border-b-2 hover:border-b-2 py-7 px-4"><a href={`/`}><span className=" font-bold px-2">01</span>home</a></li>
                <li className="hover:border-b-2 py-7 px-4"><a href={`/destination`}><span className=" font-bold px-2">02</span>destination</a></li>
                <li className="hover:border-b-2 py-7 px-4"><a href={`/crew`}><span className=" font-bold px-2">03</span>crew</a></li>
                <li className="hover:border-b-2 py-7 px-4"><a href={`/technology`}><span className=" font-bold px-2">04</span>technology</a></li>
            </ul>
        </div>
    )
}