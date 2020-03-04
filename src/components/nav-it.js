import React from "react"
import NavLink from "../components/nav-link"

const NavIt = () => (
  <nav id="top-nav">
    <ul
      style={{
        padding: "0",
      }}
    >
      <li>
        <NavLink to="/index-it">
          <span className="link-text">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-it">
          <span className="link-text">Chi sono</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-it">
          <span className="link-text" id="contactMe">
            Contattatemi!
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog-it">
          <span className="link-text">Blog</span>
        </NavLink>
      </li>
    </ul>
  </nav>
)
export default NavIt
