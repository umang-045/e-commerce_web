import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import Products from './components/Products/Products'
import FeaturedStores from './components/FeaturedStores'
import BestSellingItem from './components/BestSellingItem'
import Promotion from './components/Promotion'
import Footer from './components/Footer'
import './App.css'
import { productList } from './data'

type cart={
  id:number,
  quantity:number,
}


function App() {
  const [cart,setCart] = useState<cart|{}>({})

const addToCart =(id:number)=>{
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
}
const removeFromCart = (id: string | number) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] <= 1) {
        delete updated[id];
      } else {
        updated[id] -= 1;
      }
      return updated;
    });
  };
  let quantity:number=0;
  for(const key in cart){
     quantity+=cart[key];
  }

  const [searchQuery,setsearchQuery]= useState(" ");
  const searchResult =searchQuery.length>0 ? productList.filter((product)=>
    product.name.toLowerCase().startsWith(searchQuery.toLowerCase())).slice(0,5):[];
  

  return (
    <>
      <div className='MainContainer' >
        <Navbar quantity={quantity} cart={cart} setSearchQuery={setsearchQuery} searchResult={searchResult}/>
        <Card />
        <Products Productdata={productList} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
    </>
  )
}

export default App
