import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Media from 'react-media'
import Sidebar from "./sidebar"

const Main = (props) => (
  <div
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
    <Media query={{ maxWidth: 848 }}>
      {matches =>
        matches ? (
          <>
            <div style={{
              flex: 1,
              paddingBottom: "25px"
            }}>
              {props.children}
            </div>
            <div style={{ flex: 1 }}>
              <Sidebar
                title="ecomuix"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <Sidebar
                title="About tldev"
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
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                {props.children}
              </div>
              <div style={{ flex: 1 }}>
                <Sidebar
                  title="ecomuix"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Sidebar
                  title="About tldev"
                  description="Excepteur sint occaecat cupidatat non proident, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </div>
            </div>
          )}
    </Media>
    <footer
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
      }}
    >
      tldev © {new Date().getFullYear()}
    </footer>
  </div>
);

export default Main
