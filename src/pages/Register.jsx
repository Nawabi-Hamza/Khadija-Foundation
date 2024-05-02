import React, { useEffect, useState } from "react";
import AboutLogo from "../components/images/AboutLogo.PNG";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { apiUrl } from "../main/variables";
function Register() {
  const [ username,setUsername ] = useState('')
  const [ email,setEmail ] = useState('')
  const [ password,setPassword ] = useState('')
  const [ confirmPassword,setConfirmPassword ] = useState('')
  const [ error,setError ] = useState(false) 
  const [ succes,setSucces ] = useState(false)
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(email ==="" || password ==="" || username ==="" ){
       return setError("ALL FIELD SHOULD BE FILLED !")
    }
    if(password===confirmPassword){
        try{
            const res = await axios.post(`${apiUrl}/users/register`,{username:username,email:email,password:password})
            if(res.data.message){
                setError(false)
                setSucces(res.data.message)
            }
            // console.info(res.data.message)
        }catch(error){
            setError("ERROR: "+error.response.data.message)
        }   
    }else{
        setError("ERROR: PLEASE TYPE SAME PASSWORD !")
    }
  };
  useEffect(()=>{
    // After operation the alert will hide
    setTimeout(()=>{
        setError(false)
        setSucces(false)
    },8000)
  },[error,succes])
  return (
    <div className="container-fluid container-md px-lg-5">
      <div className="row d-flex justify-content-center mt-4">
        <div className="col-12 col-md-8 col-lg-5">
          <form action="" className="form-control py-3" onSubmit={handleSubmit}>
            {/* <h4 className='fw-bold text-half-dark' >Register</h4> */}
            <img src={`${AboutLogo}`} alt="" className="w-75" />
            {error && <div className="Error"><i className="bi bi-info-circle"></i> {error}</div>}
            {succes && <div className="Succes"><i className="bi bi-info-circle"></i> {succes}</div>}
            <div className="text-start my-3">
              <label className="text-muted" id="second-color" htmlFor="email">
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="second-color"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="example@gmail.com"
              />
            </div>
            <div className="text-start my-3">
              <label className="text-muted" id="second-color" htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="second-color"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
              />
            </div>
            <div className="text-start my-3">
              <label
                className="text-muted"
                htmlFor="password"
                id="second-color"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="second-color"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
              />
            </div>
            <div className="text-start my-3">
              <label
                className="text-muted"
                htmlFor="confirmPassword"
                id="second-color"
              >
                Try Password:
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="second-color"
                className="form-control"
                onChange={(e) =>setConfirmPassword(e.target.value)}
                placeholder="Your password"
              />
            </div>
            <div className="text-start my-2 ">
              <button
                className="form-control text-light"
                id="custom-button"
                type="submit"
              >
                Create Account
              </button>
            </div>
            <div className="d-grid mt-3 text-start ps-4 gap-2">
              <Link to="/" className="first-color">
                Home
              </Link>
              <Link to="/login" className="first-color">
                Login ? have an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
