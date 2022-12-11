
import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { useSelector } from 'react-redux';


function App (events) {
 const {isLoggedIn} = useSelector(state => state.auth)
 
  return (
    <div className='wrapper'>
        {isLoggedIn ? <Home/> : <Login/>}
    </div>
       
    )
  
 
}

export default App;





