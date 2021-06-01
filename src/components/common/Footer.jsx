import React from 'react';


import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h4>Contact Us</h4>
            <Link to='/'>Contact</Link>
            <Link to='/'>Booking</Link>
            <Link to='/'>Newsletter</Link>
            <Link to='/'>Franchise</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h4>Social Media</h4>
            <a href="https://www.instagram.com/beautifulhotels/?hl=en"> Instagram</a>
            <Link to='https://www.facebook.com/'>Facebook</Link>
            <Link to='https://www.youtube.com/'>Youtube</Link>
            <Link to='https://twitter.com/home'>Twitter</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h4>Hotel Rating</h4>
            <Link to='/'>*****</Link>
            <Link to='/'>***</Link>
            <Link to='/'>**</Link>
            <Link to='/'>*</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              
              <img src="/images/dish.png" alt="Zarbafs logo"/>
            </Link>
          </div>
          <small className='website-rights'>Zarbafs © 2021 copyright Reserved</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
