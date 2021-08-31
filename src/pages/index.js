import * as React from "react"
// import CardSection from"..card-section"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardSection from "../components/card-section"
import HeroSection from "../components/hero-section"

const IndexPage = () => (
  <Layout className="p-0">
    <Seo title="Home" />
    <HeroSection />
    <CardSection />
  
  </Layout>
)

export default IndexPage
