const { slugify } = require("./src/util/utilityFunctions")
const path = require("path")
const authors = require("./src/util/authors.js")
const _ = require("lodash")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  // Page Templates
  const templates = {
    singlePostTemplate: path.resolve("src/templates/single-post.js"),
    tagsPage: path.resolve("src/templates/tags-page.js"),
    tag: path.resolve("src/templates/tag-posts.js"),
  }
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const posts = res.data.allMarkdownRemark.edges
    // start creating single-post-page
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.singlePostTemplate,
        context: {
          // Passing slug for templates to use to get post
          slug: node.fields.slug,
          // find author imageurl from authors.js and pass it to single post template
          imageUrl: authors.find(x => x.name === node.frontmatter.author)
            .imageUrl,
        },
      })
    })
    // start creating tags-page & tag-post
    let tags = []
    // get all tags
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // to know how many post has this tags
    let tagPostCounts = {}
    tags.forEach(tag => {
      // or zero it might cause not exist yet
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })
    // remove duplicate key
    // [design, code, code, design] -> [design, code]
    tags = _.uniq(tags)
    //Tags page (all tags)
    createPage({
      path: `/tags`,
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    })
    // tag post
    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tag,
        context: {
          tag
        }
      })
    })
  })
}
