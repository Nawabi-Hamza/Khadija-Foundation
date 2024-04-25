

import React,{ useState} from 'react'

function Contact() {
    const [ name,setName ] = useState("")
    const [ email,setEmail ] = useState("")
    const [ message,setMessage ] = useState("")
    const dangerShow = document.getElementById("dangerShow")
    const successShow = document.getElementById("successShow")
    const sendEmail = async(e)=>{
        e.preventDefault()
        if(name===""||email===""||message===""){
            dangerShow.innerHTML="Please Fill All Fields ...!";
            dangerShow.style="display:block;";
        }else{
            dangerShow.style="display:none;";
            successShow.innerHTML=`Please Wait <div className="spinner-border spinner-border-sm ms-2" role="status">
            <span className="sr-only">Loading...</span>
          </div>`;
            successShow.style="display:block;";
        }
    }
  return (
    <>
        
            <div className="section-header">
                <p className="display-2 mt-4 h4 text-muted fw-500">Contact US</p>
                <h2 className='text-half-dark'>Contact For Any Queries</h2>
            </div><br /><br />
            <div className="row">
            <div className="col-lg-7">
                    <div className="contact-form bg-white" style={{padding:"30px"}}>
                    <div className="alert alert-success" id="successShow" style={{display:"none"}}></div>
                            <div className="alert alert-danger" id="dangerShow" style={{display:"none"}}></div>
                        <h4 className="mb-3 text-start text-muted">{"You Can Contact Us".toUpperCase()}</h4>
                        <form name="sentMessage" id="contactForm" >
                            <div className="control-group">
                                <input type="text" className="form-control border-1 p-4" id="name" placeholder="Your Name"
                                onChange={(e)=>setName(e.target.value)}
                                    required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control border-1 p-4" id="email" placeholder="Your Email"
                                onChange={(e)=>setEmail(e.target.value)}
                                    required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control border-1 py-3 px-4" rows="6" id="message" placeholder="Message"
                                onChange={(e)=>setMessage(e.target.value)}
                                    required="required"
                                    data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className='text-end'>
                                <button className="btn py-3 px-4" type="submit" id="sendMessageButton" onClick={sendEmail}>Send
                                    Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 pb-4 pb-lg-0">
                    <div className="my-primary text-dark text-center p-4">
                        <h4 className="m-0 text-light"><i className="fa fa-map-marker-alt text-white mr-2"></i> Our Location</h4>
                    </div>
                    <iframe id='iframeMap' title="location" loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.837149313288!2d69.14297491474561!3d34.537946534732214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16f20052b8a43%3A0xee06962841e234b6!2sRana%20University!5e0!3m2!1sen!2s!4v1678894107215!5m2!1sen!2s"
                        aria-hidden="false"> </iframe>
                </div>
               
            </div>
    
    </>
  )
}

export default Contact