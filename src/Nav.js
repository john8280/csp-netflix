import React, { useEffect, useState } from 'react'
import "./Nav.css";

function Nav() {

const [show, handleShow] = useState(false);

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false);
    }
}

useEffect(() => {

    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
}, [])

  return (
    <div className={`nav ${show && 'nav__black'}`} >
        <div className='nav__contents'>
        <img className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' />

        <img className='nav__avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9W6yKOi4I_Hi6BRsOfWVs0QIsRI2qmZ5c7k_4QAHief8T5rli3NqDNLgl-oHx_7tfjxI&usqp=CAU' alt='' />
        
       

        </div>
        
    </div>
  )
}

export default Nav