import React, {useState, useEffect} from "react";
import axios from "axios";
import AdminSideNav from "../Navbar/AdminSideNav";

export default function ViewWorkshopAdmin(props) {

    const [data, setData] = useState({
        id: "",
        conferenceDetailsId: "",
        name: "",
        topic: "",
        description: "",
        documentURL: "",
        status: "",
        remarks: "",
        createdUser: "",
        createdDate: "",
        approvedUser: "",
        approvedDate: "",
        rejectedUser: "",
        rejectedDate: ""
    });

    useEffect(() => {
        getWorkshop();
    }, [])

    function getWorkshop() {
        const workshopId = props.match.params.id;
        axios.get("https://icaf-backend.herokuapp.com/workshops/" + workshopId).then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((err) => {
            alert(err);
        })
    }

    function submit(e) {
        e.preventDefault();
        props.history.push("/workshops-admin");
    }

    return(
        <div className="main">
            <AdminSideNav />
            <div className="container mt-3" style={{
                marginLeft: '60px',
                backgroundColor: '#ccccff',
                boxShadow: '1px 2px 2px 2px rgba(0.3, 0.3, 0.3, 0.3)',
                borderRadius: '5px',
                height : '1800px'
            }}>
                <br/>
                <div className="card" style={{width : '75%', marginTop: 0, marginLeft : '15px', borderRadius: '5px'}}>
                    <div className="card-header" style={{backgroundColor: '#f2f2f2'}}>
                        <h4>Workshop</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => submit(e)}>
                            <div className="form-group row">
                                <label htmlFor="id" className="col-sm-3">Id</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="id" value={data.id} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="conferenceDetailsId" className="col-sm-3">Conference Details Id</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="conferenceDetailsId" value={data.conferenceDetailsId} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="topic" className="col-sm-3">Topic</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="topic" value={data.topic} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="name" className="col-sm-3">Name</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="name" value={data.name} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-3">Description</label>
                                <div className="col-sm-5">
                                    <textarea type="text" className="form-control" id="description" cols="30" rows="6" value={data.description} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="documentURL" className="col-sm-3">Document</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="documentURL" value={data.documentURL} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="status" className="col-sm-3">Status</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="status" value={data.status} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="createdUser" className="col-sm-3">Created By</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="createdUser" value={data.createdUser} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="createdDate" className="col-sm-3">Created Date</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="createdDate" value={data.createdDate} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="approvedUser" className="col-sm-3">Approved By</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="approvedUser" value={data.approvedUser} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="approvedDate" className="col-sm-3">Approved Date</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="approvedDate" value={data.approvedDate} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="rejectedUser" className="col-sm-3">Rejected By</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="rejectedUser" value={data.rejectedUser} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="rejectedDate" className="col-sm-3">Rejected Date</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="rejectedDate" value={data.rejectedDate} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="remarks" className="col-sm-3">Remarks</label>
                                <div className="col-sm-5">
                                    <textarea type="text" className="form-control" id="remarks" cols="30" rows="6" value={data.remarks} readOnly/>
                                </div>
                            </div><br/>
                            <button type="submit" className="btn btn-primary">Okay</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}