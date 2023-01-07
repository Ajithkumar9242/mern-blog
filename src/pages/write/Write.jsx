import React from 'react'
import './Write.css'

function Write() {
  return (
    <div className='write'>
        <img src="https://images.unsplash.com/photo-1667334070905-40ff74a68c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" className="writeImg" />
        <form action="" className="writeForm">
            <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className='writeIcon fas fa-plus'></i>
            </label>
            <input type="file" name="" id="fileInput" style={{display: "none"}}/>
            <input type="text" name="" placeholder='Title' className='writeInput'  id="" />
            </div>
            <div className="writeFormGroup">
                <textarea name="" placeholder='Write the content' className='writeInput writeText' id="" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write