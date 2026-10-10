import React from 'react'
import { useCart } from '../src/context/CartContext'

const Cart = () => {

    const { cart,
        increaseQuantity ,
        decreaseQuantity
    } = useCart();

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity, 0 
    )

    const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0  
    ) 

    const handleOredrNow = () => {
        alert("Order placed successfully!")
    }


  return (
    <div className='container mt-4'>

        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
            <h3>Cart is Empty</h3>
        ) : ( 
            <> 
              <table className='table table-bordered table-stripped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead> 

                    <tbody>
                     {cart.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>
                                <button 
                                className='btn btn-danger btn-sm'
                                onClick={() => decreaseQuantity(item.id)}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button 
                                className='btn btn-success btn-sm'
                                onClick={() => increaseQuantity(item.id)}
                                >
                                    +
                                </button>
                            </td>
                            <td>₹ {item.price * item.quantity}</td>
                        </tr>
                     ))}    
                    </tbody>
              </table>

              <div className='card-mt-4'>
                <div className='card-body'>
                    <h4>Order Summary</h4>
                    <hr />
                    <p>
                         <strong>Products: </strong> {cart.length}
                    </p>
                    <p>
                        <strong>Total Items: </strong> {totalItems}
                    </p>
                    <p>
                        <strong>Total Amount: </strong> {totalAmount}
                    </p>

                    <button className='btn btn-primary' onClick={handleOredrNow}>
                       Order Now
                    </button>
                </div>
              </div>
            </>
        )} 
    </div>
  )
}

export default Cart
