import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Weclome to my blog</h1>
    <p>This blog is currently under construction.<br /></p>
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div style={{ border: '2px solid #e3e3e3', padding: '0.5rem 1rem' }}>
      <strong>recent posts.</strong>
      <ul style={{ marginBottom: 0, listStyleType: 'none' }}>
        {data.allMarkdownRemark.edges.map(post => (
          <li
            key={post.node.frontmatter.path}
            style={{ margin: '5px 0px', fontSize: '14px' }}
          >
            <a href={post.node.frontmatter.path}>{post.node.frontmatter.title}</a>
            <small style={{ paddingLeft: '0.75rem', float: 'right' }}>{post.node.frontmatter.date} hours ago</small>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            date(difference: "hours")
          }
        }
      }
    }
  }
`

export default IndexPage
