import React from 'react'
import Map from '../Map/Map'
import Profile from '../Profile/Profile'
import FormBooking from '../FormBooking/FormBooking'
import Header from './../Header/Header'
import PageContent from './../PageContent/PageContent'
import { Routes, Route } from 'react-router-dom'





 function Home (events) {
           
        return (
            <div className='wrapper-content'>   
               <Header />
                <main>
                    <section className='section-wrapper'>
                        <div className='Map-container'>
                             <Map/>
                             <Routes>
                                <Route path='/' element = {<PageContent children={<FormBooking/>} />}/>
                                <Route path='/profile' element = {<PageContent children={<Profile/>} />}/>
                             </Routes>
                        </div>
                    </section>
                </main>
            </div>
        )
    }


export default (Home)