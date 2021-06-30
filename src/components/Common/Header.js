import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-center">
                <div className="navbar-nav">
                    <li className="nav-item nav-item-pad">
                        <Link to={"/"} className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item nav-item-pad">
                        <Link to={"/editor"} className="nav-link" >Keynotes</Link>
                    </li>
                    <li className="nav-item nav-item-pad">
                        <Link to={"/reviewer"} className="nav-link" >Researches</Link>
                    </li>
                    <li className="nav-item nav-item-pad">
                        <Link to={"/reviewer"} className="nav-link" >Workshops</Link>
                    </li>
                    <li className="nav-item dropdown nav-item-pad">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Registrations
                        </a>
                        <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <div className="dropdown-divider"></div>
                            <Link to={"/register/ROLE_ATTENDEE"} className="dropdown-item d-item" >Conference</Link>
                            <div className="dropdown-divider"></div>
                            <Link to={"/register/ROLE_RESEARCHER"} className="dropdown-item d-item" >Research</Link>
                            <div className="dropdown-divider"></div>
                            <Link to={"/register/ROLE_WORKSHOP_CONDUCTOR"} className="dropdown-item d-item" >Workshop</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown nav-item-pad">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Past Proceedings
                        </a>
                        <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <div className="dropdown-divider"></div>
                            <Link to={"/researcher"} className="dropdown-item d-item" >2020</Link>
                            <div className="dropdown-divider"></div>
                            <Link to={"/researcher"} className="dropdown-item d-item" >2021</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown nav-item-pad">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Downloads
                        </a>
                        <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <div className="dropdown-divider"></div>
                            <Link to={"/researcher"} className="dropdown-item d-item" >Research Paper Templates</Link>
                            <div className="dropdown-divider"></div>
                            <Link to={"/researcher"} className="dropdown-item d-item" >Workshop Presentation Templates</Link>
                        </div>
                    </li>
                    <li className="nav-item nav-item-pad">
                        <Link to={"/reviewer"} className="nav-link" >Contacts</Link>
                    </li>
                </div>
            </nav>
        </div>
    )
}