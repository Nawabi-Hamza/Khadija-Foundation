import React from "react";
import { Link } from "react-router-dom";
import "./Nav-Foot.css"

function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="footer py-md-5 bg-light text-muted text-start">
        <div className="container container-fluid p-3">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h2>Our Office</h2>
              <p className="text-half-dark">
                <i className="bi bi-geo-alt-fill"></i> 15 District, Kabul ,
                Afghanitan
              </p>
              <p className="text-half-dark">
                <i className="bi bi-phone"></i> 012 345 67890
              </p>
              <p className="text-half-dark">
                <i className="bi bi-phone"></i>{" "}
                KhadijaCharityFoundation@gmail.com
              </p>
              <div className="footer-social my-4">
                <Link className="btn btn-lg custom-footer-i" to="/">
                  {" "}
                  <i className="bi bi-twitter-x"></i>
                </Link>
                <Link className="btn btn-lg custom-footer-i" to="/">
                  {" "}
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link className="btn btn-lg custom-footer-i" to="/">
                  {" "}
                  <i className="bi bi-youtube"></i>
                </Link>
                <Link className="btn btn-lg custom-footer-i" to="/">
                  {" "}
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link className="btn btn-lg custom-footer-i" to="/">
                  {" "}
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-link">
                <h2 className="my-text">Site Map</h2>
                <Link className="nav-link" to="/">
                  Home Page
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
                <Link className="nav-link" to="/projects">
                  Our Project Done
                </Link>
                <Link className="nav-link" to="/news">
                  New Work
                </Link>
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div>
                <h2>Help Together</h2>
                <form>
                  {/* <input className="form-control" placeholder="Your Email For News"/> */}
                  <a href="https://www.paypal.com/donate/?hosted_button_id=AAVQAD3B6QZS6">
                    <button className="btn form-control my-4 " id="custom-btn">
                      Donate
                    </button>
                  </a>
                  <br />
                  <p className="text-half-dark">
                    Don't worry, wers aren't spam!
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <hr />
            <div className="col-md-6">
              <p>
                &copy; <b> Khadija Charity Foundation </b>, All Right Reserved.
              </p>
            </div>
            <div className="col-md-6 text-end">
              <p>
                Designed By:{" "}
                <a
                  href="https://hamza-nawabi.netlify.app"
                  target="blank"
                  className="my-text-Footer nav-link d-inline text-decoration-underline"
                >
                  {" "}
                  Hamza Nawabi
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
