import React, { useEffect, useState } from 'react';
import Iframe from 'react-iframe'
import Link from '../Link/Link';
import {  Bars4Icon , XMarkIcon } from '@heroicons/react/24/solid'

const Navber = () => {
 
    const [open, setOpen]=useState(false)

    const List = [
        { 
            id: 1, 
            name: "Home",           
            path: "/"
         },
        { 
            id: 2,
            name: "About",      
            path: "/about" 
            },
        { 
            id: 3,
            name: "Contact",
            path: "/contact"
         },
         { 
            id: 4,
            name: "Service",
            path: "/Service"
         }, 
    ];

    return (
        <nav>
           <div  onClick={()=>setOpen(!open)}  className='pl-5 md:hidden'>
            <span>
                {
                 open ===true? <XMarkIcon  className="h-6 w-8 text-status-500" /> : 
                 <Bars4Icon  className="h-6 w-8 text-status-500" /> 
                
                }
             </span>
                
               
           </div>
            <ul className={`md:flex lg:flex  absolute duration-500 ${open ? 'top-6':'-top-36' }`}> 
                {
                    List.map( route => <Link 
                        key={route.id}
                        route={route} 
                    > </Link> )
                } 
            </ul>
           

          
        </nav>
    );
};

export default Navber;