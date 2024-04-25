import { Link,Outlet,useLocation } from 'react-router-dom'
import React from 'react'
import Footer from './Footer'
import "./Nav-Foot.css"
import Logo from "./images/Logo.png"





function Navbar() {
    const url = useLocation()
    const path = url.pathname
  return (
    <>
        <nav className="navbar sticky-top navbar-expand-lg bg-light">
            <div className="container-lg container-fluid">
                <Link className="navbar-brand" to="/" >
                    <img src={Logo} className='img-logo' style={StyleSheet.logo} alt="Logo" />
                </Link>
                <div className="navbar-toggler" id='btn-navbar-toggle' type="div" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <svg className="navbar-toggler-icon-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" d="M4 7h22M4 15h22M4 23h22"/>
                    </svg>
                </span>
                </div>
                <div className="offcanvas offcanvas-start w-75"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><span className='text-uppercase fw-bolder h3 ' id='text-color'>Khadija</span><span className='text-muted d-block d-md-inline' style={{fontSize:'12px'}}>Charity-Foundation</span></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center gap-3 flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className={`nav-link ${path==="/" && "active"}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path==='/projects' && "active"}`} to="/projects">Our Projects</Link>
                            </li>
                            <li>
                                <Link className={`nav-link ${path==='/news' && "active"}`} to="/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path==='/about' && "active"}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link ${path==='/contact' && "active"}`} to="/contact" role="button">Contact</Link>
                            </li>
                            <li>
                                <Link className='nav-link donate-btn' to="/donate">Donate</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        {/* Navbar End OutLet For Other Pages Load */}
        <Outlet />
        {/* Footer Start it's exist in another file I have imported */}
        <Footer />
        {/* Footer End  */}

    
    </>
        
   
  )
}

export default Navbar


const StyleSheet = {
    logo:{
        height:"60px"
    }
}