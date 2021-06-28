import React, {useState, useEffect} from "react";
import axios from "axios";
import WorkshopConductorSideNav from "../Navbar/WorkshopConductorSideNav";

export default function WorkshopConductorDashboard(props) {

    const [data, setData] = useState({
        totalRoles: ""
    })

    useEffect(() => {
        getDashboard();
    }, [])

    function getDashboard() {
        axios.get("https://icaf-backend.herokuapp.com/dashboard/admin").then((res) => {
            setData(res.data);
        }).catch((err) => {
            alert(err);
        })
    }

    return(
        <div className="main">
            <WorkshopConductorSideNav/>
            <div className="container mt-3" style={{marginLeft:"50px"}}>
                <header className="jumbotron">
                    <h3>Workshop Conductor Dashboard</h3><br/>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card-counter conf">
                                <i className="fa fa-code"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Approved<br/>Workshops</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter blacks">
                                <i className="fa fa-window-close"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Rejected<br/>Workshops</span>
                            </div>
                        </div>
                    </div><br/>
                </header>
            </div>
        </div>
    )
}