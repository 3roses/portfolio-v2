import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import picture from '../photos/personal/meandheights.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button, ButtonGroup } from '@chakra-ui/react';

const About = () => {
  return (
    <>
        <div  data-aos='fade-left' data-aos-duration="1000" data-aos-delay='50'className='recentWork'>
            A little bit about myself ... 
        </div>
        <div className='projects'>
            <div className='singleProject'> 
                <div data-aos='fade-left' data-aos-duration="1000" data-aos-delay='50' className='projectInfo'>
                    <h1 id='aboutMeTitle'>"Hello, I'm Craig"</h1>
                    <p className='projectAboutInfo aboutMeInfo'>I'm a father, web developer, welder, and artist.  I am passionate about creatively solving problems, and making those solutions look great!  I graduated from the University of Texas at Austin with a degree in Geography.  I have also earned a full-stack web development certificate from Southern Methodist University in Dallas, Texas.  One of my favorite things about writing code is that the possibilities are endless.  I truly enjoy the creative potential of web-development, and love expanding my knowledge of different tech stacks and computer science.</p>
                    <div id='aboutEllipsis'className='ellipsis'>. . .</div>
                    <p id='aboutConnect'className='projectDeployInfo'>Connect with me:</p>
                    <div className='socials iconMarginBottom'>
                        <a className='socialsAbout' href='https://github.com/3roses' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='spaceIcon'></FontAwesomeIcon></a>
                        <a className='socialsAbout' href='https://www.facebook.com/cleslie25' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className='spaceIcon'></FontAwesomeIcon></a>
                        <a className='socialsAbout' href='https://www.instagram.com/c_leslie25/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='spaceIcon'></FontAwesomeIcon></a>
                        <a className='socialsAbout' href='https://www.linkedin.com/in/craig-leslie-5a42581b0/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='spaceIcon'></FontAwesomeIcon></a>
                    </div>
                    <div>
                        <h1 id='collabHeader'>Let's collab ...</h1>
                        <p id='collabMessage'className='projectDeployInfo'>I'd love to work together, shoot me an email!</p>
                        <p id='collabEmail'className='projectDeployInfo'><a href='mailto:cleslie25@gmail.com'>cleslie25@gmail.com</a></p>
                    </div>
                </div>
                <div  data-aos='fade-right' data-aos-duration="1000" data-aos-delay='50' className='projectPicture'>
                    <img src={picture}  alt='Me and my son'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default About