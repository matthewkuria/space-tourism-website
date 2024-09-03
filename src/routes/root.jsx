import Hero from "./components/Hero";
import NavBar from "./components/Navbar";

export default function Root() {
  return (
    <main className="HOME h-full relative">
      <NavBar />     
      <div className="detail"></div>
    </main>
  )
}