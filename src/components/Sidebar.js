import React from "react"
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Input,
} from "reactstrap"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import facebook from "../icons/facebook.svg"
import github from "../icons/github.svg"
import instagram from "../icons/instagram.svg"
import twitter from "../icons/twitter.svg"
import linkedin from "../icons/linkedin.svg"

const Sidebar = ({ authorFluid, author }) => (
  <div>
    {author && (
      <Card>
        <Img className="card-image-top" fluid={authorFluid} />
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            {author.name}
          </CardTitle>
          <CardText>{author.bio}</CardText>
          <div className="author-social-links text-center">
            <ul>
              <li>
                <a
                  href={author.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} width="30px" alt="facebook" />
                </a>
              </li>
              <li>
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} width="30px" alt="twitter" />
                </a>
              </li>
              <li>
                <a
                  href={author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} width="30px" alt="github" />
                </a>
              </li>
              <li>
                <a
                  href={author.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} width="30px" alt="instagram" />
                </a>
              </li>
              <li>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} width="30px" alt="linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    )}
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your email address..."
            />
          </FormGroup>
          <button className="btn btn-outline-success text-uppercase">
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="Advert"
          style={{ width: "100%" }}
        />
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Recent Post
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                const { image, title } = node.frontmatter
                return (
                  <Card key={node.id}>
                    <Link to={node.fields.slug}>
                      <Img
                        className="card-image-top"
                        fluid={image.childImageSharp.fluid}
                      />
                    </Link>
                    <CardBody>
                      <CardTitle>
                        <Link to={node.fields.slug}>{title}</Link>
                      </CardTitle>
                    </CardBody>
                  </Card>
                )
              })}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
