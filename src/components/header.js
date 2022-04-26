import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.css"
import Zedlogo from "../images/zedlogo.inline.svg"
const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar">
      <div class="flex justify-between ml-24 mr-20">
        <div class="hover:scale-105 ease-out duration-200">
          <Link to="/">
            <Zedlogo />
          </Link>
        </div>

        <div className="flex gap-10 mt-3 font-righteous text-blue-900 text-base ">
          <div>
            <Link to="/">
              <button className="">About</button>
            </Link>
          </div>

          <div>
            <Link to="/">
              <button className="">Faq</button>
            </Link>
          </div>

          <div>
            <Link to="/">
              <button className="">Contact Us</button>
            </Link>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="mt-3 font-righteous text-blue-900 text-base">
            <Link to="/">
              <button className="">Sign in</button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button className="bg-blue-900 font-poppins border text-white border-white-500 rounded-lg w-32 h-12 text-sm hover:scale-105 ease-out duration-150">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="mobilenav">
      <div className="flex flex-cols-2 justify-between">
        <div>
          <Link to="/">
            <Zedlogo />
          </Link>
        </div>
        <div className="mt-3 mr-5">
          <div id="menuToggle">
            <input type="checkbox" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#1E3A8A"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            <ul id="menu">
              <div className="mobilenavin flex flex-cols-2 justify-between">
                <div>
                  <Link to="/">
                    <Zedlogo />
                  </Link>
                </div>
                <div className="mt-3 mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#1E3A8A"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <div className="font-righteous text-blue-900 text-base ml-10 mb-16 mt-16">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Faq</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </div>
              <div className="flex flex-cols-2 justify-between mt-5 ml-10">
                <div className="flex gap-5">
                  <div className="font-righteous text-blue-900 text-base">
                    <Link to="/">
                      <button className="bg-blue-900 font-poppins border text-white border-white-500 rounded-lg w-32 h-12 text-sm hover:scale-105 ease-out duration-150">
                        Sign in
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <button className="bg-blue-900 font-poppins border text-white border-white-500 rounded-lg w-32 h-12 text-sm hover:scale-105 ease-out duration-150">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
