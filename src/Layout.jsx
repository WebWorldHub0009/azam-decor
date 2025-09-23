import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function Layout() {
  return (
    <>
      
      <Header/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
