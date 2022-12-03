
import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {WithAuth} from './contexts'


function App (props) {
 const {isLoggedIn} = props
 
  return (
    <div className='wrapper'>
        {isLoggedIn ? <Home/> : <Login/>}
    </div>
       
    )
  
 
}

export default WithAuth(App);





