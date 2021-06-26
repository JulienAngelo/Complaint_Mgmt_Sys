import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./dashboard.-styles.css";

//import AuthService from "./services/auth.service";
//import Login from "./components/login.component";
//import Register from "./components/register.component";
//import Home from "./components/home.component";
//import Profile from "./components/profile.component";
import EditorDashboard from "./components/Dashboard/EditorDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

import RoleList from "./components/Roles/RoleList";
import AddRole from "./components/Roles/AddRole";
import ViewRole from "./components/Roles/ViewRole";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    /*const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }*/
  }

  logOut() {
    //AuthService.logout();
  }

  render() {
    //const { currentUser, showAdminBoard } = this.state;

    return (
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

          </div>


            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={ "/profile" } className="nav-link"><i className="fa fa-user"></i>&nbsp; MKW</Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>LogOut</a>
              </li>
            </div>

            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">Login</Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">Sign Up</Link>
              </li>
            </div>

        </nav>


        <div className="main">
          <div className="container mt-3" style={{marginLeft:"30px"}}>
            <Switch>
              <Route path="/editor" component={EditorDashboard} />
              <Route exact path={["/", "/admin"]} component={AdminDashboard} />

              <Route path="/roles" component={RoleList} />
              <Route path="/role/add" component={AddRole} />
              <Route path="/role/:id" component={ViewRole} />

            </Switch>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
