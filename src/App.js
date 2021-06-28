import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/dashboard-styles.css";
import "./styles/footer-styles.css";
import "./styles/common-styles.css"

//import AuthService from "./services/auth.service";
//import Login from "./components/login.component";
//import Register from "./components/register.component";
//import Home from "./components/home.component";
//import Profile from "./components/profile.component";
import Home from "./components/Common/Home";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EditorDashboard from "./components/Dashboard/EditorDashboard";
import ReviewerDashboard from "./components/Dashboard/ReviewerDashboard";
import ResearcherDashboard from "./components/Dashboard/ResearcherDashboard";
import WorkshopConductorDashboard from "./components/Dashboard/WorkshopConductorDashboard";
import RoleList from "./components/Roles/RoleList";
import AddRole from "./components/Roles/AddRole";
import ViewRole from "./components/Roles/ViewRole";
import ConferenceListAdmin from "./components/Conference/ConferenceListAdmin";
import AddConference from "./components/Conference/AddConference";
import ViewConferenceAdmin from "./components/Conference/ViewConferenceAdmin";
import TrackList from "./components/ConferenceTracks/TrackList";
import AddTrack from "./components/ConferenceTracks/AddTrack";
import ViewTrack from "./components/ConferenceTracks/ViewTrack";
import TrackListAdmin from "./components/ConferenceTracks/TrackListAdmin";
import ApproveRejectTrack from "./components/ConferenceTracks/ApproveRejectTrack";
import NotificationBoxEditor from "./components/Notifications/NotificationBoxEditor";
import ViewNotificationEditor from "./components/Notifications/ViewNotificationEditor";
import NotificationBoxResearcher from "./components/Notifications/NotificationBoxResearcher";
import ViewNotificationResearcher from "./components/Notifications/ViewNotificationResearcher";
import NotificationBoxWorkshopConductor from "./components/Notifications/NotificationBoxWorkshopConductor";
import ViewNotificationWorkshopConductor from "./components/Notifications/ViewNotificationWorkshopConductor";
import ConferenceList from "./components/Conference/ConferenceList";
import ViewConference from "./components/Conference/ViewConference";
import KeyNoteSpeakerList from "./components/KeynoteSpeakers/KeyNoteSpeakerList";
import AddKeyNoteSpeaker from "./components/KeynoteSpeakers/AddKeyNoteSpeaker";
import ViewKeyNoteSpeaker from "./components/KeynoteSpeakers/ViewKeyNoteSpeaker";
import KeyNoteSpeakerListAdmin from "./components/KeynoteSpeakers/KeyNoteSpeakerListAdmin";
import ApproveRejectKeyNoteSpeaker from "./components/KeynoteSpeakers/ApproveRejectKeyNoteSpeaker";
import ResearchListReviewer from "./components/Research/ResearchListReviewer";
import ApproveRejectResearch from "./components/Research/ApproveRejectResearch";
import WorkshopList from "./components/Workshops/WorkshopList";
import AddWorkshop from "./components/Workshops/AddWorkshop";
import ViewWorkshop from "./components/Workshops/ViewWorkshop";
import WorkshopListReviewer from "./components/Workshops/WorkshopListReviewer";
import ApproveRejectWorkshop from "./components/Workshops/ApproveRejectWorkshop";

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


              <li className="nav-item">
                <Link to={"/reviewer"} className="nav-link" ><i className="fa fa-user-circle-o"></i>&nbsp; Reviewer</Link>
              </li>


              <li className="nav-item">
                <Link to={"/researcher"} className="nav-link" ><i className="fa fa-user-circle-o"></i>&nbsp; Researcher</Link>
              </li>

              <li className="nav-item">
                <Link to={"/workshop-conductor"} className="nav-link" ><i className="fa fa-user-circle-o"></i>&nbsp; Workshop Conductor</Link>
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


        <div>
            <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/editor" component={EditorDashboard} />
                <Route path="/reviewer" component={ReviewerDashboard} />
                <Route path="/researcher" component={ResearcherDashboard} />
                <Route path="/workshop-conductor" component={WorkshopConductorDashboard} />
                <Route path="/roles" component={RoleList} />
                <Route path="/role/add" component={AddRole} />
                <Route path="/role/:id" component={ViewRole} />
                <Route path="/conferences-admin" component={ConferenceListAdmin} />
                <Route path="/conference/add" component={AddConference} />
                <Route path="/conference-admin/:id" component={ViewConferenceAdmin} />
                <Route path="/tracks" component={TrackList} />
                <Route path="/track/add" component={AddTrack} />
                <Route path="/track/:id" component={ViewTrack} />
                <Route path="/tracks-admin" component={TrackListAdmin} />
                <Route path="/track-admin/:id" component={ApproveRejectTrack} />
                <Route path="/notifications-editor" component={NotificationBoxEditor} />
                <Route path="/notification-editor/:id" component={ViewNotificationEditor} />
                <Route path="/notifications-researcher" component={NotificationBoxResearcher} />
                <Route path="/notification-researcher/:id" component={ViewNotificationResearcher} />
                <Route path="/notifications-workshop-conductor" component={NotificationBoxWorkshopConductor} />
                <Route path="/notification-workshop-conductor/:id" component={ViewNotificationWorkshopConductor} />
                <Route path="/conferences" component={ConferenceList} />
                <Route path="/conference/:id" component={ViewConference} />
                <Route path="/keynote-speakers" component={KeyNoteSpeakerList} />
                <Route path="/keynote-speaker/add" component={AddKeyNoteSpeaker} />
                <Route path="/keynote-speaker/:id" component={ViewKeyNoteSpeaker} />
                <Route path="/keynote-speakers-admin" component={KeyNoteSpeakerListAdmin} />
                <Route path="/keynote-speaker-admin/:id" component={ApproveRejectKeyNoteSpeaker} />
                <Route path="/researches-reviewer" component={ResearchListReviewer} />
                <Route path="/research-reviewer/:id" component={ApproveRejectResearch} />
                <Route path="/workshops" component={WorkshopList} />
                <Route path="/workshop/add" component={AddWorkshop} />
                <Route path="/workshop/:id" component={ViewWorkshop} />
                <Route path="/workshops-reviewer" component={WorkshopListReviewer} />
                <Route path="/workshop-reviewer/:id" component={ApproveRejectWorkshop} />
            </Switch>
        </div>

      </div>
    );
  }
}

export default App;
