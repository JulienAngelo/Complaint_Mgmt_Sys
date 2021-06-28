import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export class AdminSideNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="sidenav" >
                    <a href="/admin" ><i className="fa fa-dashboard"></i>&nbsp; Dashboard</a>
                    <a href="/conferences-admin"><i className="fa fa-globe"></i>&nbsp; Conference</a>
                    <a href="/conference-details-admin"><i className="fa fa-th-list"></i>&nbsp; Conference Details</a>
                    <a href="/tracks-admin"><i className="fa fa-object-group"></i>&nbsp; Tracks</a>
                    <a href="/keynote-speakers-admin"><i className="fa fa-handshake-o"></i>&nbsp; Keynote Speakers</a>
                    <a href="/researches-admin"><i className="fa fa-file-text-o"></i>&nbsp; Researches</a>
                    <a href="/workshops-admin"><i className="fa fa-code"></i>&nbsp; Workshops</a>
                    <a href="/roles"><i className="fa fa-users"></i>&nbsp; Users</a>
                    <a href="/roles"><i className="fa fa-sliders"></i>&nbsp; Roles</a>
                </div>
            </div>
        );
    }
}
export default AdminSideNav;