import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

function Post({post}) {
    const PF = "http://localhost:4000/images/"
  return (
    <div className='post'>
        {post.photo && (
        <img src={PF + post.photo} alt="Forest pic" className="postImg" />
        )}

        <div className="postInfo">
            <div className="postCats">
                {
                    post.categories.map(c =>(
                        <span className="postCat">{c.name}</span>

                    ))
                }
            </div>
            <Link to={`/post/${post._id}`}>
            <span className="postTitle">
                {post.title}
            </span>
            </Link>
            <hr />
            <span className="postDate">
                {new Date(post.createdAt).toDateString()}
            </span>
        </div>
        <p className="postDescr">
            {post.desc}  
        </p>
    </div>
  )
}

export default Post