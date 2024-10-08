import React from 'react'
import './Me.css'
import balu from '../../assets/balu.png'

const Me = () => {
  return (
    <div className='me'>
<img 
    src={balu} 
    alt='' 
    style={{ 
        width: '16%', 
    }} 
/>
        <h1><span>I'm Bala Abhishek</span>, Full Stack Developer.</h1>
        <p>I am a full stack developer, with 2 years of experience</p>
        <div className="me-action">
            <div className="me-connect">
                Connect With Me
            </div>
            <div className="me-resume">
                My Resume
            </div>
        </div>
    </div>
  )
}

export default Me