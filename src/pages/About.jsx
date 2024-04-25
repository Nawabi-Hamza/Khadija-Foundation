import React from "react";
import WhatWeDo from "../components/PageComponent/WhatWeDo";
import OurTeam from "../components/PageComponent/OurTeam";

function About() {
  return (
    <>
      <div className="container-fluid container-md px-lg-5">
        <OurTeam />
        <WhatWeDo />
      </div>
    </>
  );
}

export default About;
