import axios from 'axios'
import { React, useState, useContext} from 'react'
import { Context } from '../../context/Context'
import './Write.css'

function Write() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const { user } = useContext(Context);

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const newPost = {
      username: user.username,
      title,
      desc
    }

    if(file){
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newPost.photo = filename

      try {
        await axios.post("/api/upload", data)
      } catch (error) {
        console.log(error)
      }
    }
    try {   
      const res = await axios.post("/api/posts", newPost)
      window.location.replace("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='write'>
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}
        <form action="" className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className='writeIcon fas fa-plus'></i>
            </label>
            <input type="file" name="" id="fileInput" style={{display: "none"}} onChange={e =>setFile(e.target.files[0])}/>
            <input type="text" name="" placeholder='Title' className='writeInput'  id="" onChange={e =>setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
                <textarea name="" placeholder='Write the content' className='writeInput writeText' id="" cols="30" rows="10"  onChange={e =>setDesc(e.target.value)}></textarea>
            </div>
            <button type="submit" className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write
