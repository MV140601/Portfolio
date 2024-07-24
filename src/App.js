import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Workexp from './components/workexp'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#010e21] to-[#011b40]  m-0 p-0 box-border w-[100vw] h-[100vh]">
      <Navbar/>
 <Home/>
 <About/>
 <Workexp/>
 <Projects/>
     </div>
  )
}

export default App
