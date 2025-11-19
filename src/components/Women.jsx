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
                    return <li key={item.id} data-testid={`item-link-${item.id}`}><Link to={`/women/${item.id}`} data-testid={`item-link-${item.id}`}>{item.item}</Link></li>
                })
            }
            </ul>
        </nav>
        
    
  )
}

export default Women