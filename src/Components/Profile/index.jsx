import React from 'react'
import ProfileForm from './ProfileForm'
import ProfileModalClose from './ProfileModalClose'
import { useSelector } from 'react-redux';


function  Profile  (events) {
 const {isRegCard} = useSelector(state => state.regCard)
 
  return (
    <div className='wrapper'>
        {isRegCard ? <ProfileModalClose/> : <ProfileForm/>}
    </div>
       
    )
  
 
}

export default Profile