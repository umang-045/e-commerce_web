import React from 'react'
import { productList } from '../../data'
import './cart.css'

type DisplayProduct = {
  id: number;
  name: string;
  shopType: string;
  weight: string;
  price: number;
  image: string;
  quantity?: number;
  totalPrice?: number;

}

const Cart = ({ cartitems, onClose }) => {
  const Displayitems = Object.keys(cartitems).map(id => {
    const product: DisplayProduct = productList.find(p => p.id === Number(id));
    return {
      ...product,
      quantity: cartitems[id],
      totalPrice: product.price * cartitems[id]
    };
  });
  const totalAmount = Displayitems.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalitem = Displayitems.reduce((sum, item) => sum + item.quantity, 0);


  return (
    <>
    <div className="cart_overlay" onClick={onClose}>
      <div className="cart_main" onClick={(e:React.MouseEvent)=>e.stopPropagation()}>
      <div className='Description'>
        <h1>Your Cart</h1>
        <div>
          <table className='TableData'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Displayitems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="productRow">
                      <img className='cartitemImg' src={item.image}></img>
                      <p>{item.name}</p>
                    </div>
                  </td>
                  <td>₹{item.price}/-</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.totalPrice}/-</td>
                </tr>
              ))}
              </tbody>
              <tfoot>
              <tr>
                <td>Total Items Selected</td>
                <td>-</td>
                <td>{totalitem}</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Total Cart Amount</td>
                <td>- </td>
                <td> -</td>
                <td>₹{totalAmount}/- </td>   
              </tr>
            </tfoot>
          </table>
          <div className='cartdisplayButton'>
          <button className='cartClose' onClick={onClose}>Add More Items</button>
          <button className='cartClose' >Purchase now</button>
         </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Cart
