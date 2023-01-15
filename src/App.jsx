import { React, useContext} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Topbar from './components/topbar/Topbar'
import { Context } from './context/Context';
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Register from './pages/register/Register'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Contact from './pages/contact/Contact';

function App() {
const { user } = useContext(Context)
  return (
    <Router>
      <Topbar />
        <Routes >
          <Route path='/' element={<Home />} />

          <Route path='/register' element={user ? <Home /> : <Register />}/>

          <Route path='/login' element={user ? <Home /> : <Login />} />

          <Route path='/contact' element={ <Contact />} />


          <Route path='/write' element={user ?<Write /> : <Register />} />

          <Route path='/post/:postId' element={<Single />} >

            
          </Route>
        </Routes>
    </Router>
  )
}

export default App