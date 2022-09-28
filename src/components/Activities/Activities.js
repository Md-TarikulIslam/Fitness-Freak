import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const buttonClick = (activity) => {
        console.log(activity);
        const newCart = [...cart, activity];
        setCart(newCart);
    }

    return (
        <div className='container'>
            <div className="activities-container">
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        buttonClick={buttonClick}
                    ></Activity>
                    )
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Activities;