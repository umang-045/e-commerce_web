import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <>
      <div className='Card_container'>
        <div>
          <h1>We bring the store</h1>
          <h1>to your door</h1>
          <p>
            Get organic produce and sustainably sourced
            <br></br>
            groceries delivery at up to 4 % off grocery
          </p>
        <button>Shop now</button>
        </div>
      <img src='/basket.png'></img>
      </div>
    </>
  )
}


export default Card
