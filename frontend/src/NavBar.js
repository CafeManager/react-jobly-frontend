import { NavLink, useHistory } from "react-router-dom";

function NavBar({ username, clearUserInfo, setCurrUser }) {
    const history = useHistory();
    function handleOnclick(e) {
        e.preventDefault();
        clearUserInfo();
        setCurrUser("");
        return history.push("/");
    }
    return (
        <>
            <ul className="nav">
                <li className="nav-item me-auto">
                    <NavLink className="nav-link" to="/">
                        Jobly
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/companies">
                        Companies
                    </NavLink>
                </li>

                {!username ? (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/user/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/user/register">
                                Register
                            </NavLink>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/jobs">
                                Jobs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to={`/user/${username}`}
                            >
                                Profile
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                onClick={handleOnclick}
                                to={`/user/logout`}
                            >
                                Log out
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </>
    );
}

export default NavBar;
