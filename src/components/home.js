/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

export const Home = ({ fadeOut }) => (


  <div className='About' style={{ opacity: fadeOut.home }}>

    <Fade delay={500} bottom>

      <div className='header'>
        <h1>
          Hi,
          <br />
          I'm Badr
        </h1>
      </div>
      <div style={{}}>
        <p
          style={{
            letterSpacing: '0',
            fontSize: '32px',
            marginBottom: '1em',
          }}
        >
          I'm a front-end developer based in Phoenix, Arizona.
        </p>

        <p
          style={{
            fontSize: '20px',
            letterSpacing: '0.08em',
          }}
        >
          I love linguistics, Shih Tzus and building websites/web apps that
          improve the lives of those around me. You can typically find me buried
          under some Javascript and React, along with HTML & CSS, as I’m a looking for a team to contribute to.
          <br />
        </p>
      </div>

      <div
        style={{
          width: '100%',
          paddingTop: '45px',
        }}
      >
        <p
          style={{
            fontSize: '20px',
            letterSpacing: '0.08em',
            fontWeight: '100',
          }}
        >
          <span
            style={{
              letterSpacing: '0',
              fontSize: '32px',
              paddingTop: '100px',
            }}
          >
            When I’m not nerding out on code, you might find me...
          </span>
          <br />
          <br />
          Teaching English as a Second Language (ESL)
          <br />
          Playing the guitar, ukulele or learning piano
          <br />
          Advocating for educational reform
          <br />
          Cooking for family and friends
          <br />
          Speaking English, Modern Standard Arabic, Moroccan Darija and French
          <br />
          Volunteering for community arts performances
          <br />
          Singing renditions of Elvis Presley and Johnny Cash
        </p>
      </div>
    </Fade>
  </div>


);

Home.propTypes = {
  fadeOut: PropTypes.shape({
    home: PropTypes.number.isRequired,
  }).isRequired
}

