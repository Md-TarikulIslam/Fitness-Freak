import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const buttonClick = (activity) => {
        console.log("Clicked");
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
            <div className="side-container">
                <h2>there</h2>
            </div>
        </div>
    );
};

export default Activities;