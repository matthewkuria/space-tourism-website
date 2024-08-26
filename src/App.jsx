import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";

export default function App() {
  return (
    <main className="HOME h-full relative">
      <NavBar />
      {/* <Hero /> */}
      <Outlet />
    </main>
  )
}