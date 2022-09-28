import React, { useEffect, useState } from 'react';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    return (
        <div className='container'>
            <div className="activities-container">
                <h2>Here {activities.length}</h2>
            </div>
            <div className="side-container">
                <h2>there</h2>
            </div>
        </div>
    );
};

export default Activities;