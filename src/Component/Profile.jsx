import './Profile.css'
import React from 'react'
import Name from './Name'
import Email from './Email'
import PersonalInfo  from './PersonalInfo'
import Address from './Address'


const Profile = () => {
  return (
    <div className='Profile'>
        
<Name name = 'Zameddin'/>
<Email email = 'zameddin.israfilov1@gmail.com'/>
<Address address = 'Sumqayit seheri'/>
<PersonalInfo age = {20}  tehsil = 'ADNSU' />



    </div>
  )
}

export default Profile