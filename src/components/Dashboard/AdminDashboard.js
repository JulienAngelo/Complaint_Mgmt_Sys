import React, {useState, useEffect} from "react";
import axios from "axios";
import AdminSideNav from "../Navbar/AdminSideNav";

export default function AdminDashboard(props) {

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
            <AdminSideNav/>
            <div className="container mt-3" style={{marginLeft:"50px"}}>
                <header className="jumbotron">
                    <h3>Admin Dashboard</h3><br/>
                    <div className="row ">
                        <div className="col-md-3">
                            <div className="card-counter items">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Items</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter categories">
                                <i className="fa fa-th-list"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Categories</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter brands">
                                <i className="fa fa-gift"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Brands</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter sellers">
                                <i className="fa fa-user-secret"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Sellers</span>
                            </div>
                        </div>
                    </div><br/>
                    <div className="row ">
                        <div className="col-md-3">
                            <div className="card-counter buyers">
                                <i className="fa fa-users"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Buyers</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter orders">
                                <i className="fa fa-money"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Orders</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter deliveries">
                                <i className="fa fa-truck"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Deliveries</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter complains">
                                <i className="fa fa-frown-o"></i>
                                <span className="count-numbers"><h1>{data.totalRoles}</h1></span>
                                <span className="count-name">Complains</span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}