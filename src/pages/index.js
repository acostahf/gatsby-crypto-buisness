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
{/* section with 3 cards */}
    <div className="h-96 w-full bg-blue-300">
      <div>
        <h1 className="font-bold text-xl">Section with our features</h1>
      </div>
      <div class="grid grid-cols-3 h-96 ">
        <div className="flex justify-center  ">
          {/* card */}
          <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 backdrop-filter-blur h-64 ">
          <h1>Free drops daily </h1>
          <p>Every 4 hours we drop free tokens into random wallets. This insures by holding our tokens you are auto enter into a free giveawey. The more you hold the better your chances will be!</p>
          </div>
        </div>
        <div className="flex justify-center">
           {/* card */}
           <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 backdrop-filter-blur">
          <h1>Free drops daily </h1>
          <p>Every 4 hours we drop free tokens into random wallets. This insures by holding our tokens you are auto enter into a free giveawey. The more you hold the better your chances will be!</p>
          </div>
        </div>
        <div className="flex justify-center">
           {/* card */}
           <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 backdrop-filter-blur">
          <h1>Free drops daily </h1>
          <p>Every 4 hours we drop free tokens into random wallets. This insures by holding our tokens you are auto enter into a free giveawey. The more you hold the better your chances will be!</p>
          </div>
        </div>
      </div>
    </div>
  
    <h1 className="font-roboto text-xl" >Welcome to Cryto Buisness</h1>
    <p >Look through our site to learn more about our upcoming release</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
