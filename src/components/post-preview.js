import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import ReadLink from "../components/read-link"

const PostPreview = ({ post }) => (
  <article css={css`
    width: 60%;
    margin: 0 auto;
  `}>
    <Link
      to={post.slug}
      css={css`
        margin:  1rem 0 0;
        width: 100px;
      `}
    ></Link>
    <div
      css={css`
        border-bottom: 1px solid grey;
      `}
    >
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </article>
)

export default PostPreview
