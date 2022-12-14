import React from 'react';
import './Cart.css'
import { useState } from 'react';
import { toast } from 'react-toastify';
import img2 from '../images/2.jpg'

const Cart = ({ cart }) => {

    const [Break, setBreak] = useState(0);

    const notify = () => toast.success("Congratulations! Mission Completed");

    const breakHandle = (temp) => {
        setBreak(temp);
    }
    let total = 0;
    for (const activity of cart) {
        total = total + activity.time;
    }
    return (

        <div className='cart'>
            <div className='details-info'>
                <img src={img2} alt="" />
                <h2 className='name'>Md. Tarikul Islam</h2>
            </div>

            <h5>Natore, Bangladesh</h5>
            <div className='personal-status'>
                <div>
                    <h3>70 <small>KG</small></h3>
                    <h5>Weight</h5>
                </div>
                <div>
                    <h3>5.6</h3>
                    <h5>Height</h5>
                </div>
                <div>
                    <h3>22 <small>Yrs</small></h3>
                    <h5>Age</h5>
                </div>
            </div>

            <h2>Add a break</h2>
            <div className="br-div">
                <button className='br-btn' onClick={() => breakHandle(30)}>30</button>
                <button className='br-btn' onClick={() => breakHandle(40)}>40</button>
                <button className='br-btn' onClick={() => breakHandle(50)}>50</button>
                <button className='br-btn' onClick={() => breakHandle(20)}>20</button>
            </div>
            <h2 className='details'>Exercise details</h2>

            <p className='time'>Exercise Time: {total}</p>
            <p className='break'>Break Time: {Break}</p>
            <button onClick={notify} className="btn-activity"><p>Activity Completed</p></button>
        </div>
    );
};

export default Cart;