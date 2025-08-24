import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Pages/Hero'
import Header from './Components/Header'
import Galaxy from './Components/Galaxy'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { runAnimations } from './animation'


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    runAnimations();
  }, [])

  return (
    <div className=''>

      <Galaxy />
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App

{/* <div>
  <Card1 />
  <Card2 />
  <Card3 />
  <Card4 />
</div> */}