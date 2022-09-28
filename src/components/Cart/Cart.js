import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    for (const activity of cart) {
        total = total + activity.time;
    }
    return (
        <div className='cart'>
            <h2>Exercise details</h2>
            <p>Selected {cart.length}</p>
            <p>Exercise Time: {total}</p>
        </div>
    );
};

export default Cart;