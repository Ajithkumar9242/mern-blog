import { React , useState, useEffect, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import axios from 'axios'
import './SinglePost.css'

function SinglePost() {
  const PF = "http://localhost:4000/images/"
 
   const { user } = useContext(Context)

  const location = useLocation()

  const path = location.pathname.split("/")[2]

  const [post, setPost] = useState({})

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setUpdateMode] = useState(false)


  useEffect(() => {
    
    const getPost = async () =>{
      const res = await axios.get("/api/posts/" + path)
      setPost(res.data)
    }
    getPost()
  }, [path])
  

  const handleDelete = async () =>{
    try {
      await axios.delete("/api/posts/" + path , {data: {username: user.username}})
      window.location.replace("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
      {post.photo && (
        <img src={PF + post.photo} alt="Flower pic" className="singlePostImg" />

      )}

          <h1 className="singlePostTitle">
          {post.title}
          {post.username === user.username && (

            <div className="singlePostEdit">
              <i className='fas fa-edit'></i>
              <i className='fas fa-trash-alt' onClick={handleDelete}></i>
            </div>
              )}
          </h1>
        <div className="singlePostInfo">
        <span className="singlePostAuthor">
            Author:
            
              <b> {post.username}</b>
            
          </span>
          <span className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className='singlePostDesc'>
        {post.desc}  
          </p>
        </div>

    </div>
  )
}

export default SinglePost