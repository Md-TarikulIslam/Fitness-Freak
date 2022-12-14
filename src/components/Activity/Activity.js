import React from 'react';
import './Activity.css'

const Activity = (props) => {


    const { picture, age, time, name, about } = props.activity;
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <div className='activity-info'>
                <h2>{name}</h2>
                <p>{about}</p>
                <p>For Age: {age}</p>
                <p>Time required: {time}s</p>
            </div>
            <button onClick={() => props.buttonClick(props.activity)} className='btn-list'>
                <p>Add to list</p>
            </button>
        </div>

    );
};

export default Activity;