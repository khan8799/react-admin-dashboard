import Header from './shared/components/Header/Header'
import Sidebar from './shared/components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import Footer from './shared/components/Footer/Footer'

function Layout() {
  return (
    <>
      <Header />

      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        
        <div className="main-panel">
            <div className="content-wrapper">
				      <Outlet />
            </div>

            <Footer />
        </div>

      </div>
    </>
  );
}

export default Layout;
