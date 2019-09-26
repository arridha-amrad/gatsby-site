import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageTitle="Oops, something went wrong">
    <SEO title="404: Not found" />
    <Link className="btn btn-outline-primary text-uppercase">Back to home</Link>
  </Layout>
)

export default NotFoundPage
