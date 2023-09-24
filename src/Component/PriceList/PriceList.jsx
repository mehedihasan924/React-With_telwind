import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {

    const [prices, setPrices]=useState([])
    useEffect(()=>{
        fetch('/public/data.json')
        .then(res =>res.json())
        .then(data =>setPrices(data))
    },[])
    return (
        <div>
            <h2 className='text-6xl text-center bg-red-500 font-bold p-4 mt-5'> Awesome Affordable prices</h2>
           <div className='grid md:grid-cols-3 gap-5 '>
                    {
                            prices.map(price => 
                                <PriceCart
                                key={price.id}
                                price={price}
                                > </PriceCart>
                                )
                        }
           </div>
        </div>
    );
};

export default PriceList;