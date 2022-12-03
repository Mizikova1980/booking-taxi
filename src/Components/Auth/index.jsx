import React from "react"
import Auth from "./Auth"
import LoginForm from "./LoginForm"

function AuthForm(events) {
    const {formSend} = events;
    const [isSignIn, setSignIn] = React.useState(true);
  
    function send(e){
      e.preventDefault();
      let send_obj = { sendType: isSignIn ? 'LoginForm' : 'Auth', };
      e.target.querySelectorAll('input').forEach(el => send_obj[el.name] = el.value);
  
      (typeof formSend === 'function') && formSend(send_obj);
    }
  
  
    return (<>
      <form className="AuthForm" onSubmit={send}>
        {
          isSignIn
          ? <LoginForm changeSing={()=> setSignIn(prev => !prev)}/>
          : <Auth changeSing={()=> setSignIn(prev => !prev)}/>
        }
      </form>
    </>);
  }
  
  export default AuthForm;