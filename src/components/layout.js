import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Media from 'react-media'
import Sidebar from "./sidebar"
import "./layout.css"
import "./layout-overide.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', border: '5px solid #414141' }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          style={{
            margin: "0 auto",
            maxWidth: 980,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
            height: "100%",
            padding: "1.0875rem"
          }}>
          <Media query={{ maxWidth: 980 }}>
            {matches =>
              matches ? (
                <>
                  <div style={{
                    flex: 1,
                    paddingBottom: "25px"
                  }}>
                    {children}
                  </div>
                  <div style={{ flex: 1 }}>
                    <Sidebar
                      title="ecomuix"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <Sidebar
                      title="about author"
                      description="Excepteur sint occaecat cupidatat non proident, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  </div>
                </>
              ) : (
                  <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                    <div style={{ flex: 2, paddingRight: "7%" }}>
                      {children}
                    </div>
                    <div style={{ flex: 1 }}>
                      <Sidebar
                        title={data.site.siteMetadata.title}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      />
                      <Sidebar
                        title="about author"
                        description="Excepteur sint occaecat cupidatat non proident, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      />
                    </div>
                  </div>
                )}
          </Media>
        </main>
        <footer
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            maxWidth: "980px",
            margin: "0 auto",
            padding: "1rem",
            fontSize: "13px"
          }}
        >
          tldev © {new Date().getFullYear()}
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
