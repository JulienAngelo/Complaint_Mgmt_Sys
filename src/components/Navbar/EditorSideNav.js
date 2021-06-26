import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export class EditorSideNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="sidenav" >
                    <a href="/admin" ><i className="fa fa-dashboard"></i>&nbsp; Dashboard</a>
                    <a href="/roles"><i className="fa fa-th-list"></i>&nbsp; Conference</a>
                    <a href="/roles"><i className="fa fa-gift"></i>&nbsp; Conference Details</a>
                    <a href="/roles"><i className="fa fa-list-alt"></i>&nbsp; Tracks</a>
                    <a href="/roles"><i className="fa fa-list-ol"></i>&nbsp; Keynote Speakers</a>
                </div>
            </div>
        );
    }
}
export default EditorSideNav;