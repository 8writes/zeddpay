/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <div
        className="font-poppins text-slate-600"
        style={{
          margin: `0 auto`,
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

        <div class="fifth-section font-open w-full mt-14 pt-14 mb-14 border-t-2 border-fuchsia-50">
      <div class="flex flex-col  sm:flex-row gap-5 sm:gap-14 lg:gap-24 xl:gap-36 m-auto max-w-5xl ">
        <div class="w-32">
          <div class="flex flex-col">
            <div class="w-32">
              <Link to="/">
                <Zedlogo />
              </Link>
            </div>
            <div>
             
            </div>
          </div>
        </div>
       
          <div class="flex flex-col pt-2">
            <div>
              <h4>Product </h4>
            </div>
            <div>
              <ul class="text-xs m-0">
                <li>
                  <a href="#">Create Account</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
       
          <div class="flex flex-col pt-2">
            <div>
              <h4>Company </h4>
            </div>
            <div>
              <ul class="text-xs m-0">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col pt-2">
            <div>
              <h4>Legal </h4>
            </div>
            <div>
              <ul class="text-xs m-0">
                <li>
                  <a href="#">Terms of Services</a>
                </li>
                <li>
                  <a href="#">Privacy Guidelines</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col pt-2">
            <div>
              <h4>Help </h4>
            </div>
            <div>
              <ul class="text-xs m-0">
                <li>
                  <a href="#">Live Chat</a>
                </li>
                <li>
                  <a href="#">Faq</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
      </div>
      
           <footer className="footer">
          © {new Date().getFullYear()}, <a href="#"> Designed by Me.</a>
      </footer>
      
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
