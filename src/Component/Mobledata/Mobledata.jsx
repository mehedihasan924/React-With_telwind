import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Mobledata = () => {

    const [phones, setPhones]=useState([])
        useEffect(()=>{
            // fetch('/src/Component/data/phone.json')
            // .then(res=>res.json())
            // .then(data=> setPhones(data))

             axios.get('https://openapi.programming-her.com/api/phones?search=iphone')
            .then(data=>{
                
                console.log(data)
            })


        }, [])
    return (
        <div>
            
       </div>
    );
};

export default Mobledata;