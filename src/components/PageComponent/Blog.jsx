
import React,{ useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { data } from "./Posts"
import "./style.css"

export default function ShowPosts(){
    // console.log(preApi)
    const [show,setShow] = useState([])
    // console.log(data)
    useEffect(()=>{
        if(data.length>0){
            setShow(data)         
            // console.log(show)
        }
    },[])
        
    return(<>
         <div className="blog pb-md-5">
            <div className="section-header">
                <p className="display-2 mt-4 h4 text-muted fw-500">Our Blog</p>
                <h2 className='text-half-dark'>Latest news & articles directly from our blog</h2>
            </div><br /><br />
            <div className="row body">
                {show.map((items)=>(
                <div className="col-12 col-md-6 col-xxl-4 my-3" key={items.post_id} >
                    <div className="card-container">
                        <div className="card-img">
                            <img src={items.post_image} className="blog-img" alt="ImageNew" />
                        </div>
                        <div className="blog-text">
                            <h3><Link className="nav-link" to={"/people/"+items.post_id}>{items.post_title}</Link></h3>
                            <p>
                                {items.post_description}
                            </p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
     
    </>)
}
