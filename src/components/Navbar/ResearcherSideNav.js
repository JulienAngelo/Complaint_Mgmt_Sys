import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class ResearcherSideNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="sidenav" >
                    <a href="/researcher" ><i className="fa fa-dashboard"></i>&nbsp; Dashboard</a>
                    <a href="/roles"><i className="fa fa-th-list"></i>&nbsp; Research</a>
                    <a href="/notifications-researcher"><i className="fa fa-gift"></i>&nbsp; Notifications</a>
                </div>
            </div>
        );
    }
}