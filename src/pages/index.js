import * as React from "react"
// import CardSection from"..card-section"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardSection from "../components/card-section"
import HeroSection from "../components/hero-section"
import SliderSection from "../components/slider-section"
// import Card from"../components/card"

var title = "This card title works!";
var content = "We intergrate all your bank accounts and crypto wallets into one single wallent that auto buys out coin with onlly needing your phone number!";

const IndexPage = (props) => (
  <Layout className="p-0">
    <Seo title="Home" />
    <HeroSection />
    <CardSection title = {title} content = {content} />
    <SliderSection />
  </Layout>
)

export default IndexPage
