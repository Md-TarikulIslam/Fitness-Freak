import React from 'react';
import './Activity.css'

const Activity = (props) => {
    // console.log(props.activity)
    const { picture, age, time, name, about } = props.activity;
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            {/* <p>{about}</p> */}
            <p>For Age: {age}</p>
            <p>Time required: {time}s</p>
        </div>
    );
};

export default Activity;