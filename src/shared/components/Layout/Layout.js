import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout;