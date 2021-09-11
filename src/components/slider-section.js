import React from "react"
import Slider from "./slider"

function Heading () {
    return(
    <div>
      <h1 className="pt-10 text-4xl font-bold text-white ">Slider Section</h1>
    </div>
    )
  }

export default function sliderSection (props) {
    return (
        <div className="bg-gray-400">   
       <Heading />
       <Slider />
    </div>
)
}