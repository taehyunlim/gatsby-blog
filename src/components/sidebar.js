import React from "react"

const Sidebar = (props) => (
  <div
    style={{
      border: '2px solid #e3e3e3',
      maxWidth: 960,
      padding: '0.5rem 1rem',
      marginBottom: '25px'
    }}
  >
    <strong>{props.title}.</strong> {props.description}
  </div>
);

export default Sidebar
