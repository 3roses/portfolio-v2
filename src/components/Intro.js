import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import 'aos/dist/aos.css'

const Intro = () => {
  return (
    <>
        <div className='intro'>
            <div className='name'>
              <Parallax className="lineUp" speed={10}>
                  <span className='letterSpace c'>C</span>
                  <span className='letterSpace r'>r</span>
                  <span className='letterSpace a'>a</span>
                  <span className='letterSpace i'>i</span>
                  <span className='letterSpace g'>g</span>
                  <span className='letterSpace c'>L</span>
                  <span className='letterSpace e'>e</span>
                  <span className='letterSpace s'>s</span>
                  <span className='letterSpace l'>l</span>
                  <span className='letterSpace iTwo'>i</span>
                  <span className='letterSpace eTwo'>e</span>
              </Parallax>

            </div>
            <div className='title'>Software Engineer</div>
            <div className='location'>Dallas,Texas</div>
        </div>
    </>
  )
}

export default Intro