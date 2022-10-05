import React from 'react';
import { Link } from 'react-router-dom';

const SingleFood = ({ food }) => {
    // console.log(food);
    const { idMeal, strMealThumb, strMeal } = food;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <h3 className='text-2xl text-green-500'>Price: $100</h3>
                    <div className="card-actions justify-end">
                        <Link to={`/food/${idMeal}`}>
                            <button className="btn btn-primary">Order Now</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;