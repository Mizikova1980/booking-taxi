import React from "react"
import Auth from "./Auth"
import LoginForm from "./LoginForm"
import {Routes, Route} from 'react-router-dom';




function AuthForm(events) {
    const {formSend} = events;
    
  
    function send(e){
      e.preventDefault();
      let isSignIn = window.location.pathname !== '/registration';
      let send_obj = { sendType: isSignIn ? 'SignIn' : 'SignUp', };
      e.target.querySelectorAll('input').forEach(el => send_obj[el.name] = el.value);
  
      (typeof formSend === 'function') && formSend(send_obj);
    }
  
  
    return (<>
      <div className="AuthForm" onSubmit={send}>
        <Routes>
          <Route path="/registration" element={<Auth/>} />
          <Route path="*" element={<LoginForm/>} />
        </Routes>
      </div>
    </>);
  }
  
  export default AuthForm;