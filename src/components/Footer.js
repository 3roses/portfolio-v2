import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHeart } from "react-icons/fa";

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer className='portfolioFooter'>
        <p className='sameLine'>Made with <span className='spaceHeart'><FaHeart /></span> by Craig Leslie</p>
        <p className='footerEmail'><a href='mailto:cleslie25@gmail.com'>cleslie25@gmail.com</a></p>
        <p>{year}</p>
    </footer>
  )
}

export default Footer