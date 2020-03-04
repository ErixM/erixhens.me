import React from "react"
import { Link } from "gatsby"

const linkStyles = {
  color: "white",
  border: "1px solid white",
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
  background: "#343633",
  borderRadius: "4px",
  opacity: "80%",
}
const activeStyles = {
  opacity: "20%",
}

const LangLink = ({ children, to }) => (
  <Link to={to} style={linkStyles} activeStyle={activeStyles}>
    {children}
  </Link>
)
export default LangLink
