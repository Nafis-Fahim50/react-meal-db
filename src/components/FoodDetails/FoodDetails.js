import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const details = useLoaderData().meals[0];
    console.log(details);
    const {strMeal, strTags, strMealThumb} = details;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='w-44 mt-5' src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>{strTags}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;