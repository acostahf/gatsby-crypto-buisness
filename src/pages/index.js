import * as React from "react"
// import CardSection from"..card-section"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardSection from "../components/card-section"
import HeroSection from "../components/hero-section"
import Card from"../components/card"

var title = "Name of the card!";

const IndexPage = (props) => (
  <Layout className="p-0">
    <Seo title="Home" />
    <HeroSection />
    <CardSection />
    <Card 
    title={title}
    // content="swap or trade quickly and cheaply"
    // cta='Enter Exchange'
    />
  
  </Layout>
)

export default IndexPage
