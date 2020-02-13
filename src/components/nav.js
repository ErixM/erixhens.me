import React from "react"
import NavLink from "../components/nav-link"

const Nav = () => (
  <nav id="top-nav">
    <ul
      style={{
        padding: "0",
      }}
    >
      <li>
        <NavLink to="/">
          <span className="link-text">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          <span className="link-text">About</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">
          <span className="link-text" id="contactMe">
            Contact me!
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog">
          <span className="link-text">Blog</span>
        </NavLink>
      </li>
    </ul>
  </nav>
)
export default Nav
