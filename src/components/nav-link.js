import React from "react"
import { Link } from "gatsby"

const linkStyles = {
  color: "white",
  display: "inline-block",
  textDecoration: "none",
}
const activeStyles = {
  color: "#59abe3",
}

const NavLink = ({ children, to }) => (
  <Link
    to={to}
    style={linkStyles}
    activeStyle={activeStyles}
    partiallyActive={true}
  >
    {children}
  </Link>
)
export default NavLink
