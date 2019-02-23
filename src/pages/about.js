import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Author" />
    <h1>About Author</h1>
    <p>This is the about page.</p>
    Contact: <code style={{ fontSize: '11px', marginLeft: '10px', padding: '0 5px', verticalAlign: 'middle' }}> taehyun (dot) lim (at) gmail </code>
  </Layout>
)

export default SecondPage
