import {Link} from "react-router-dom";
import React from "react";

export default function Header() {
    return(
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand" >ICAF</Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/admin"} className="nav-link" ><i className="fa fa-user-secret"></i>&nbsp; Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/editor"} className="nav-link" ><i className="fa fa-user-circle-o"></i>&nbsp; Editor</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/reviewer"} className="nav-link" ><i className="fa fa-user-circle-o"></i>&nbsp; Reviewer</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/researcher"} className="nav-link" ><i className="fa fa-user-circle-o"></i>&nbsp; Researcher</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </div>
            </nav>
        </div>
    )
}