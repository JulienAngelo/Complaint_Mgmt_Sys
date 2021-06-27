import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class WorkshopConductorSideNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="sidenav" >
                    <a href="/workshop-conductor" ><i className="fa fa-dashboard"></i>&nbsp; Dashboard</a>
                    <a href="/roles"><i className="fa fa-th-list"></i>&nbsp; Workshops</a>
                    <a href="/roles"><i className="fa fa-gift"></i>&nbsp; Notifications</a>
                </div>
            </div>
        );
    }
}