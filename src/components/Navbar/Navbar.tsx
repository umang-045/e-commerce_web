import React from 'react'
import './Navbar.css'

const Navbar = () => {
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
      </div>
      </section>
    </>
  )
}

export default Navbar
