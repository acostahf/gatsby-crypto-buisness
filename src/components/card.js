import React from "react"
// import PropTypes from "prop-types"

function Button() {
  return (
    <div className=" flex justify-center pb-4 pt-10">
      <button className="z-0 bg-none border-solid border-blue-500 border-2 rounded text-sm px-4 py-2 text-blue-500 font-semibold">
        LEARN MORE
      </button>
    </div>
  )
}

export default function card(props) {
  return (
    <div className="lg:ml-10 lg:mr-10 mt-10 mb-10 ">
      <div className="justify-self-center  bg-white transform hover:scale-110 duration-500 motion-reduce:transform-none bg-opacity-25 backdrop-filter-blur shadow-md rounded flex justify-start items-center p-10 ">
        <div>
          <h1 className="text-black font-bold text-2xl py-2">{props.title}</h1>
          <h1 className="text-black font-bold text-sm py-2">{props.content}</h1>
          <Button />
        </div>
      </div>
    </div>
  )
}

// card.propTypes = {
//    title: PropTypes.string,
//   }
