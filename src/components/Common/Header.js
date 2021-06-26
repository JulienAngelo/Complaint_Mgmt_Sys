import {Link} from "react-router-dom";

export default function Header() {
    return(
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand" >ICAF</Link>
                <div className="navbar-nav mr-auto">
                    {
                        <li className="nav-item">
                            <Link to={"/admin"} className="nav-link" ><i className="fa fa-user-secret"></i>&nbsp; Seller</Link>
                        </li>
                    }

                    {
                        <li className="nav-item">
                            <Link to={"/user"} className="nav-link" ><i className="fa fa-user-circle-o"></i>&nbsp; Buyer</Link>
                        </li>
                    }
                </div>

                {
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">Sign Up</Link>
                        </li>
                    </div>
                }
            </nav>
        </div>
    )
}