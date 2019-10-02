/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import 'react-awesome-slider/dist/styles.css';
import Fade from 'react-reveal/Fade';

export const Projects = props => (
  <div className='projectsBox' style={{ opacity: props.fadeOut.projects }}>
    <Fade delay={500} bottom>
      <div className='headrushSection odd'>
        <h2>HEADRUSH</h2>
        <div>
          <img
            alt='Screenshot of the website HEADRUSH'
            className='headrushSnap snap'
            src={require('./assets/snaps/HEADRUSHsnap.png')}
            onClick={() => {
              window.open('https://www.headrushlearning.com/');
            }}
          />

          <p style={props.projects.headrush.style}>
            {props.projects.headrush.hovered
              ? props.projects.headrush.text[1]
              : props.projects.headrush.text[0]}
          </p>
          <div
            className='navDiv'
            style={{
              position: 'absolute',
              right: '26%',
              bottom: '10px',
            }}
          >
            <input
              className='navigators'
              onClick={props.hoverOff}
              name='headrush'
              type='button'
              style={{
                background: props.projects.headrush.hovered
                  ? '#8672BC'
                  : 'white',
              }}
            />

            <input
              className='navigators'
              onClick={props.hoverOn}
              name='headrush'
              type='button'
              style={{
                background: props.projects.headrush.hovered
                  ? 'white'
                  : '#8672BC',
              }}
            />
          </div>
        </div>
      </div>

      <div className='tgsSection even'>
        <h2>
          THINK
          <br />
          Global School
        </h2>
        <div>
          <img
            alt='Screenshot of the website THINK Global School'
            className='tgsSnap snap'
            src={require('./assets/snaps/TGSsnap.png')}
            onClick={() => {
              window.open('https://alumni.tgs.org/');
            }}
          />

          <p style={props.projects.TGS.style}>
            {props.projects.TGS.hovered
              ? props.projects.TGS.text[1]
              : props.projects.TGS.text[0]}
          </p>
          <div
            className='navDiv'
            style={{
              position: 'absolute',
              left: '20%',
              bottom: '10px',
            }}
          >
            <input
              className='navigators'
              onClick={props.hoverOff}
              name='TGS'
              type='button'
              style={{
                background: props.projects.TGS.hovered ? '#8672BC' : 'white',
                height: '15px',
                width: '15px',
                borderRadius: '50%',
                margin: '0 10px',
                border: 'none',
                outline: 'none',
              }}
            />

            <input
              className='navigators'
              onClick={props.hoverOn}
              name='TGS'
              type='button'
              style={{
                background: props.projects.TGS.hovered ? 'white' : '#8672BC',
                height: '15px',
                width: '15px',
                borderRadius: '50%',
                margin: '0 10px',
                border: 'none',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </div>

      <div className='acousticSection odd'>
        <h2>
          Acoustic
          <br />
          Saturdays
        </h2>
        <div>
          <img
            alt='Screenshot of the website Acoustic Saturdays'
            className='acousticSnap snap'
            src={require('./assets/snaps/acousticSnap.png')}
            onClick={() => {
              window.open('https://acousticsaturdays.com/');
            }}
          />

          <p style={props.projects.acoustic.style}>
            {props.projects.acoustic.hovered
              ? props.projects.acoustic.text[1]
              : props.projects.acoustic.text[0]}
          </p>
          <div
            className='navDiv'
            style={{
              position: 'absolute',
              right: '26%',
              bottom: '10px',
            }}
          >
            <input
              className='navigators'
              onClick={props.hoverOff}
              name='acoustic'
              type='button'
              style={{
                background: props.projects.acoustic.hovered
                  ? '#8672BC'
                  : 'white',
              }}
            />

            <input
              className='navigators'
              onClick={props.hoverOn}
              name='acoustic'
              type='button'
              style={{
                background: props.projects.acoustic.hovered
                  ? 'white'
                  : '#8672BC',
              }}
            />
          </div>
        </div>
      </div>

      <div className='pblrSection even'>
        <h2>
          PBL
          <br />
          Rubric
        </h2>
        <div>
          <img
            alt='screenshot of the app PBLR'
            className='pblrSnap snap'
            src={require('./assets/snaps/pblrSnap.png')}
            onClick={() => {
              window.open('https://pblr.netlify.com/');
            }}
          />

          <p style={props.projects.pblr.style}>
            {props.projects.pblr.hovered
              ? props.projects.pblr.text[1]
              : props.projects.pblr.text[0]}
          </p>
          <div
            className='navDiv'
            style={{
              position: 'absolute',
              left: '20%',
              bottom: '10px',
            }}
          >
            <input
              className='navigators'
              onClick={props.hoverOff}
              name='pblr'
              type='button'
              style={{
                background: props.projects.pblr.hovered ? '#8672BC' : 'white',
              }}
            />

            <input
              className='navigators'
              onClick={props.hoverOn}
              name='pblr'
              type='button'
              style={{
                background: props.projects.pblr.hovered ? 'white' : '#8672BC',
              }}
            />
          </div>
        </div>
      </div>
      <div className='scalerSection odd'>
        <h2>Scaler</h2>
        <div>
          <img
            alt='Screenshot of the app Scaler'
            className='scalerSnap snap'
            src={require('./assets/snaps/scalerSnap.png')}
            onClick={() => {
              window.open('https://scaler.netlify.com/');
            }}
          />
          <p style={props.projects.scaler.style}>
            {props.projects.scaler.hovered
              ? props.projects.scaler.text[1]
              : props.projects.scaler.text[0]}
          </p>
          <div
            className='navDiv'
            style={{
              position: 'absolute',
              right: '26%',
              bottom: '10px',
            }}
          >
            <input
              className='navigators'
              onClick={props.hoverOff}
              name='scaler'
              type='button'
              style={{
                background: props.projects.scaler.hovered ? '#8672BC' : 'white',
              }}
            />

            <input
              className='navigators'
              onClick={props.hoverOn}
              name='scaler'
              type='button'
              style={{
                background: props.projects.scaler.hovered ? 'white' : '#8672BC',
              }}
            />
          </div>
        </div>
      </div>
      <div className='morsadiSection even'>
        <h2>MORSADI</h2>
        <div>
          <img
            alt='Screenshot of the website Morsadi'
            className='morsadiSnap snap'
            src={require('./assets/snaps/morsadiSnap.png')}
            onClick={() => {
              window.open('https://morsadi.com/');
            }}
          />

          <p style={props.projects.morsadi.style}>
            {props.projects.morsadi.hovered
              ? props.projects.morsadi.text[1]
              : props.projects.morsadi.text[0]}
          </p>
          <div
            className='navDiv'
            style={{
              position: 'absolute',
              left: '20%',
              bottom: '10px',
            }}
          >
            <input
              className='navigators'
              onClick={props.hoverOff}
              name='morsadi'
              type='button'
              style={{
                background: props.projects.morsadi.hovered
                  ? '#8672BC'
                  : 'white',
                height: '15px',
                width: '15px',
                borderRadius: '50%',
                margin: '0 10px',
                border: 'none',
                outline: 'none',
              }}
            />

            <input
              className='navigators'
              onClick={props.hoverOn}
              name='morsadi'
              type='button'
              style={{
                background: props.projects.morsadi.hovered
                  ? 'white'
                  : '#8672BC',
                height: '15px',
                width: '15px',
                borderRadius: '50%',
                margin: '0 10px',
                border: 'none',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  </div>
);
