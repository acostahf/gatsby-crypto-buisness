import React from'react'
// import PropTypes from "prop-types"

function Button () {
    return(
        <div className=""> 
            <button className=" bg-none border-solid border-blue-500 border-2 rounded text-sm px-4 py-2 text-blue-500 font-semibold mt-10">LEARN MORE</button>
        </div>
    )
}

export default function card (props) {
    return (
        <div className="bg-white transform hover:scale-110 duration-500 motion-reduce:transform-none bg-opacity-25 backdrop-filter-blur w-64 h-64 rounded flex flex-col justify-start items-center p-10 ">
            <div className=" w-full h-10">
                <h1 className="text-black font-bold text-lg">{props.title}</h1>
                <h1 className="text-black font-bold ">{props.content}</h1>
                <Button />
            </div>
        </div>
    )
}

// card.propTypes = {
//    title: PropTypes.string,
//   }