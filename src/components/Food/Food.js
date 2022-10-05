import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFood from '../SingleFood/SingleFood';

const Food = () => {
    const foods = useLoaderData().meals;
    // console.log(foods);
    return (
        <div>
            <div className='grid grid-cols-3 gap-5 mt-3'>
                {
                    foods.map(food => <SingleFood
                        key={food.idMeal}
                        food={food}
                    ></SingleFood>)
                }
            </div>

        </div>
    );
};

export default Food;