import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// import CardSection from"..card-section"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardSection from "../components/card-section"
import HeroSection from "../components/hero-section"
// import SliderSection from "../components/slider-section"
import ContentSection from "../components/content-section"
import RoadmapSection from "../components/roadmap/roadmap-section"
import MembersSection from "../components/members"
// import Card from"../components/card"

var title = "This card title works!"
var content =
  "We intergrate all your bank accounts and crypto wallets into one single wallent that auto buys out coin with onlly needing your phone number!"

const IndexPage = props => (
  <Layout className="p-0">
    <Seo title="Home" />
    <HeroSection />

    <CardSection title={title} content={content} />
    {/* <ContentSection tokyoImage={this.props.data.tokyo} /> */}
    <ContentSection />

    <RoadmapSection />
    <MembersSection />
    {/* <SliderSection /> */}
  </Layout>
)

export default IndexPage

//graphql query for images
// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

// export const pageQuery = graphql`
//   query {
//     tokyo: file(relativePath: { eq: "tokyo.jpg" }) {
//       ...fluidImage
//     }
//   }
// `
