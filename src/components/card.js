import React from'react'
// import PropTypes from "prop-types"

export default function card (props) {
    return (
        <div className="bg-red-800 w-64 h-64 rounded flex flex-col justify-center items-center p-10">
            <div className="bg-yellow-200 w-full h-10  ">
                <h1>{props.title}</h1>
                {/* <h1>{{content}}</h1>
                <button>{{cta}}</button> */}
            </div>
        </div>
    )
}

// card.propTypes = {
//    title: PropTypes.string,
//   }