import React, {useState, useEffect} from "react";
import axios from "axios";
import WorkshopConductorSideNav from "../Navbar/WorkshopConductorSideNav";
import {storage} from "../../firebase";
import docIcon from "../../images/normal-file.jpg";

export default function ViewWorkshop(props) {

    const [id, setId] = useState("");
    const [conferenceDetailsId, setConferenceDetailsId] = useState("");
    const [name, setName] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [documentURL, setDocumentURL] = useState("");
    const [document, setDocument] = useState(null);
    const [progress, setProgress] = useState('');

    useEffect(() => {
        getWorkshop();
    }, [])

    function getWorkshop() {
        const workshopId = props.match.params.id;
        axios.get("https://icaf-backend.herokuapp.com/workshops/" + workshopId).then((res) => {
            console.log(res.data);
            setId(res.data.id);
            setConferenceDetailsId(res.data.conferenceDetailsId);
            setTopic(res.data.topic)
            setName(res.data.name);
            setDescription(res.data.description);
            setDocumentURL(res.data.documentURL);
        }).catch((err) => {
            alert(err);
        })
    }

    function submit(e) {
        e.preventDefault();
        const dataObject = {
            name,
            description,
            documentURL
        }
        const workshopId = props.match.params.id;
        axios.put("https://icaf-backend.herokuapp.com/workshops/" + workshopId, dataObject).then((res) => {
            console.log(dataObject);
            alert(res.data.messages);
            props.history.push("/workshops");
        }).catch((err) => {
            if(err.response.data.name !== undefined) {
                alert(err.response.data.name);
            } else if(err.response.data.documentURL !== undefined) {
                alert(err.response.data.documentURL);
            } else if(err.response.data.message !== undefined) {
                alert(err.response.data.message);
            } else {
                alert(err);
            }
        })
    }

    function handleDocumentChange(e) {
        if(e.target.files[0]) {
            const documentFile = e.target.files[0]
            setDocument(documentFile)
        }
    }

    function handleDocumentUpload(e) {
        e.preventDefault();
        if(document == null) {
            alert("Please select a document!");
        } else {
            const uploadTask = storage.ref(`Workshops/${document.name}`).put(document);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progressValue = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progressValue);
                },
                (error) => {
                    alert(error);
                },
                () => {
                    storage.ref('Workshops').child(document.name).getDownloadURL().then(url => {
                        console.log(url);
                        const uploadedURL = url;
                        setDocumentURL(uploadedURL);
                        alert("Document uploaded successfully.")
                    })
                });
        }
    }

    return(
        <div className="main">
            <WorkshopConductorSideNav />
            <div className="container mt-3" style={{
                marginLeft: '60px',
                backgroundColor: '#ccccff',
                boxShadow: '1px 2px 2px 2px rgba(0.3, 0.3, 0.3, 0.3)',
                borderRadius: '5px',
                height : '1000px'
            }}>
                <br/>
                <div className="card" style={{width : '72%', marginTop: 0, marginLeft : '15px', borderRadius: '5px'}}>
                    <div className="card-header" style={{backgroundColor: '#f2f2f2'}}>
                        <h4>Workshop</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="id" className="col-sm-3">Id</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="id" value={id} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="conferenceDetailsId" className="col-sm-3">Conference Details Id</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="conferenceDetailsId" value={conferenceDetailsId} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="topic" className="col-sm-3">Topic</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="topic" value={topic} readOnly/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="name" className="col-sm-3">Name</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Name" value={name} required/>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-3">Description</label>
                                <div className="col-sm-5">
                                    <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} id="description" cols="30" rows="6" placeholder="Enter Description" value={description} />
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <label htmlFor="documentURL" className="col-sm-3">Document</label>
                                <div className="col-sm-5">
                                    <input type="file" onChange={(e) => handleDocumentChange(e)} className="form-control file-box" id="documentURL" />
                                </div>
                                <div className="col">
                                    <button onClick={(e) => handleDocumentUpload(e)} className="btn btn-success">Upload</button>
                                </div>
                            </div><br/>
                            <div className="form-group row">
                                <div className="col-md-4 offset-md-3">
                                    <img src={docIcon} alt="No Document" height="50" width="50" /><br/>
                                    <a href={documentURL} className="doc-url">{documentURL.substring(0, 30)}</a>
                                    <progress className="progress-bar progress-bar-striped bg-danger" role="progressbar" value={progress} max="100" />
                                </div>
                            </div><br/>
                            <button onClick={(e) => submit(e)} className="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}