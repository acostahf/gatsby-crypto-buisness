import React from "react"

export default function heroSection({ children }) {
  return (
    <div className="max-w-full p-0 ">
      {/* heading */}
      <div className=" flex justify-center flex-col items-center h-600 w-600 p-20">
        <h1 className="text-white text-7xl">Crypto Speedstars </h1>
        <h1 className="text-blue-200 pt-10 text-2xl">
          The Crypto Speedstars are the fastest racers on the crypto roads. Find
          us drifting the lonely mountain of Hash Mountain.
        </h1>
        <div className=" mt-10 w-full justify-center flex">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 rounded text-white text-md px-2 py-1 mr-4 flex  ">
            Lauch app{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-4 p-0 my-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className=" bg-white backdrop-filter backdrop-blur-xl bg-opacity-10 rounded text-blue-300 text-md px-2 py-1 flex   ">
            Read Docs
          </button>
        </div>
      </div>
    </div>
  )
}
