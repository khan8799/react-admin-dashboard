import { Link } from "react-router-dom"
import {sideMenus} from './sideMenus'

function Sidebar() {
    const menus = sideMenus;

    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    {
                        menus.map((sideMenu, index) => {
                            return (
                                <li className="nav-item" key={index + 1}>
                                    <Link className="nav-link" to={sideMenu.path}>
                                        <span className="menu-title">{sideMenu.name}</span>
                                        <i className={`mdi menu-icon ${sideMenu.iconClass}`}></i>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Sidebar