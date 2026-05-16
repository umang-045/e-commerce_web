import React from 'react'
import './Products.css'
import type { Product } from '../../data'
import { useRef } from 'react'


const Products = ({ Productdata, cart, addToCart, removeFromCart }) => {
  const scrollRef = useRef(null);
  const handleNextSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 800,
        behavior: 'smooth'
      })
    }
  };
  const handlePrevSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -800,
        behavior: 'smooth'
      })
    }
  };
  return (
    <div>
      <div className="ProductContainer">
        <h1>You might need</h1>
        <div className='SlideWrap'>
          <div className="productBox" ref={scrollRef}>
            {Productdata.map((Product) => {
              const quantity = cart[Product.id] || 0;
              return (
                <div className='productCard' key={Product.id}>
                  <img src={Product.image}></img>
                  <div className='ProductInfo'>
                    <p>{Product.name}<br />
                      ({Product.shopType})
                      <br />
                      {Product.weight}
                    </p>
                    <h1>₹{Product.price}/-</h1>
                  </div>
                  {quantity === 0 ?
                    (<button className='plusButton' onClick={() => { addToCart(Product.id) }}>+</button>) : (
                      <div className='cartButtons'>
                        <button className='plusButton' onClick={() => { removeFromCart(Product.id) }}>-</button>
                        <p>{quantity}</p>
                        <button className='plusButton' onClick={() => { addToCart(Product.id) }} >+</button>
                      </div>
                    )}
                </div>
              )
            })}
          </div>
          <button className="slideArrow" onClick={handleNextSlide}>
            &#10142;
          </button>
           <button className="slideArrowleft" onClick={handlePrevSlide}>
           &#8592;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
