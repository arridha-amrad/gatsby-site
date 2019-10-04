import React from "react"
import facebook from "../icons/facebook.svg"
import github from "../icons/github.svg"
import instagram from "../icons/instagram.svg"
import twitter from "../icons/twitter.svg"
import linkedin from "../icons/linkedin.svg"

const Footer = () => {
  return (
    <div className="site-footer">
      <h4 className="text-center">CodeBlog</h4>

      <p className="text-center">Follow us on social media</p>
      <div className="footer-social-links">
        <ul className="social-links-list">
          <li>
            <a
              href="http://www.instagram.com"
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} width="30px" alt="" />
            </a>
          </li>
          <li>
            <a
              href="http://www.instagram.com"
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} width="30px" alt="" />
            </a>
          </li>
          <li>
            <a
              href="http://www.instagram.com"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <img src={instagram} width="30px" alt="" />
              </i>
            </a>
          </li>
          <li>
            <a
              href="http://www.instagram.com"
              className="google"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} width="30px" alt="" />
            </a>
          </li>
          <li>
            <a
              href="http://www.instagram.com"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} width="30px" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
