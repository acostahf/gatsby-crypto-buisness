import React from "react"
import Card from "./card"

function Heading() {
  return (
    <div>
      <h1 className="pt-10 text-4xl font-bold text-white text-center ">
        FEATURES
      </h1>
    </div>
  )
}
// this function acts as a wropper around the cards in order to style the layout
export default function cardSection(props) {
  return (
    <div className=" w-full flex flex-col p-10">
      <Heading />
      <div className=" grid grid-cols-1 pt-20 lg:grid-cols-3 ">
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
      </div>
    </div>
  )
}
