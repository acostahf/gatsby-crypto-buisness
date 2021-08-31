import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout className="p-0">
    <Seo title="Home" />
    {/* div that has the hero */}
    <div className='max-w-full p-0 bg-hero-pic h-96 bg-cover '>
      {/* heading */}
    <div className="flex justify-center items-center h-96 ">
      <h1 className="text-white text-3xl">Welcome to Crypto Buisness</h1>
    </div>
    </div>
  
    <h1 className="font-roboto text-xl" >Welcome to Cryto Buisness</h1>
    <p >Look through our site to learn more about our upcoming release</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
