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
            <h2 className='details'>Exercise details</h2>

            <p className='time'>Exercise Time: {total}</p>
            <p className='break'>Break Time: </p>
            <button className='btn-activity'><p>Activity Completed</p></button>
        </div>
    );
};

export default Cart;