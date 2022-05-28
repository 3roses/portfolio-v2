import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Intro = () => {
  return (
    <>
        <div className='intro'>
            <div className='name'>
              <span data-aos='fade-right' data-aos-duration="1000" data-aos-delay='50'>C </span>
              <span>r </span>
              <span>a </span>
              <span>i </span>
              <span>g </span>
              <span>L </span>
              <span>e </span>
              <span>s </span>
              <span>l </span>
              <span>i </span>
              <span>e </span>
            </div>
            <div className='title'>Software Engineer</div>
            <div className='location'>Dallas,Texas</div>
        </div>
    </>
  )
}

export default Intro