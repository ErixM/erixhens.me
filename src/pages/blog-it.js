import React from "react"
import LayoutIt from "../components/layout-it"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"
//import ReadLink from "../components/read-link"

export default () => {
  const posts = usePosts()
  return (
    <LayoutIt>
      <h1 className="top-title">My blog!</h1>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </LayoutIt>
  )
}
