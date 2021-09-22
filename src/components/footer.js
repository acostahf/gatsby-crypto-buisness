import React from "react"
// import {} from "@heroicons/react"

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-2 h-100 bg-black bg-opacity-25 backdrop-filter backgdrop-blur-sm">
      <div className="flex items-end ">
        © {new Date().getFullYear()}, Built By
        {` `}
        <a href="https://fabianacosta.netlify.app/">Fabian</a>
      </div>
      <div className="flex justify-center items-center text-white font-bold text-2xl">
        <h1>socials here</h1>
      </div>
    </div>
  )
}

export default Footer
