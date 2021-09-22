import React from "react"

export default function heroSection({ children }) {
  return (
    <div className="w-full lg:h-600 p-10 lg:p-20 m-2">
      {/* heading */}
      <div className=" flex w-full justify-center flex-col items-center text-center lg:text-start">
        <h1 className="text-white text-7xl">Crypto NFT </h1>
        <h1 className="text-blue-200 pt-10 text-2xl">
          Mollit veniam aliqua ea eiusmod ut cupidatat minim magna est labore
          deserunt culpa. Incididunt eiusmod aute anim aliquip nisi proident
          anim incididunt enim nulla in. Duis laborum deserunt esse duis ut
          aliquip cillum anim reprehenderit occaecat minim. Irure nulla
          incididunt culpa est consectetur proident officia. Officia consequat
          aute enim consectetur dolor. Ullamco duis cupidatat qui eu esse est.
          Adipisicing ad ex commodo deserunt.
        </h1>
        <div className=" mt-10 mb-10 w-full justify-center flex">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 shadow-md rounded text-white text-md px-2 py-1 mr-4 flex  ">
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
          <button className=" bg-white backdrop-filter backdrop-blur-xl shadow-md bg-opacity-10 rounded text-blue-300 text-md px-2 py-1 flex   ">
            Read Docs
          </button>
        </div>
      </div>
    </div>
  )
}
