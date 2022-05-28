import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import nba from '../photos/nba/nba-screenshot4.png';
import { Button, ButtonGroup } from '@chakra-ui/react'

    

const Work = () => {

    useEffect(() => {
        AOS.init({});

        document.querySelectorAll('img')
        .forEach((img) => 
        img.addEventListener('load', () =>
            AOS.refresh()
        )
    )
    }, [])

  return (
    <>
        <div className='projects'>
            <div className='singleProject'> 
                <div  data-aos='fade-right' data-aos-duration="1000" data-aos-delay='50' className='projectPicture'>
                    <img src={nba}  alt='abstract painting'/>
                </div>
                <div data-aos='fade-left' data-aos-duration="1000" data-aos-delay='50' className='projectInfo'>
                    <h1>"NBA Fandom"</h1>
                    <p className='projectAboutInfo'>This app is a one-stop-shop for NBA stats and schedules. The schedule for current and next 5 days is displayed in the cards on the bottom of the page. Type in a player's name in the search bar and a table is created with their stats. This is a useful tool for comparing players. Choose a team from the dropdown menu to see a complete roster for that team and statistics for each player. </p>
                    <p className='projectDeployInfo'>Check out the deployed app!</p>
                    <div className='deployBtn'>
                    <a href='https://eugene125.github.io/project-1/index.html' target='_blank' rel="noreferrer"><Button>NBA Fandom</Button></a>
                    </div>
                    <p className='projectDeployInfo'>And take a look at the code on GitHub!</p>
                    <div className='socials'>
                        <a href='https://twitter.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='spaceIcon'></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
            {/* <div className='singleArtistContainer'> 
                <div data-aos='fade-right' data-aos-duration="1000" data-aos-delay='50' className='artistInfo'>
                    <h1>Jason Smith</h1>
                    <h2>Contained Splash <span>c.('21)</span></h2>
                    <p className='artistAboutUnderline'>About the piece:</p>
                    <p className='artistAboutInfo'>Inspired by a psychedelic walk on the beach, this piece portrays the coexistence of fluidity and geometric structure. Many people assume the two don't mix, but Jason Smith would disagree.</p>
                    <p className='artistGalleryPrice'>The current bid is: SOLD</p>
                    <div className='socials'>
                        <a href='https://twitter.com/' target='_blank'><FontAwesomeIcon icon={faTwitter} className='spaceIcon'></FontAwesomeIcon></a>
                        <a href='https://www.instagram.com/' target='_blank'><FontAwesomeIcon icon={faInstagram} className='spaceIcon'></FontAwesomeIcon></a>
                        <a href='https://www.facebook.com/' target='_blank'><FontAwesomeIcon icon={faFacebook} className='spaceIcon'></FontAwesomeIcon></a>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-duration="1000" data-aos-delay='50' className='galleryFeatureContainer'>
                    <img src={picture2}  alt='abstract painting'/>
                </div>
            </div>
            <div className='singleArtistContainer'>
                <div data-aos='flip-left' data-aos-duration="1000" data-aos-delay='50' className='galleryFeatureContainer'>
                    <img src={picture3}  alt='abstract painting'/>
                </div>
                <div data-aos='fade-down' data-aos-duration="1000" data-aos-delay='50' className='artistInfo'>
                    <h1>Jason Smith</h1>
                    <h2>Contained Splash <span>c.('21)</span></h2>
                    <p className='artistAboutUnderline'>About the piece:</p>
                    <p className='artistAboutInfo'>Inspired by a psychedelic walk on the beach, this piece portrays the coexistence of fluidity and geometric structure. Many people assume the two don't mix, but Jason Smith would disagree.</p>
                    <p className='artistGalleryPrice'>The current bid is: SOLD</p>
                    <div className='socials'>
                        <a href='https://twitter.com/' target='_blank'><FontAwesomeIcon icon={faTwitter} className='spaceIcon'></FontAwesomeIcon></a>
                        <a href='https://www.instagram.com/' target='_blank'><FontAwesomeIcon icon={faInstagram} className='spaceIcon'></FontAwesomeIcon></a>
                        <a href='https://www.facebook.com/' target='_blank'><FontAwesomeIcon icon={faFacebook} className='spaceIcon'></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
            <div className='singleArtistContainer'>   
                <div data-aos='fade-up' data-aos-duration="1000" data-aos-delay='50' className='artistInfo'>
                    <h1>Jason Smith</h1>
                    <h2>Contained Splash <span>c.('21)</span></h2>
                    <p className='artistAboutUnderline'>About the piece:</p>
                    <p className='artistAboutInfo'>Inspired by a psychedelic walk on the beach, this piece portrays the coexistence of fluidity and geometric structure. Many people assume the two don't mix, but Jason Smith would disagree.</p>
                    <p className='artistGalleryPrice'>The current bid is: SOLD</p>
                    <div className='socials'>
                        <a href='https://twitter.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className='spaceIcon'></FontAwesomeIcon></a>
                        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='spaceIcon'></FontAwesomeIcon></a>
                        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className='spaceIcon'></FontAwesomeIcon></a>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-duration="1000" data-aos-delay='50' className='galleryFeatureContainer'>
                    <img src={picture4}  alt='abstract painting'/>
                </div>
            </div>
            <div className='singleArtistContainer'>
                <div data-aos='fade-right' data-aos-duration="1000" data-aos-delay='50' className='galleryFeatureContainer'>
                    <img src={picture5} alt='strawberry'/>
                </div>
                <div data-aos='fade-up' data-aos-duration="1000" data-aos-delay='50' className='artistInfo'>
                    <h1>Jason Smith</h1>
                    <h2>Contained Splash <span>c.('21)</span></h2>
                    <p className='artistAboutUnderline'>About the piece:</p>
                    <p className='artistAboutInfo'>Inspired by a psychedelic walk on the beach, this piece portrays the coexistence of fluidity and geometric structure. Many people assume the two don't mix, but Jason Smith would disagree.</p>
                    <p className='artistGalleryPrice'>The current bid is: SOLD</p>
                    <div className='socials'>
                        <a href='https://twitter.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className='spaceIcon'></FontAwesomeIcon></a>
                        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='spaceIcon'></FontAwesomeIcon></a>
                        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className='spaceIcon'></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
            <div className='singleArtistContainer'>
                <div data-aos='fade-up' data-aos-duration="1000" data-aos-delay='50' className='artistInfo'>
                    <h1>Jason Smith</h1>
                    <h2>Contained Splash <span>c.('21)</span></h2>
                    <p className='artistAboutUnderline'>About the piece:</p>
                    <p className='artistAboutInfo'>Inspired by a psychedelic walk on the beach, this piece portrays the coexistence of fluidity and geometric structure. Many people assume the two don't mix, but Jason Smith would disagree.</p>
                    <p className='artistGalleryPrice'>The current bid is: SOLD</p>
                    <div className='socials'>
                        <a href='https://twitter.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className='spaceIcon'></FontAwesomeIcon></a>
                        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='spaceIcon'></FontAwesomeIcon></a>
                        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className='spaceIcon'></FontAwesomeIcon></a>
                    </div>
                </div>
                <div data-aos='flip-right' data-aos-duration="1000" data-aos-delay='50' className='galleryFeatureContainer'>
                    <img src={picture6} alt='mountain black/white'/>
                </div>
            </div> */}
        </div>
     </>
  )
}

export default Work