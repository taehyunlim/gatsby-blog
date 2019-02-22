import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div className="blog-post-container">
        <Helmet title={`ecomuix - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <h5>{post.frontmatter.date}</h5>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
            style={{ textAlign: "justify" }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`