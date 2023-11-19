import React from 'react'
import './PersonalInfo.css'
const PersonalInfo = (props) => {
  return (
    <div className='Personal'>
<p>Age: {props.age}
</p>
<p>
Tehsil: {props.tehsil}
</p>
    </div>
  )
}

export default PersonalInfo