import * as React from "react"
import { Link } from "gatsby"
import Zedappimg from "../images/zedapp.png"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div>
      <div className="main">
        <Seo title="Home" />

        <div class="grid grid-cols-1  md:grid-cols-2 gap-7 mt-7  md:mt-20 lg:mt-36">
          <div className=" mt-28 text-center md:text-left ml-0 md:ml-5 lg:ml-0">
            <h1 className="font-poppins text-4xl md:text-4xl lg:text-5xl leading-normal text-blue-900">
              Make payments with your airtime!
            </h1>

            <p className="font-poppins text-sm text-gray-500 tracking-wide leading-loose">
              Pay bills, Buy subscriptions, Pay for online services, and more!{" "}
              <p className="text-blue-700 italic ml-0 md:ml-10 lg:ml-0">
                All on Zeddpay!
              </p>
            </p>
            <div>
              <Link to="/">
                <button className="bg-blue-900 font-poppins border text-white border-white-500 rounded-lg w-32 h-12 text-sm hover:scale-105 ease-out duration-200 ml-0 md:ml-9 lg:m-0">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          <div className="zedapp bg-blue-900 rounded-full mt-0 md:mt-20 lg:mt-0 md:h-4/5 lg:h-full">
            <img src={Zedappimg} alt="Mobile phone showing Zeddapp" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16 md:mt-28">
          <div class="bg-slate-800 rounded-lg overflow-hidden hover:scale-105 ease-out duration-200 font-righteous">
            <div class="m-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <p class="text-base leading-relaxed text-white text-center">
                <a className="text-blue-700">Zeddpay</a> converts your airtime
                to zeddcoin within minutes.
              </p>
            </div>
          </div>

          <div class="bg-slate-800 rounded-lg overflow-hidden hover:scale-105 ease-out duration-200 font-righteous">
            <div class="m-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p class="text-base leading-relaxed text-white text-center">
                <a className="text-blue-800">Zeddpay</a> enables users easily
                make purchases with airtime.
              </p>
            </div>
          </div>
          <div class="bg-slate-800 rounded-lg overflow-hidden hover:scale-105 ease-out duration-200 font-righteous">
            <div class="m-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <p class="text-base leading-relaxed text-white text-center">
                <a className="text-blue-800">Zeddpay</a> offers a secure and
                safe transaction process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script
      dangerouslySetInnerHTML={{
        __html: `
    console.log('Plain JavaScript inside Gatsby!');
`,
      }}
    />
  </Layout>
)

export default IndexPage
