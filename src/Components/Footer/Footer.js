import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button variant="secondary">
                Explore more
              </Button>
          </form>
        </div>
      </section>
      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/home'>Testimonials</Link>
            <Link to='/home'>Careers</Link>
            <Link to='/home'>Investors</Link>
            <Link to='/home'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/home'>Contact</Link>
            <Link to='/home'>Support</Link>
            <Link to='/home'>Destinations</Link>
            <Link to='/home'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
            <h2>Important Links</h2>
            <a href="https://www.qs.com/rankings/">QS Ranking</a>
            <a href="https://www.britishcouncil.org/">British Council</a>
            <a href="https://cscuk.fcdo.gov.uk/apply/masters-scholarships/">Commonwealth Scholarship</a>
            <a href="https://www.cic.gc.ca/english/helpcentre/results-by-topic.asp?top=29">Canada Express Entry</a>
            <a href="https://www.gov.uk/browse/visas-immigration">Living in UK</a>
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html">Study in Canada</a>
            <a href="https://bangladesh.embassy.gov.au/daca/home.html">Australian High Commission</a>
            <a href="https://www.internationalstudent.com/study_usa/">Study in USA</a>
            <a href="https://www.biman-airlines.com/">Bangladesh Airlines</a>
            <a href="https://www.timeshighereducation.com/">Times Higher Education</a>

            
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>*/}
    </div> 
  );
}

export default Footer;