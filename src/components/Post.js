// import { Link } from "gatsby"
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
} from "reactstrap"
import React from "react"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"
import {Link} from "gatsby"
const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <Card>
      <Link to={slug}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span>&nbsp;by&nbsp;
          <span className="text-info">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <a href={`/tag/${slugify(tag)}`}>
                <h5>
                  <Badge color="primary">{tag}</Badge>
                </h5>
              </a>
            </li>
          ))}
        </ul>
        <Link to={slug} className="btn btn-primary float-right">
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
