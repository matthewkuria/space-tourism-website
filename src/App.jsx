import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";

const theme = createMuiTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="HOME relative">
      <NavBar />
      <Outlet />
    </main>
    </ThemeProvider>
  )
}
