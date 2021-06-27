import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Home(props) {
    return(
        <div>
            <br/>
            <Header/>
            <div className="card py-5 border-0 px-0 mx-0 home-image">
                <div className="card-body text-center">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <h1 className="home-h1">International Conference on Application Frameworks</h1>
                            <h6 className="home-h1"><b>Still have more questions ?</b></h6>
                            <small className="home-h1">Call/Text <span className="mx-2"><b>+91.1630.412.999</b></span>and with real person.</small>
                            <div className="row justify-content-center">
                                <div className="col-10">
                                    <button type="button" className="btn btn-primary btn-lg btn-block my-5">Try it for free</button>
                                    <h6 className="home-h1"> <b>100% Money Back Guarantee</b></h6>
                                    <small className="home-h1">If you'r not satsified for any reason, we'll refund your money</small>
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