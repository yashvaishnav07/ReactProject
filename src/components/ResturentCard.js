import React from 'react';
import ReactDOM from'react-dom/client';
import { IMG_CDN_URL } from '../Config';

export const RestrauntCard = (props) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + props.cloudinaryImageId} alt="Restraunt" />
            <h2>{props.name}</h2>
            <h3>{props.cuisines.join(', ')}</h3>
            <h4>{props.avgRating} Stars</h4>
        </div>
    )
}