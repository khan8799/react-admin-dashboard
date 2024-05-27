import { Link} from "react-router-dom"

function Sidebar(params) {
    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                    <a href="#" className="nav-link">
                        <div className="nav-profile-image">
                        <img src="assets/images/faces/face1.jpg" alt="profile" />
                        <span className="login-status online"></span>
                        </div>
                        <div className="nav-profile-text d-flex flex-column">
                        <span className="font-weight-bold mb-2">David Grey. H</span>
                        <span className="text-secondary text-small">Project Manager</span>
                        </div>
                        <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                    </a>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <span className="menu-title">Dashboard</span>
                        <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Category" className="nav-link">
                        <span className="menu-title">Category</span>
                        <i className="menu-arrow"></i>
                        <i className="mdi mdi-crosshairs-gps menu-icon"></i>
                        </Link>
                        
                    {/* <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                        </ul>
                    </div> */}
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="pages/icons/mdi.html">
                        <span className="menu-title">Products</span>
                        <i className="mdi mdi-contacts menu-icon"></i>
                    </a>
                    </li>

                </ul>
                </nav>
        </>
    )
}

export default Sidebar