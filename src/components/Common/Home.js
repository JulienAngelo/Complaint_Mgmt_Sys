import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

export default function Home(props) {

    const [data, setData] = useState({
        id: "",
        name: "",
        year: "",
        description: "",
        venue:""
    })

    useEffect(() => {
        getRole();
    }, [])

    function getRole() {
        axios.get("https://icaf-backend.herokuapp.com/conference/1").then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((err) => {
            alert(err);
        })
    }

    return(
        <div>
            <Header/>
            <div className="card py-5 border-0 px-0 mx-0 home-image">
                <div className="card-body text-center">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <h1 className="home-h1">{data.name + " " + data.year}</h1>
                            <small className="home-h1">{data.description}</small>
                            <div className="row justify-content-center">
                                <div className="col-10"><br/>
                                    <h4 className="home-h1"> <b>Venue</b></h4>
                                    <small className="home-h1">{data.venue}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}