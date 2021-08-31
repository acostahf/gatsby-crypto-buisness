import React from "react"

export default function cardSection ({children}) {
    return (
        <div className="h-96 w-full bg-blue-300">
      <div>
        <h1 className="font-bold text-xl">Section with our features</h1>
      </div>
      <div class="grid grid-cols-3 h-96 ">
        <div className="flex justify-center  ">
          {/* card */}
          <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 backdrop-filter-blur h-64 ">
          <h1>Free drops daily </h1>
          <p>Every 4 hours we drop free tokens into random wallets. This insures by holding our tokens you are auto enter into a free giveawey. The more you hold the better your chances will be!</p>
          </div>
        </div>
        <div className="flex justify-center">
           {/* card */}
           <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 backdrop-filter-blur">
          <h1>Free drops daily </h1>
          <p>Every 4 hours we drop free tokens into random wallets. This insures by holding our tokens you are auto enter into a free giveawey. The more you hold the better your chances will be!</p>
          </div>
        </div>
        <div className="flex justify-center">
           {/* card */}
           <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 backdrop-filter-blur">
          <h1>Free drops daily </h1>
          <p>Every 4 hours we drop free tokens into random wallets. This insures by holding our tokens you are auto enter into a free giveawey. The more you hold the better your chances will be!</p>
          </div>
        </div>
      </div>
    </div>
    )
}