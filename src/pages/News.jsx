import React from 'react'
import WhatWeDo from '../components/PageComponent/WhatWeDo'
import OurTeam from '../components/PageComponent/OurTeam'
import ShowPosts from '../components/PageComponent/Blog'

function News() {
  return (
    <>
      <div className="container-fluid container-md px-lg-5">
        <WhatWeDo />
        <OurTeam />
        <ShowPosts />
      </div>
    </>
  )
}

export default News