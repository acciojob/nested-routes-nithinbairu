import React from 'react'
import { Link } from 'react-router-dom'

const Women = ({items}) => {
    console.log(items);
  return (
    
        <nav>
            <p>Women Items:</p>
            <ul>
            {
                items.map((item)=>{
                    return <li key={item.id}><Link to={`/women/${item.id}`}>{item.item}</Link></li>
                })
            }
            </ul>
        </nav>
        
    
  )
}

export default Women