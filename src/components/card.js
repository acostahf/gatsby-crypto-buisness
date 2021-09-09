import React from'react'
// import PropTypes from "prop-types"

function Button () {
    return(
        <div className=" flex justify-center py-2"> 
            <button className="bg-none border-solid border-blue-500 border-2 rounded text-sm px-4 py-2 text-blue-500 font-semibold">LEARN MORE</button>
        </div>
    )
}

export default function card (props) {
    return (
        <div className="bg-white m-2 transform hover:scale-110 duration-500 motion-reduce:transform-none bg-opacity-25 backdrop-filter-blur w-64 rounded flex flex-col justify-start items-center p-8 ">
            <div className="w-full">
                <h1 className="text-black font-bold text-lg py-2">{props.title}</h1>
                <h1 className="text-black font-bold text-sm py-2">{props.content}</h1>
                <Button />
            </div>
        </div>
    )
}

// card.propTypes = {
//    title: PropTypes.string,
//   }