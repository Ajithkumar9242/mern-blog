import React from 'react'
import './SinglePost.css'

function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          <img src="https://images.unsplash.com/photo-1667003829941-c79aa9760ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Flower pic" className="singlePostImg" />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam nobis voluptatum ullam placeat expedita, reprehenderit doloribus a rerum aliquam?
            <div className="singlePostEdit">
              <i className='far fa -edit'></i>
              <i className='far fa -trash-alt'></i>
            </div>
          </h1>
        <div className="singlePostInfo">
          <span className="singlePostDate">
            1 hour ago
          </span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo hic dolore nisi qui corporis omnis error, animi totam, distinctio eaque cum, assumenda ab! Atque doloremque, illum corrupti cupiditate architecto non modi nobis asperiores accusamus! Eveniet quam fugiat harum, ipsa beatae aspernatur ipsum quae impedit atque ab reiciendis, doloremque aliquam.</p>
        </div>

    </div>
  )
}

export default SinglePost