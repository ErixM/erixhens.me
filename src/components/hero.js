import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-position: top 30% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 0;
  }
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const TextBox = styled("div")`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 calc(100vw - 550px) / 2) 2rem;
  width: 100%;
  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }
  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query MyQuery {
      image: file(relativePath: { eq: "alex.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 70, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <TextBox>
      <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <div>
          <h1 id="index-h1">Welcome to my website</h1>
          <p>other something</p>
        </div>
      </ImageBackground>
    </TextBox>
  )
}
export default Hero
