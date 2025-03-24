import React from 'react';
import { IoCall } from "react-icons/io5"
import { FaPaperPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6"
import footerpic from '../assets/footer.png'
import './footer.css'

const Footer = () => {
  return (
    <>
      <section className='footer-section'>
        <div className='footer-container'>
          <div className='footer-one'>
            <IoCall className='footer' /> 
          
            <h1>Contact Info</h1>
<p>913-473-7000</p>

          </div>
          <div className='footer-middle'>
            <div className='footer-picture'> 
            <img src={footerpic}/>
            </div>
          <p>There are many variations of <br></br> passages of Lorem Ipsum available <br/> be the majority.</p>
            <div className='footer-middle-icons'>
              <div className='circle'>
              <a> <FaInstagram className='footer-icon1' /></a>
              </div>
              <div className='circle'> 
   
              <a> <FaLinkedin  className='footer-icon1'/></a>
              </div>
              <div className='circle'>
              <a> <FaFacebookF className='footer-icon1' />
              </a>
              </div>
          
            
           
            </div>      

</div>
<div className='footer-one'>

<FaPaperPlane  className='footer' />

<h1>Contact Info</h1>
<p>913-473-7000</p>
</div>
        </div>


</section>
    </>
  
  )
}

export default Footer