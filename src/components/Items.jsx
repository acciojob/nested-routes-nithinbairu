import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Items = ({items}) => {
    

    const {id}=useParams()
    const item = items.find(i => i.id === Number(id)); 
    
  return (
    <nav>
        <p>Women Items:</p>
        <ul>
            {
                items.map((item)=>(
                    <li key={item.id}><Link to={`/women/${item.id}`}>{item.item}</Link></li>
                ))
            }
        </ul>
        {item.item}
    </nav>
  )
}

export default Items