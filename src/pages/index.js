import * as React from "react"
import { Link } from "gatsby"
import Zedappimg from "../images/zedapp.png"
import Stepiii from "../images/step3.png"
import Stepii from "../images/step2.png"
import Stepi from "../images/step1.png"
import Layout from "../components/layout"
import Seo from "../components/seo"
const IndexPage = () => (
  <Layout>
    <div>
      <div className="main">
        <Seo title="Home" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7  md:mt-20 lg:mt-36">
          <div className=" mt-32 text-center md:text-left ml-0 md:ml-5 lg:ml-0">
           <h1 className="font-poppins text-4xl sm:text-4xl lg:text-5xl leading-normal text-slate-700">
              Make payments with your airtime!
            </h1> 

            <p className="font-poppins text-1xl sm:text-sm tracking-wide ">
              Pay your bills, subscriptions, online services on Zeddpay!
            </p>
  
            <div>
               <Link to="/">
                <button className="sm:bg-slate-700 bg-transparent border-2 border-slate-600 text-slate-700 text-sm font-poppins sm:text-white rounded-lg w-32 h-11 sm:hover:bg-transparent sm:hover:border-2 sm:border-slate-600  sm:hover:text-slate-700 sm:hover:scale-105 ease-out duration-200">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

           <div class="">
        <div className="zedapp bg-slate-100 rounded-lg">
          <img src={Zedappimg} alt="Mobile phone showing Zeddapp" />
        </div>
      </div>
        </div>

       
        <div className="text-center mt-28 md:mt-36">
             <h1 className="font-poppins text-3xl text-slate-500">
          Get started in 3 easy steps.
        </h1>
        <h2 className="text-sm leading-normal">
          How to convert your Airtime to Zeddcoin and easily make purchases on
          Zeddpay!
        </h2>
        </div>

        <div className="sliderc">
          <div class="slider mt-10">
            <div className="">
               <div className="fade-out">
              <div className="arrownext">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
                </div>
              </div>
              <div className="child bg-blue-900 rounded-lg lg:hover:scale-105 ease-out duration-200">
                <div className="text-center mt-5">
                  <h1 className="text-3xl text-white md:text-4xl lg:text-2xl leading-normal font-poppins">
                    STEP 1
                  </h1>
                </div>
                <div className=" ">
                  <div className="zedapp rounded-full mt-0 md:mt-20 lg:mt-0 md:h-4/5 lg:h-full">
                    <h2 className="text-center text-base md:text-4xl lg:text-base text-white leading-normal font-poppins">
                      Create a free Zeddpay account.
                    </h2>

                    <img
                      src={Stepi}
                      alt="Mobile phone showing Zeddapp step 1"
                    />
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="child bg-blue-900 rounded-lg md:hover:scale-105 ease-out duration-200">
                <div className="text-center mt-5">
                  <h1 className="text-3xl text-white md:text-4xl lg:text-2xl leading-normal font-poppins">
                    STEP 2
                  </h1>
                </div>
                <div className=" ">
                  <div className="zedapp rounded-full mt-0 md:mt-20 lg:mt-0 md:h-4/5 lg:h-full">
                    <h2 className="text-center text-base md:text-4xl lg:text-base text-white leading-normal font-poppins">
                      Fund your wallet with Airtime.
                    </h2>

                    <img
                      src={Stepii}
                      alt="Mobile phone showing Zeddapp step 1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="child bg-blue-900 rounded-lg md:hover:scale-105 ease-out duration-200">
                <div className="text-center mt-5">
                  <h1 className="text-3xl text-white md:text-4xl lg:text-2xl leading-normal font-poppins">
                    STEP 3
                  </h1>
                </div>
                <div className=" ">
                  <div className="zedapp rounded-full mt-0 md:mt-20 lg:mt-0 md:h-4/5 lg:h-full">
                    <h2 className="text-center text-base md:text-4xl lg:text-base text-white leading-normal font-poppins">
                      Start Spending!
                    </h2>
                    <img
                      src={Stepiii}
                      alt="Mobile phone showing Zeddapp step 1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="steps grid grid-cols-3 gap-7 mt-16">
          <div className="bg-blue-900 rounded-lg md:hover:scale-105 ease-out duration-200">
            <div className="text-center mt-5">
              <h1 className="text-4xl text-white md:text-4xl lg:text-2xl leading-normal font-poppins">
                STEP 1
              </h1>
            </div>
            <div className=" ">
              <div className="zedapp rounded-full mt-0 md:mt-20 lg:mt-0 md:h-4/5 lg:h-full">
                <h2 className="text-center text-4xl md:text-4xl lg:text-base text-white leading-normal font-poppins">
                  Create a free Zeddpay account.
                </h2>

                <img src={Stepi} alt="Mobile phone showing Zeddapp step 1" />
              </div>
            </div>
          </div>
          <div className="bg-blue-900 rounded-lg md:hover:scale-105 ease-out duration-200">
            <div className="text-center mt-5">
              <h1 className="text-4xl text-white md:text-4xl lg:text-2xl leading-normal font-poppins">
                STEP 2
              </h1>
            </div>
            <div className=" ">
              <div className="zedapp rounded-full mt-0 md:mt-20 lg:mt-0 md:h-4/5 lg:h-full">
                <h2 className="text-center text-4xl md:text-4xl lg:text-base text-white leading-normal font-poppins">
                  Fund your wallet with Airtime.
                </h2>

                <img src={Stepii} alt="Mobile phone showing Zeddapp step 1" />
              </div>
            </div>
          </div>
          <div className="bg-blue-900 rounded-lg md:hover:scale-105 ease-out duration-200">
            <div className="text-center mt-5">
              <h1 className="text-4xl text-white md:text-4xl lg:text-2xl leading-normal font-poppins">
                STEP 3
              </h1>
            </div>
            <div className=" ">
              <div className="zedapp rounded-full mt-0 md:mt-20 lg:mt-0 md:h-4/5 lg:h-full">
                <h2 className="text-center text-4xl md:text-4xl lg:text-base text-white leading-normal font-poppins">
                  Start Spending!
                </h2>
                <img src={Stepiii} alt="Mobile phone showing Zeddapp step 1" />
              </div>
            </div>
          </div>
        </div>
     
      </div>
 
      </div>
    </div>
 
  </Layout>
)

export default IndexPage
