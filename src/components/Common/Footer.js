import {Link} from "react-router-dom";
import React from "react";

export default function Footer() {
    return(
        <div className="container-fluid justify-content-center px-0 ">
            <footer>
                <div className="row justify-content-around mb-0 pt-5 mx-4">
                    <div className="col-xl-2 col-md-4 order-xl-1 order-4 mr-xl-0 my-auto">
                        <ul className="list-unstyled mt-md-3 mt-5">
                            <li className="footer-li">Social Media</li>
                            <li className="social footer-li"> <span> <i className="fa fa-facebook" aria-hidden="true" /></span> <span> <i className="fa fa-instagram" aria-hidden="true" /> </span> <span> <i className="fa fa-twitter" aria-hidden="true" /> </span> </li>
                        </ul>
                        <ul className="list-unstyled my-xl-4 my-md-3">
                            <li className="footer-li">Copyright</li>
                            <li className="footer-li">Ⓒ Nutrition 2019</li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-md-3 pt-4 order-1">
                        <ul className="list-unstyled">
                            <li className="mt-md-0 mt-4 footer-li">Our Solution</li>
                            <li className="footer-li">Integrated Security </li>
                            <li className="footer-li">Core Features</li>
                            <li className="footer-li">Product Features</li>
                            <li className="footer-li">Pricing</li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-md-3 pt-4 order-2">
                        <ul className="list-unstyled">
                            <li className="mt-md-0 mt-4 footer-li">Your needs</li>
                            <li className="footer-li">Integrated Security </li>
                            <li className="footer-li">Core Features</li>
                            <li className="footer-li">Product Features</li>
                            <li className="footer-li">Pricing</li>
                        </ul>
                    </div>
                    <div className="col-xl-auto col-md-3 pt-4 my-sm-0 order-md-3 order-sm-1 ">
                        <ul className="list-unstyled">
                            <li className="mt-md-0 mt-4 footer-li">Offer</li>
                            <li className="footer-li">Integrated Security </li>
                            <li className="footer-li">Core Features</li>
                            <li className="footer-li">Product Features</li>
                            <li className="footer-li">Pricing</li>
                        </ul>
                    </div>
                    <div className="col-xl-auto col-md-6 col-12 pt-4 my-sm-0 order-6 ">
                        <div className="form-group ">
                            <label htmlFor="email" className="mb-3"><b>Subscribe to our newsletter and Get 10% off</b></label>
                            <input type="email" className="form-control form-control-lg" placeholder="Enter email" id="email" />
                        </div>
                        <button type="button" className="btn btn-primary btn-lg btn-block my-2 subscribe mt-4 mb-3">Subscribe</button>
                    </div>
                </div>
                <div className="row justify-content-center px-3 py-3 pt-5">
                    <div className="col text-center">
                        <p className="mb-0">*These statement have not evaluated by the Food and Drug Administrations.</p>
                        <p>This product is not intended to diagnose,treat,cure, or prevent any disease.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}