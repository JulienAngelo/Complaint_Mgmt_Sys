import React, {useState, useEffect} from "react";
import axios from "axios";
import ReviewerSideNav from "../Navbar/ReviewerSideNav";

export default function ReviewerDashboard(props) {

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
            <ReviewerSideNav/>
            <div className="container mt-3" style={{marginLeft:"50px"}}>
                <header className="jumbotron">
                    <h3>Reviewer Dashboard</h3><br/>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card-counter orders">
                                <i className="fa fa-file-text-o"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Approved<br/>Researches</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter reds">
                                <i className="fa fa-window-close-o"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Rejected<br/>Researches</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter tracks">
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