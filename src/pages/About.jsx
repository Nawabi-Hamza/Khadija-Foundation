import React from "react";
import WhatWeDo from "../components/PageComponent/WhatWeDo";
import OurTeam from "../components/PageComponent/OurTeam";
import AboutLogo from "../components/images/AboutLogo.PNG"
function About() {
  return (
    <>
      <div className="container-fluid container-md px-lg-5">
        <h1 className="my-text display-2 my-5 fw-500 text-muted">
            Who We Are ?
        </h1>
        <p className="my-text my-5 h5 text-decoration-underline fw-500 text-muted">
          Khadija Charity Foundation
        </p>
        <div className="row">
            <div className="col-md-6">
                <img src={AboutLogo} style={{width:"100%",height:"400px",objectFit:'cover'}} alt="" />
            </div>
        <div className="col-md-6 ">
           <h5 className="mt-4 text-start" style={StyleSheet.rightBorder}>
             We Are Some People Which Work For Freedom Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptate dolore eligendi non saepe quae quibusdam pariatur expedita libero. Deleniti excepturi reiciendis pariatur consectetur quae veniam ad nostrum, totam optio eum, nobis ipsam ab officiis architecto ipsum. Quae maiores repellat illum rerum distinctio provident placeat ab deleniti corrupti quasi, quibusdam aliquid, praesentium ipsum deserunt voluptatem illo, expedita velit commodi dolor autem! Adipisci beatae odio quo dolorum dolor quisquam? Libero non obcaecati nobis et dolores reiciendis error, quam soluta possimus unde pariatur voluptates quae iusto, modi vitae aperiam a aut? Sapiente sunt nemo repellat sit quo perspiciatis quia soluta aut quam.
            </h5> 
        </div>
        </div>
        <OurTeam />
        <WhatWeDo />
      </div>
    </>
  );
}

const StyleSheet = {
  rightBorder:{
    border: "none",
    borderLeft: "2px solid #f4b183",
    padding:'1em',
    paddingRight:'0px',
    textAlign:'justify'

  }
}

export default About;
