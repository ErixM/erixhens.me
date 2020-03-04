import React from "react"
import LayoutIt from "../components/layout-it"

const NotFound = () => {
  return (
    <LayoutIt>
      <h1 className="top-title">
        Pagina non trovata{" "}
        <span role="img" aria-label="eyes">
          👀
        </span>
      </h1>
    </LayoutIt>
  )
}
export default NotFound
