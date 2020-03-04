import React from "react"
import LayoutIt from "../components/layout-it"
import PageSection from "../components/page-section"
export default () => (
  <LayoutIt>
    <PageSection>
      <h1 className="top-title">Chi sono</h1>
      <p>
        Sono <span title="Si legge Erigens">Erixhens</span> Muka. Ho 25 anni e
        sono appassionato di sviluppo web. Sono di origine albanese e vivo in
        Italia da 17 anni. So usare HTML/CSS/Javascript e da poco ho imparato
        anche{" "}
        <a title="Reactjs" href="https://reactjs.org/">
          <strong>React</strong>
        </a>
        !
      </p>
    </PageSection>
  </LayoutIt>
)
