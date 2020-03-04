import React from "react"
import LayoutIt from "../components/layout-it"
import Hero from "../components/hero"

const HomePage = () => (
  <>
    <LayoutIt>
      <Hero />
      <h1>Benvenuti! Io sono Erixhens</h1>
      <p>Questo è il mio sito web personale</p>
      <p>
        È ancora solo un prototipo, perciò è probabile che cambierà nel tempo{" "}
        <span role="img">😅</span>
      </p>
    </LayoutIt>
  </>
)
export default HomePage
