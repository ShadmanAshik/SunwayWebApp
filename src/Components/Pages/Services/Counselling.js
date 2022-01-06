import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../../ContactForm/ContactForm';
import HeroImg from '../../HeroSection/HeroImg';
import './Counselling.css'

const Counselling = () => {
    return (
      <div>
      <Container>
        <HeroImg imgSrc="/img/banner1.jpg" />
        <div>
          <div className="Counselling-container">
            <div class="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h1 className="renovation">Student Counselling</h1>
                <div>
                  <div class="row">
                    <div class=" col-sm-12">
                      <img
                        className="Counselling-listImg"
                        src="/img/Student-Counselling.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="col-sm-12">
                      <p className="Counselling-listPara">
                      Most of the students applying for further education abroad can not go through the right way to success. It’s a crucial point. Our counseling for the right country and  University choice. More ever our advisor will help you to make the right career decision considering your educational background and career objective. Students can  join our free counseling season  to find the  most aspired academic goal by  choosing the best career path.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    );
};

export default Counselling;