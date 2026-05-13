import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import Products from './components/Products'
import FeaturedStores from './components/FeaturedStores'
import BestSellingItem from './components/BestSellingItem'
import Promotion from './components/Promotion'
import Footer from './components/Footer'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='MainContainer' >
        <Navbar />
        <Card />
      </div>

    </>
  )
}

export default App
