

import React, { useEffect, useState } from 'react'
import Hamza from "../images/Hamza.jpg"
const data = [
    {
        id:1,
        img:'https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=1600',
        name:'Khadija Heiderzada',
        job:'CEO & Founder'
    },
    {
        id:2,
        img:Hamza,
        name:"Hamza Nawabi",
        job:'Web Developer'
    },
    {
        id:3,
        img:"https://media.istockphoto.com/id/1270030214/photo/portrait-of-a-cheerful-man-using-smart-phone-at-home-office.jpg?b=1&s=612x612&w=0&k=20&c=Je85EilTmYrkVLAuJv8kou-FyZW0qPaY-js6ODNiCS8=",
        name:"Naimat Nawabi",
        job:'Manager'
    },
    {
        id:4,
        img:"https://media.istockphoto.com/id/1270030214/photo/portrait-of-a-cheerful-man-using-smart-phone-at-home-office.jpg?b=1&s=612x612&w=0&k=20&c=Je85EilTmYrkVLAuJv8kou-FyZW0qPaY-js6ODNiCS8=",
        name:"Anwar JabarKhil",
        job:'Volunteer'
    }
]


function OurTeam() {
    const [ showData,setShowData ] = useState([])
    useEffect(()=>{
        if(data.length > 0 ){
            setShowData(data)
        }
    },[])
  return (       
    <>
        <div className="team py-md-5">
            <div className="container-md">
            <div className="section-header">
                <p className="display-2 mt-4 fw-500 h4 text-muted">Meet Our Team</p>
                <h2 className='text-half-dark'>Awesome Guys Behind Our Foundation Activities</h2>
            </div><br /><br />
                <div className="row">
                    {showData.map(item=>(
                        <div className="col-lg-3 col-md-6 mb-3" key={item.id}>
                            <div className="team-item card-container">
                                <div className="card-img">
                                    <img src={item.img} className='blog-img' alt="TeamImage"/>
                                </div>
                                <div className="blog-text">
                                    <h3>{item.name}</h3>
                                    <p>{item.job}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default OurTeam


