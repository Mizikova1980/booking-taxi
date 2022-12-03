import React from 'react'
import Login from '../Login/Login'
import Map from '../Map/Map'
import Profile from '../Profile/Profile'
import FormBooking from '../FormBooking/FormBooking'
import Header from './../Header/Header'
import {WithAuth} from './../../contexts'


const pages = {
    out: <Login/>,
    profile: <Profile/>,
    map: <FormBooking/>

}


 function Home (events) {
    const {logOut} = events;
    const [content, setContent] = React.useState('map');

    function clickNavItemFunc(e){
        if(e.name === 'out') logOut();
        else setContent(e.name);
      }

    
       
        return (
            <div className='wrapper-content'>   
               <Header clickNavItem={clickNavItemFunc} activeContent={content}/>
                <main>
                    <section className='section-wrapper'>
                        <div className='Map-container'>
                             <Map/>
                             {
                                pages[content] && (
                                    <div className="widow-modal" onClick={() => setContent('map')}>
                                    <div className="widow-modal__content" onClick={(e)=> e.stopPropagation()}>
                                        {pages[content]}
                                    </div>
                                    </div>
                                )
                                }
                        </div>
                    </section>
                </main>
            </div>
        )
    }


export default WithAuth(Home)