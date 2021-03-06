import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="sticky top-0 z-10">
    <nav className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm  ">
      <div className="container mx-auto px-10 py-4 flex justify-between items-center">
        <a className="font-bold text-2xl lg:text-4xl text-black" href="...">
          {siteTitle}
        </a>
        {/* <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div> */}
        {/* <div class="hidden lg:block">
      <ul class="inline-flex">
        <li><a class="px-4 font-bold" href="/">Home</a></li>
        <li><a class="px-4 hover:text-gray-800" href="#">About</a></li>
        <li><a class="px-4 hover:text-gray-800" href="#">Contact</a></li>
      </ul>
    </div> */}
        <button className="bg-none border-solid border-white border-2 rounded text-white text-lg px-2 py-1  ">
          Connect Wallet
        </button>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
