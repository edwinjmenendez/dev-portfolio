import React from 'react'
import { BsCheck2 } from 'react-icons/bs';


const Service = ({ service }) => {
    console.log(service)
    return (
        <article className='service' >
            <div className="service_head">
                <h3>{service.service}</h3>
            </div>
            <ul className='service_list'>
                {service.descriptions.map((item, index) => 
                    <li key={index}>
                        <BsCheck2 className='service_list-icon' />
                        <p>{item.description}</p>
                    </li>
                )}
            </ul>
        </article>
    )
}

export default Service