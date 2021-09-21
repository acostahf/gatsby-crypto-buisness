import React from "react"
import Q2 from "./q2"
import RmCard from "./rm-card"

const Roadmap = props => {
  return (
    <div className=" flex flex-col items-start space-y-10 w-full p-20">
      <RmCard />
      <Q2 />
    </div>
  )
}

export default Roadmap
