
import React, { useEffect, useState } from 'react'
import AboutLogo from "../components/images/AboutLogo.PNG"
import { Link, useNavigate } from 'react-router-dom'
import "./style.css"
import axios from 'axios'
import { apiUrl } from '../main/variables'
import { useAuth } from '../main/AuthContext'

function Login() {
    const [ email,setEmail ] = useState()
    const [ password,setPassword ] = useState() 
    const [ error,setError ] = useState(false)
    const [ succes,setSucces ] = useState(false)
    const { login } = useAuth();
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!email||!password) return setError("PLEASE FILL ALL FIELDS !")
        try{
            // axios.defaults.withCredentials = false;
            const res = await axios.post(`${apiUrl}/users/login`,{
                email:email,
                password:password
            })
            // console.log(res.data)   
            if(res && res.data){
                login(res.data)
                setSucces("LOGIN SUCCESFULY ...")
                navigate("/")
            } 
        }catch(error){
            if(error && error.response && error.response.data && error.response.data.message){
               return setError("ERROR: "+error.response.data.message)
            }return setError("ERROR: SERVER PROBLEM !")
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            setError(false)
            setSucces(false)
        },8000)
    },[error,succes])
  return (
    <div className='container-fluid container-md px-lg-5'>
        <div className="row d-flex justify-content-center mt-4">
            <div className="col-12 col-md-8 col-lg-5">
                <form action="" className='form-control py-3' onSubmit={handleSubmit}>
                    {/* <h4 className='fw-bold text-half-dark' >Login</h4> */}
                    <img src={`${AboutLogo}`} alt="" className='w-75' />
                    {error && <div className="Error"><i className="bi bi-info-circle"></i> {error}</div>}
                    {succes && <div className="Succes"><i className="bi bi-info-circle"></i> {succes}</div>}
                    <div className='text-start my-3'>
                        <label className='text-muted' id='second-color' htmlFor="email">Email:</label>
                        <input type="text" name='email' id='second-color' onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='example@gmail.com' />
                    </div>
                    <div className='text-start my-3'>
                        <label className='text-muted' htmlFor="password" id='second-color'>Password:</label>
                        <input type="password" name='password' id='second-color' onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Your password'/>
                    </div>
                    <div className='text-start my-2 '>
                        <button className='form-control text-light' id='custom-button'>Login</button>
                    </div>
                    <div className='d-grid mt-3 text-start ps-4 gap-2'>
                        <Link to="/" className='first-color'>Home</Link>
                        <Link to="/register" className='first-color'>Register ? not have an account</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login