import React from 'react'
import Map from '../Map/Map'
import Profile from '../Profile'
//import FormBooking from '../FormBooking'
import BookingForm from './../FormBooking/BookingForm'
import Header from './../Header/Header'
import PageContent from './../PageContent/PageContent'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'







 function Home (events) {
        
        const navigate = useNavigate()
        const {authToken} = useSelector(state => state.auth)
        console.log(authToken)
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
                                        <Route path='/' element = {<PageContent children={<BookingForm/>} />}/>
                                        <Route path='/profile' element = {<PageContent children={<Profile/>} />}/>
                                        <Route path='/booking' element = {<PageContent children={<BookingForm/>} />}/>
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