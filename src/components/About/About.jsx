import React from 'react'
import './About.css'
import balu1 from '../../assets/balu1.jpeg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src='' alt='' />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={balu1} alt='' style={{width: '60%'}}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a dedicated and passionate Full Stack Developer with 2 years of experience in building and maintaining responsive, dynamic web applications. With a strong foundation in both front-end and back-end technologies, I excel at crafting seamless user experiences and developing efficient server-side solutions. I’m driven by a commitment to writing clean, scalable code and continuously learning new technologies to keep my skills up-to-date</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: '80%'}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: '60%'}} /></div>
                    <div className="about-skill"><p>React</p><hr style={{width: '50%'}} /></div>
                    <div className="about-skill"><p>NodeJS</p><hr style={{width: '60%'}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>6+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About