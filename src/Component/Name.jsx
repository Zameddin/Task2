import React from 'react'
import './Name.css'
const Name = (props) => {
  return (
    <div className='Name'>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Name