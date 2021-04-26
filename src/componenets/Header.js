import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <NavLink className="navbar-brand" to="/">Logo</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/users">Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/todos">Todos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/posts">Posts</NavLink>
                    </li>
                </ul>
        </nav>
    );
}

export default Header;


