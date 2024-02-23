import React from 'react'
import { BrowserRouter as Router ,Route ,Routes  } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import Register from './Register'
import Register1 from './Register1'
import Count from './Count'
import Arrayadd from './Arrayadd'
import New from './New'
import Fetch from './Fetch'
import Figma from './Figma'
function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/register1' element={<Register1/>}/>
        <Route path='/count' element={<Count/>} />
        <Route path='/arrayadd' element={<Arrayadd/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/fetch' element={<Fetch/>}/>
        <Route  path='/figma' element={<Figma/>}/>
      </Routes>
    
    </div>
  </Router> 
  
  )
}

export default App