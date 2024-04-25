import React from "react";
import SlideShow from "../components/PageComponent/SlideShow";
import WhatWeDo from "../components/PageComponent/WhatWeDo";
import ShowPosts from "../components/PageComponent/Blog";
import OurTeam from "../components/PageComponent/OurTeam";
import Contact from "../components/PageComponent/Contact";

function PageComponent() {
  return (
    <>
      <SlideShow />
      <div className="container-fluid container-md px-lg-5">
        <WhatWeDo />
        <ShowPosts />
        <OurTeam />
        <Contact />
      </div>
    </>
  );
}

export default PageComponent;
