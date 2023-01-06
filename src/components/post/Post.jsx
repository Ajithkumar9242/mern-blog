import React from 'react'
import './Post.css'

function Post() {
  return (
    <div className='post'>
        <img src="https://images.unsplash.com/photo-1667003829872-96b43cf5cef0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="Forest pic" className="postImg" />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">MUSIC</span>
                <span className="postCat">LIFE</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, est!
            </span>
            <hr />
            <span className="postDate">
                Yesterday
            </span>
        </div>
        <p className="postDescr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus aut beatae doloribus repellat tempore temporibus neque laboriosam enim laborum!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ipsum accusamus delectus ipsa! Sapiente accusamus dolor beatae non, ipsam expedita vel porro iure suscipit aperiam tenetur nobis similique rem doloribus aliquid modi, laudantium quasi eaque illo natus maxime, recusandae numquam.
        </p>
    </div>
  )
}

export default Post