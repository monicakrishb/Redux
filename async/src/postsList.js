import { useSelector } from "react-redux";
import React from 'react'

const postsList = () => {
    const posts=useSelector(state=>state.posts)

    const renderPosts=post.map(post=>
        <article key={post.id}>
            <h3>{posts.title}</h3>
<p>{posts.content.substring(0,100)}</p>
        </article> 
    )
        return (
            <section>
        <h2>posts</h2>
        {renderedPosts}
        </section>
   )
}

export default postsList