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
    <div className=" w-full p-20 flex flex-col justify-center items-center space-x-20">
      <Heading />
      <div className=" flex flex-wrap p-10 justify-center items-center flex-auto ">
        <Card {...props} />
        <Card {...props} />
        <Card {...props} />
      </div>
    </div>
  )
}
