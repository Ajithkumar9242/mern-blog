import { React , useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../components/header/Header'
import Posts from '../components/posts/Posts'
import Sidebar from '../components/sidebar/Sidebar'
import './Home.css'

function Home() {
   
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () =>{
      const res = await axios.get("api/posts")
      setPosts(res.data)
    }
  
    fetchPosts()
    
  }, [])
  

  return (
    <>
        <Header />
        <div className="home">
          <Posts posts={posts}/>
          <Sidebar />
        </div>
    </>
  )
}

export default Home