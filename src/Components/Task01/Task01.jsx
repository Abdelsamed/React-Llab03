import './ProductData'
import React from 'react'
import { products } from './ProductData';
import './style.css'
import './style copy.css'
import './Task4'
import Task4 from './Task4';
function Task01() {
    return (
        <React.Fragment className='parent'>
            {products.map((val) => (
                <div key={val.id} className='bigChild'>
                    <p>{val.name}</p>
                    <img className='imgs' src={val.img}/>
                    <p>{val.price}</p>
                    <p className='price'>{val.description.slice(0,35)}</p>
                    <p className='cat'>{val.category}</p>
                    <Task4/>
                </div>

            ))
            }
        </React.Fragment>
    )

}

export default Task01;