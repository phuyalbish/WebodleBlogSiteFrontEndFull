import React,  { useState, useEffect } from 'react'
import PostItem from '../components/PostItem'
import {DUMMY_JSON} from '../data.js'

const WriterPosts = () => {
  const [posts, setPosts] = useState(DUMMY_JSON);

return (
    <section className="posts">
      {
        (posts.length > 0) ? <div className="container author_posts_container">
         {
        posts.map(({id, userId, title, body, thumbnail, category}) => <PostItem key={id} category={category} postId={id} thumbnail={thumbnail} userId={userId} title={title} body={body}/>)
      }
      </div>:
      <div className="author_posts_container"><h3>No Posts Found!</h3></div>
      }
    </section>
  )

}
export default WriterPosts