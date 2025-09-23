import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopHead from "./components/TopHead";

function Layout() {
  return (
    <>
      <TopHead />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
