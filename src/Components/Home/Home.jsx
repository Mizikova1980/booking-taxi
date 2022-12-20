import React from 'react'
import Map from '../Map/Map'
import Profile from '../Profile'
import FormBookingModalClose from './../FormBooking/FormBookingModalClose'
import FormBooking from '../FormBooking/FormBooking'
import Header from './../Header/Header'
import PageContent from './../PageContent/PageContent'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'







 function Home (events) {
        
        const navigate = useNavigate()

        return (
            <div className='wrapper-content'>   
               <Header />
                <main>
                    <section className='section-wrapper' onClick={() => navigate('map')} >
                        <div className='Map-container'>
                             <Map/>
                             <div className='widow-modal' >
                                <div className='widow-modal__content'>
                                    <Routes>
                                        <Route path='/' element = {<PageContent children={<FormBooking/>} />}/>
                                        <Route path='/profile' element = {<PageContent children={<Profile/>} />}/>
                                        <Route path='/booking' element = {<PageContent children={<FormBooking/>} />}/>
                                        <Route path='/bookingComplited' element = {<PageContent children={<FormBookingModalClose/>} />}/>
                                    </Routes>
                                </div>
                             </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }


export default (Home)