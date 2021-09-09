import React from "react"
import Card from "./card"


// this function acts as a wropper around the cards in order to style the layout 
export default function cardSection (props) {
    return (
        
        <div className="h-96 w-full bg-gradient-to-r from-green-400 to-blue-500  flex justify-center items-center space-x-32 flex-auto">
      <Card {...props} />
      <Card {...props} />
      <Card {...props} />
    </div>
    )
}