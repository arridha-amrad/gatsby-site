import React from "react"
import { Button, Badge } from "reactstrap"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { slugify } from "../util/utilityFunctions"

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="All tags">
      <SEO title="All tags" keywords={["tags", "topics"]} />
      <ul>
        {tags.map(tag => (
          <li key={tag}>
            <Button
              color="primary"
              className="mt-2"
              href={`/tag/${slugify(tag)}`}
            >
              {tag}
              <Badge color="light">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TagsPage
