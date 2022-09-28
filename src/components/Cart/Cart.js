import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let total = 0;
    for (const activity of cart) {
        total = total + activity.time;
    }
    return (
        <div className='cart'>
            <h2>Add a break</h2>
            <button>20</button>
            <h2>Exercise details</h2>
            <p>Selected {cart.length}</p>
            <p>Exercise Time: {total}</p>
            <p>Break Time: </p>
        </div>
    );
};

export default Cart;