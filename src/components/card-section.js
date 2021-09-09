import React from "react"
import Card from "./card"


function Heading () {
  return(
  <div>
    <h1 className="pt-10 text-4xl font-bold text-white ">FEATURES</h1>
  </div>
  )
}
// this function acts as a wropper around the cards in order to style the layout 
export default function cardSection (props) {
    return (
      <div className=" w-full bg-gradient-to-r p-10 from-green-400 to-blue-500 flex flex-col justify-center items-center ">
        <Heading />
        <div className=" flex flex-wrap p-10 justify-center items-center flex-auto">
      <Card {...props} />
      <Card {...props} />
      <Card {...props} />
        </div>
    </div>
    )
}