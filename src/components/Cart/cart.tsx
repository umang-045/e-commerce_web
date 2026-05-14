import React from 'react'
import { productList } from '../../data'

type DisplayProduct={
    id: number;
  name: string;
  shopType: string;
  weight: string;
  price: number;
  image: string;
  quantity?:number;
  totalPrice?:number;

}

const Cart = ({ cartitems, onClose }) => {
  const Displayitems = Object.keys(cartitems).map(id => {
    const product:DisplayProduct = productList.find(p => p.id === Number(id));
    return{
      ...product,
      quantity: cartitems[id],
      totalPrice: product.price * cartitems[id]
    };
  });
  const totalAmount = Displayitems.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalitem = Displayitems.reduce((sum, item) => sum + item.quantity, 0); 
 
  
  return (
    <>
      <div className='Description'>
        <h1>Your Cart</h1>
        <div className='Table data'>
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
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>
                <td>₹{item.totalPrice}</td>
              </tr>
            ))}
          </tbody>
      </div>
      <div className='Summary'>
        <h1>Total Items Selected :{totalitem}</h1>
        <h2>Total Amount:{totalAmount} </h2>

      </div>


      </div>
    </>
  )
}

export default Cart
