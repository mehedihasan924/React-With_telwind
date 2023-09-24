import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className=' bg-slate-300 p-5 rounded-md mt-4 flex flex-col'>
            <h2 className='text-center'> 
                <span className=' text-5xl text-purple-700 font-extrabold'> {price.price}</span>
                <span className='text-2xl font-bold'> /mon</span>
            </h2>
            <h1 className='text-2xl text-center my-6 font-bold'> {price.name}</h1>
            <p className='font-bold underline pb-1'>Features</p>
                {
                    price.features.map( (feature, idx) => //<li> {feature}</li>
                    <Feature 
                    key={idx}
                    feature={feature}
                    > </Feature>
                    
                    )
                }
                <button className='w-full mt-auto hover:bg-green-700 bg-green-500 rounded-md text-white py-2'> Buy Now</button>
        </div>
    );
};

export default PriceCart;