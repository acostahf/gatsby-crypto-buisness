import React from "react"
import Card from "./card"

export default function cardSection (props) {
    return (
        <div className="h-96 w-full bg-blue-300">
      <Card {...props} />
    </div>
    )
}