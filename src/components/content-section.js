import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Content = props => {
  return (
    <div className="flex justify-center items-center flex-col p-20 text-center text-gray-3di00 font-bold text-xl h-600">
      {/* <Img
        title="Header image"
        alt="Greek food laid out on table"
        sizes={props.tokyoImage.sizes}
      /> */}
      <h1 className="text-3xl font-bold pb-20 text-gray-300"> About Us:</h1>
      <h1>
        Ut sint quis pariatur fugiat laborum laborum veniam. Proident ad sit
        sint qui ad nostrud eu ex mollit proident ut exercitation sint. Sit duis
        ut occaecat est ipsum tempor et. Pariatur enim laboris eiusmod amet
        minim dolor magna et qui. Ut sint quis pariatur fugiat laborum laborum
        veniam. Proident ad sit sint qui ad nostrud eu ex mollit proident ut
        exercitation sint. Sit duis ut occaecat est ipsum tempor et. Pariatur
        enim laboris eiusmod amet minim dolor magna et qui.
      </h1>
    </div>
  )
}

export default Content

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
