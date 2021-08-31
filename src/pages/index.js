import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout className="p-0">
    <Seo title="Home" />
    {/* div that has the hero */}
    <div className='max-w-full p-0 bg-hero-pic h-96 bg-cover bg-blend-overlay '>
      {/* heading */}
    <div className="flex justify-center flex-col  items-center h-96 ">
      <h1 className="text-white text-3xl">An avenue for the evolution of Defi</h1>
      <h1 className='text-blue-200'>A new way of minin crypto. Invest by holding.</h1>
      <div className=" mt-10">
        
      <button className="bg-gradient-to-r from-green-400 to-blue-500 rounded text-white text-md px-2 py-1 mr-4 flex  ">Lauch app <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 p-0 my-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg></button>
      <button className=" bg-white backdrop-filter backdrop-blur-xl bg-opacity-30 rounded text-purple-800 text-md px-2 py-1  ">Read Docs</button>
      </div>
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
