import React, { useState } from 'react'
import './Navbar.css'
import Cart from '../Cart/cart';

const Navbar = ({quantity,cart}) => {
  const [ViewCart,setViewCart] = useState(false);
  return (
    <>
      <section>
      <div className='Navcontainer'>
        <div className='info'>
        <img className='logo' src='/menu(1).png' alt='More Info'></img>
        <div className='companylogo'>
        <img className='logo' src='/logo.png' alt='Ustore'></img> 
        <h1>Ustore</h1>
        </div>
        </div>
        <form className='Search_bar' method='GET'>
          <input className='input_box' type='text' name='query' placeholder='Search for Grocery,Stores,Vegetable or meat .....'></input>
          <button type='submit' ><img className='icon' src='/search.png'></img></button>
        </form>

        <p> ⚡Order now and get it within 15 mint!</p>  
        <div className='carticon' onClick={()=>{setViewCart(true)}}>
          <img className='logo' src='/cart.jpg' ></img>
        {quantity>0?<span className='quantity'>{quantity}</span>:null}
        </div>
      </div>
      </section>
      {ViewCart && (
        <Cart cartitems={cart}
        onClose={()=>
          setViewCart(false)
        }/>
    )}
    </>
  )
}

export default Navbar
