
import React from 'react'
import AboutLogo from "../components/images/AboutLogo.PNG"
import { Link } from 'react-router-dom'
import "./style.css"
function Register() {
  return (
    <div className='container-fluid container-md px-lg-5'>
        <div className="row d-flex justify-content-center mt-4">
            <div className="col-12 col-md-8 col-lg-5">
                <form action="" className='form-control py-3'>
                    {/* <h4 className='fw-bold text-half-dark' >Register</h4> */}
                    <img src={`${AboutLogo}`} alt="" className='w-75' />
                    <div className='text-start my-3'>
                        <label className='text-muted' id='second-color' htmlFor="email">Username:</label>
                        <input type="text" name='email' id='second-color' className='form-control' placeholder='example@gmail.com' />
                    </div>
                    <div className='text-start my-3'>
                        <label className='text-muted' id='second-color' htmlFor="email">Email:</label>
                        <input type="text" name='email' id='second-color' className='form-control' placeholder='example@gmail.com' />
                    </div>
                    <div className='text-start my-3'>
                        <label className='text-muted' htmlFor="password" id='second-color'>Password:</label>
                        <input type="password" name='password' id='second-color' className='form-control' placeholder='Your password'/>
                    </div>
                    <div className='text-start my-3'>
                        <label className='text-muted' htmlFor="password" id='second-color'>Try Password:</label>
                        <input type="password" name='password' id='second-color' className='form-control' placeholder='Your password'/>
                    </div>
                    <div className='text-start my-2 '>
                        <button className='form-control text-light' id='custom-button'>Create Account</button>
                    </div>
                    <div className='d-grid mt-3 text-start ps-4 gap-2'>
                        <Link to="/" className='first-color'>Home</Link>
                        <Link to="/login" className='first-color'>Login ? have an account</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register