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
                    <a href="/conferences-admin"><i className="fa fa-th-list"></i>&nbsp; Conference</a>
                    <a href="/roles"><i className="fa fa-gift"></i>&nbsp; Conference Details</a>
                    <a href="/tracks-admin"><i className="fa fa-list-alt"></i>&nbsp; Tracks</a>
                    <a href="/keynote-speakers-admin"><i className="fa fa-list-ol"></i>&nbsp; Keynote Speakers</a>
                    <a href="/roles"><i className="fa fa-shopping-cart"></i>&nbsp; Research</a>
                    <a href="/roles"><i className="fa fa-cc-visa"></i>&nbsp; Workshops</a>
                    <a href="/roles"><i className="fa fa-commenting-o"></i>&nbsp; Users</a>
                    <a href="/roles"><i className="fa fa-users"></i>&nbsp; Roles</a>
                </div>
            </div>
        );
    }
}
export default AdminSideNav;