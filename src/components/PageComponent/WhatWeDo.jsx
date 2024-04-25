
import "./style.css"
import React from 'react'

function WhatWeDo() {
    return(<>
        {/* <!-- Service Start --> */}
            <div className="service py-md-5">
                <div className="container-fluid">
                    <div className="section-header">
                        <p className="display-2 mt-4 fw-500 h4 text-muted">What We Do?</p>
                        <h2 className='text-half-dark'>We believe that we can  save more lifes with you</h2>
                    </div>
                    <div className="row my-5">
                        <div className="col-xl-4 serviceMain my-3 my-2 col-md-6">
                            <div className="service-item d-flex">
                                <div className="service-icon p-2" >
                                    <i className="fa fa-light fa-seedling custom-icon"></i>
                                </div>
                                <div className="service-text">
                                    <h3>Healthy Food</h3>
                                    <p className='text-half-dark'>Lorem ipsum dolor git amet elit. Phase nec preti facils .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 serviceMain my-3 my-2 col-md-6">
                            <div className="service-item d-flex">
                            <div className="service-icon p-2" > 
                                <i className="fa fa-sharp fa-solid fa-droplet custom-icon"></i>
                                </div>
                                <div className="service-text">
                                    <h3>Pure Water</h3>
                                    <p className='text-half-dark'>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 serviceMain my-3 my-2 col-md-6">
                            <div className="service-item d-flex">
                            <div className="service-icon p-2" >
                                <i className="fa fa-regular fa-user-nurse custom-icon"></i>
                                </div>
                                <div className="service-text">
                                    <h3>Health Care</h3>
                                    <p className='text-half-dark'>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 serviceMain my-3 my-2 col-md-6">
                            <div className="service-item d-flex">
                            <div className="service-icon p-2" >
                                <i className="fa fa-light fa-user-graduate custom-icon"></i>
                                </div>
                                <div className="service-text">
                                    <h4>Primary Education</h4>
                                    <p className='text-half-dark'>Lorem ipsum dolor sit amet elit. Phase nec preti .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 serviceMain my-3 my-2 col-md-6">
                            <div className="service-item d-flex">
                            <div className="service-icon p-2" >
                                <i className="fa fa-sharp fa-solid fa-house custom-icon"></i>
                                <i className=""></i>
                                </div>
                                <div className="service-text">
                                    <h3>Facilities</h3>
                                    <p className='text-half-dark'>Lorem ipsum dolor sit amet elit. Phase nec preti .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 serviceMain my-3 my-2 col-md-6">
                            <div className="service-item d-flex">
                            <div className="service-icon p-2" >
                                <i className="fa fa-sharp fa-solid fa-people-carry-box custom-icon"></i>
                                </div>
                                <div className="service-text">
                                    <h3>Social Care</h3>
                                    <p className='text-half-dark'>Lorem ipsum dolor sit amet elit. Phase nec preti .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}
        </>)
}

export default WhatWeDo