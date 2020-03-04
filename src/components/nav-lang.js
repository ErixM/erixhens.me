import React from "react"
import LangLink from "../components/lang-link"

const NavLang = () => (
  <nav id="lang-nav">
    <ul>
      <li>
        <LangLink to="/index-it">
          <span className="link-text">IT</span>
        </LangLink>
      </li>
      <li>
        <LangLink to="/">
          <span className="link-text">EN</span>
        </LangLink>
      </li>
    </ul>
  </nav>
)
export default NavLang
