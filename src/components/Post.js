import { Link } from "gatsby"
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

const Post = ({ title, author, path, date, body, fluid, tags }) => {
  return (
    <Card>
      <Link to={path}>
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
              <Link to={`/tag/${slugify(tag)}`}>
                <h5>
                  <Badge color="primary">{tag}</Badge>
                </h5>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={path} className="btn btn-primary float-right">
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
