import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
function App() {

  return (
    <div className='bg-gray-900'>
      <Navbar />
      <div className='max-w-app-container m-auto pt-20'>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
