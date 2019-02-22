import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Author" />
    <h1>About Author</h1>
    <p>This is the about page.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
