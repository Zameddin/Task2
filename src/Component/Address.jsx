import React from 'react'
import  './Address.css'
const Address = (props) => {
  return (
    <div className='Address'>
        
        <h2>Location: {props.address}</h2>
    </div>
  )
}

export default Address