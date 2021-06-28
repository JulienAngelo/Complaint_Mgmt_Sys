import React, {useState} from "react";
import ResearcherSideNav from "../Navbar/ResearcherSideNav";
import axios from "axios";

export default function AddResearch(props) {

    const [data, setData] = useState({
        conferenceDetailsId: "",
        name: "",
        description: "",
        publishedDate: "",
        documentURL: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post("https://icaf-backend.herokuapp.com/research/save", data).then((res) => {
            console.log(data);
            alert(res.data.messages);
            props.history.push("/researches");
        }).catch((err) => {
            if(err.response.data.name !== undefined) {
                alert(err.response.data.name);
            } else if(err.response.data.topic !== undefined) {
                alert(err.response.data.topic);
            } else if(err.response.data.documentURL !== undefined) {
                alert(err.response.data.documentURL);
            } else if(err.response.data.conferenceDetailsId !== undefined) {
                alert(err.response.data.conferenceDetailsId);
            } else if(err.response.data.publishedDate !== undefined) {
                alert(err.response.data.publishedDate);
            } else if(err.response.data.message !== undefined) {
                alert(err.response.data.message);
            } else {
                alert(err);
            }
        })
    }

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    return(
        <div className="main">
            <ResearcherSideNav />
            <div className="container mt-3" style={{
                marginLeft: '60px',
                backgroundColor: '#ccccff',
                boxShadow: '1px 2px 2px 2px rgba(0.3, 0.3, 0.3, 0.3)',
                borderRadius: '5px',
                height : '1000px'
            }}>
                <br/>
                <div className="card" style={{width : '70%', marginTop: 0, marginLeft : '15px', borderRadius: '5px'}}>
                    <div className="card-header" style={{backgroundColor: '#f2f2f2'}}>
                        <h4>Research</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => submit(e)}>
                            <div className="form-group row">
                                <label htmlFor="conferenceDetailsId" className="col-sm-3">Conference Details</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="conferenceDetailsId" placeholder="Enter Conference" value={data.conferenceDetailsId} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="name" className="col-sm-3">Name</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="name" placeholder="Enter Name" value={data.name} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-3">Description</label>
                                <div className="col-sm-5">
                                    <textarea onChange={(e) => handle(e)} className="form-control" id="description" cols="30" rows="6" placeholder="Enter Description" value={data.description} />
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="documentURL" className="col-sm-3">Document</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="documentURL" placeholder="Enter Document" value={data.documentURL} />
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="publishedDate" className="col-sm-3">Published Date</label>
                                <div className="col-sm-5">
                                    <input type="text" onChange={(e) => handle(e)} className="form-control" id="publishedDate" placeholder="Enter Published Date" value={data.publishedDate} required/>
                                </div>
                            </div><br/>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}