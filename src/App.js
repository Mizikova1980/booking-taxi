
import React, {useState} from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';


function App () {
  
  const [login, setLogin] = useState(false)

    return (
    <div className='wrapper'>
        {login ? <Home/> : <Login setLogin={setLogin}/>}
    </div>
       
    )
  
 
}

export default App;





