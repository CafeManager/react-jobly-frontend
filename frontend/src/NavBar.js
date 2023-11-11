import { NavLink, Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/companies">
                        Companies
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/jobs">
                        Jobs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/user">
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">
                        Logout
                    </a>
                </li>
            </ul>
        </>
    );
}

export default NavBar;
