import React from "react";
import ShowPosts from "../components/PageComponent/Blog";
import OurTeam from "../components/PageComponent/OurTeam";

function Projects() {
  return (
    <>
      <div className="container-fluid container-md px-lg-5">
        <ShowPosts />
        <OurTeam />
      </div>
    </>
  );
}

export default Projects;
