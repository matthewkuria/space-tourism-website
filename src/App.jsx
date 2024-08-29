import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";

export default function App() {
  return (
      <main className="HOME relative">
      <NavBar />
      <Outlet />
    </main>
  )
}
