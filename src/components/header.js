import * as React from "react"
import { Link } from "gatsby"
import "./layout.css"
import Zedlogo from "../images/zedlogo.inline.svg"

const Header = () => (
  <header>
    <div class="navbar flex">
      <div class="flex-none ml-10 mr-10 pt-3">
        <Link to="/">
          <Zedlogo />
        </Link>
      </div>
      <div class="flex-grow font-poppins ml-14 mr-14 pt-4 text-slate-700 text-xs">
        <div class="flex pt-3 h-6">
          <div>
            <Link to="/">
              <button className="">Rates</button>
            </Link>
          </div>
          <div class="dropbtn w-10 ml-14">
            <div class="flex">
              <div>
                <Link to="/">
                  <button className="">Company</button>
                </Link>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-5 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div class="dropdown">
              <ul class=" animate-fade-in-up">
                <div class="innerdrop">
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div class="dropbtn w-10 ml-20">
            <div class="flex">
              <div>
                <button>Help</button>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-5 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div class="dropdown">
              <ul class=" animate-fade-in-up">
                <div class="innerdrop">
                  <li>
                    <a href="#">Live Chat</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-none  ml-10 mr-5 pt-4">
        <div class="text-xs text-slate-700 font-poppins pt-3">
          <Link to="/">
            <button className="">Sign in</button>
          </Link>
        </div>
      </div>
      <div class="flex-none ml-5 mr-24 pt-3 text-slate-700">
        <div class="flex gap-10 items-center">
          <div>
            <Link to="/">
              <button className="bg-slate-700 text-sm font-poppins border text-white rounded-lg w-32 h-11 hover:bg-transparent  ease-out duration-200 hover:border-2 border-slate-600  hover:text-slate-700">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
