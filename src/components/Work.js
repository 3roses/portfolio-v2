import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import nba from '../photos/nba/nba-screenshot4.png';
import dndyBlack from '../photos/dndy/DNDYlogo.png';
import nmn from '../photos/nmn/nmn.png';
import labOne from '../photos/theLab/labOne.png';
import labTwo from '../photos/theLab/labTwo.png';
import labThree from '../photos/theLab/labThree.png';
import labFour from '../photos/theLab/labFour.png';
import { Button } from '@chakra-ui/react';

    

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
    
        <div  data-aos='fade-left' data-aos-duration="1000" data-aos-delay='50'className='recentWork'>
            Recent Work ...
        </div>
        <div className='projects'>
        <div className='singleProject'> 
        <div  data-aos='fade-right' data-aos-duration="1000" data-aos-delay='50' className='projectPicture'>
                    <ul className='ulStyle'>
                        <div className='gridFlex'>
                            <li><img src={labOne}  alt='abstract painting'/></li>
                            <li><img src={labTwo}  alt='abstract painting'/></li>
                        </div>
                        <div className='gridFlex'>
                            <li><img src={labThree}  alt='abstract painting'/></li>
                            <li><img src={labFour}  alt='abstract painting'/></li>
                        </div>
                    </ul>
                </div>
                <div data-aos='fade-left' data-aos-duration="1000" data-aos-delay='50' className='projectInfo'>
                    <h1>"32EDU"</h1>
                    <p className='projectAboutInfo'>Built a React app that allows clients to access important data in a clean and aesthetic way. Utilizing multiple APIs and displaying the information via charts, graphs, tables and cards. Built the entire app from scratch and is now being used by the customers of 32EDU.</p>
                    <div className='ellipsis'>. . .</div>
                    <p className='projectDeployInfo'>Check out the deployed app!</p>
                    <div className='deployBtn'>
                    <a href='https://thelab.thirtytwoedu.com/' target='_blank' rel="noreferrer"><Button variant='outline'>32EDU</Button></a>
                    </div>
                    <p className='projectDeployInfo'>Code on GitHub is currently private to protect API keys.</p>
                    <div className='socials'>
                        <a href='https://github.com/3roses/thirtytwo' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='spaceIcon'></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
            
            <div className='singleProject'> 
                <div  data-aos='fade-right' data-aos-duration="1000" data-aos-delay='50' className='projectPicture'>
                    <img src={dndyBlack}  alt='abstract painting'/>
                </div>
                <div data-aos='fade-left' data-aos-duration="1000" data-aos-delay='50' className='projectInfo'>
                    <h1>"DNDY"</h1>
                    <p className='projectAboutInfo'>DNDY is a fine-art auctioneer application. Artists can create a profile where they upload a picture of their featured work. On the "shop" page, the user can see the current piece, current bid, and time remaining. Also available is a gallery containing the current feature as well as the recently sold pieces.</p>
                    <div className='ellipsis'>. . .</div>
                    <p className='projectDeployInfo'>Check out the deployed app!</p>
                    <div className='deployBtn'>
                    <a href='https://dndy-art.herokuapp.com/' target='_blank' rel="noreferrer"><Button variant='outline'>DNDY</Button></a>
                    </div>
                    <p className='projectDeployInfo'>And take a look at the code on GitHub!</p>
                    <div className='socials'>
                        <a href='https://github.com/DNDYArt/DNDYArt' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='spaceIcon'></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
            
            <div className='singleProject'> 
                <div data-aos='fade-up' data-aos-duration="1000" data-aos-delay='50' className='projectPicture'>
                    <img src={nba}  alt='abstract painting'/>
                </div>
                <div data-aos='fade-left' data-aos-duration="1000" data-aos-delay='50' className='projectInfo'>
                    <h1>"NBA Fandom"</h1>
                    <p className='projectAboutInfo'>This app is a one-stop-shop for NBA stats and schedules. The schedule for the current and next 5 days are displayed in the cards on the bottom of the page. Type in a player's name in the search bar and a table is created with their stats. This is a useful tool for comparing players. Choose a team from the dropdown menu to see a complete roster for that team and statistics for each player. </p>
                    <div className='ellipsis'>. . .</div>
                    <p className='projectDeployInfo'>Check out the deployed app!</p>
                    <div className='deployBtn'>
                        <a href='https://eugene125.github.io/project-1/index.html' target='_blank' rel="noreferrer"><Button variant='outline'>NBA Fandom</Button></a>
                    </div>
                    <p className='projectDeployInfo'>And take a look at the code on GitHub!</p>
                    <div className='socials'>
                        <a href='https://github.com/eugene125/project-1' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='spaceIcon'></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
            <div className='singleProject'> 
                <div data-aos='fade-right' data-aos-duration="1000" data-aos-delay='50' className='projectPicture'>
                    <img src={nmn}  alt='Nerds Meet Nerds dating app'/>
                </div>
                <div data-aos='fade-up' data-aos-duration="1000" data-aos-delay='50' className='projectInfo'>
                    <h1>"Nerds Meet Nerds"</h1>
                    <p className='projectAboutInfo'>NMN is a dating app that allows users to create a profile and interact with people they like. After creating a profile, you have the option of liking or disliking other users. A "like" will open up a chatroom with that person so you can begin a conversation. The dashboard contains all the conversations a user is currently engaged in.</p>
                    <div className='ellipsis'>. . .</div>
                    <p className='projectDeployInfo'>Check out the deployed app!</p>
                    <div className='deployBtn'>
                        <a href='https://nerds-meet-nerds.herokuapp.com/' target='_blank' rel="noreferrer"><Button variant='outline'>NMN</Button></a>
                    </div>
                    <p className='projectDeployInfo'>And take a look at the code on GitHub!</p>
                    <div className='socials'>
                        <a href='https://github.com/Nerds-Meet-Nerds/Nerds-Meet-Nerds' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='spaceIcon'></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
        </div>
     </>
  )
}

export default Work