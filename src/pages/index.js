import * as React from "react"
// import CardSection from"..card-section"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardSection from "../components/card-section"
import HeroSection from "../components/hero-section"
// import Card from"../components/card"

var title = "This card title works!";

const IndexPage = (props) => (
  <Layout className="p-0">
    <Seo title="Home" />
    <HeroSection />
    <CardSection title={title} />
  </Layout>
)

export default IndexPage
