import React from 'react'
import { useDispatch } from 'react-redux'
import {logOut} from './../../actions'
import { NavLink } from 'react-router-dom'


 function Header (events){
    const dispatch = useDispatch()
    
    const navList = [
        {route: '/', name: 'map', value: 'Карта', },
        {route: '/profile',name: 'profile', value: 'Профиль',},
        {route: '/', name: 'out', value: 'Выйти', },
    ]
    
    function logout (e) {
        e.preventDefault()
        dispatch(logOut())
    }
          
    return (
            
        <header>
            <div className='header-wrapper'>
                <div className='left-side'>
                    <div className='icon'>
                                <div className='icon-left'>
                                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 61C47.3447 61 61 47.3447 61 30.5C61 26.9626 60.3978 23.5658 59.2903 20.4066L20.4066 59.2903C23.5658 60.3978 26.9626 61 30.5 61ZM5.8537 48.4705L20.8189 33.5053L3.53949 16.2258C1.27994 20.4847 0 25.3429 0 30.5C0 37.219 2.17264 43.4306 5.8537 48.4705ZM16.2258 3.53949L33.5053 20.8189L48.4705 5.85371C43.4306 2.17264 37.219 0 30.5 0C25.3429 0 20.4847 1.27994 16.2258 3.53949Z" fill="#FDBF5A"/>
                                    <path d="M10.0534 10.1304L13.8274 13.9044" stroke="#FDBF5A" stroke-width="4"/>
                                    <path d="M18.127 48.8897L14.3529 52.6637" stroke="#FDBF5A" stroke-width="4"/>
                                    <path d="M24.8549 41.7133L21.0809 45.4873" stroke="#FDBF5A" stroke-width="4"/>
                                    <path d="M31.5828 34.5367L27.8088 38.3108" stroke="#FDBF5A" stroke-width="4"/>
                                    <path d="M45.0387 20.1838L41.2647 23.9579" stroke="#FDBF5A" stroke-width="4"/>
                                    <path d="M51.7667 13.0073L47.9926 16.7813" stroke="#FDBF5A" stroke-width="4"/>
                                    <path d="M17.0441 17.0441L20.8181 20.8181" stroke="#FDBF5A" stroke-width="4"/>
                                    <path d="M24.6691 24.6691L28.4431 28.4431" stroke="#FDBF5A" stroke-width="4"/>
                                    <path d="M38.3108 27.3604L34.5368 31.1344" stroke="#FDBF5A" stroke-width="4"/>
                                </svg>
                                </div>
                                <div>
                                    <svg width="196" height="25" viewBox="0 0 196 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6458 0.159998L14.8458 6.172H6.13375L7.78975 0.231999L16.6458 0.159998ZM23.4138 18.844L18.3738 24.964H0.87775L5.52175 8.548H14.2698L11.3898 18.808L23.4138 18.844ZM51.0828 6.208H27.3588C27.8388 4.576 28.6548 3.196 29.8068 2.068C31.2228 0.7 32.6868 0.0159998 34.1988 0.0159998H46.4388C49.5348 0.0159998 51.0828 1.66 51.0828 4.948C51.0828 5.764 51.0828 6.184 51.0828 6.208ZM50.5788 8.512L50.4348 9.088C50.0508 10.336 49.3908 12.616 48.4548 15.928C47.8548 18.016 46.9308 19.768 45.6828 21.184C43.4268 23.728 40.4028 25 36.6108 25H32.3268C30.0228 25 28.1988 24.568 26.8548 23.704C25.1988 22.672 24.3708 21.076 24.3708 18.916C24.3708 17.764 24.5508 16.54 24.9108 15.244L26.7108 8.584H35.0988L32.6148 17.332C32.5188 17.74 32.4708 18.052 32.4708 18.268C32.4708 18.748 32.6868 19.048 33.1188 19.168H38.3388C38.9868 19 39.4668 18.388 39.7788 17.332L42.3708 8.548L50.5788 8.512ZM76.5149 0.159998L74.7869 6.208H51.4229L55.2749 0.159998H76.5149ZM74.2829 8.548L72.3029 15.136H60.7469L58.0469 24.964H48.5789L53.1509 8.548H74.2829ZM102.46 0.159998L100.804 6.136H76.8276L80.6436 0.159998H102.46ZM93.1356 8.548L88.7796 24.964H80.5356L84.9996 8.548H93.1356Z" fill="white"/>
                                        <path d="M128.792 0.159998L127.136 6.136H103.16L106.976 0.159998H128.792ZM119.468 8.548L115.112 24.964H106.868L111.332 8.548H119.468ZM150.984 6.208H135.432L140.616 0.159998H149.688L150.984 6.208ZM155.016 24.964H145.98L143.532 15.172H138.42L131.184 24.964H120.636L133.524 8.512H151.488L155.016 24.964ZM185.421 0.196L179.625 6.172L162.201 6.136L160.761 0.267999H169.797L170.481 3.076L173.145 0.231999L185.421 0.196ZM177.393 8.548L173.037 13.336L175.485 25L166.125 24.964L165.441 21.94L162.741 25H150.536L163.173 11.032L162.669 8.62L177.393 8.548ZM195.114 0.159998L193.458 6.208H184.782L186.51 0.159998H195.114ZM192.918 8.548L188.418 24.964H179.67L184.242 8.548H192.918Z" fill="#FDBF5A"/>
                                    </svg>  
                                </div>
                    </div>
                    <div className='icon'> </div>
                    </div>
                <div className='right-side'>
                    <nav>
                        <ul className='navbar'>
                         {navList.map((el, i) => (
                            <li
                                key={i}
                                data-active={'false'}
                                className="navbar-item"
                            >
                                {
                                (el.name === 'out') 
                                ? <NavLink to={el.route} onClick={logout}>{el.value}</NavLink>
                                : <NavLink to={el.route}>{el.value}</NavLink> 
                            
                                }
                                
                            </li>
                        ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
           

        )
    }


export default (Header)