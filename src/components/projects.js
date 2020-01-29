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
import projects from './projectCollection';

export const Projects = props => (
  <div className='projectsBox' style={{ opacity: props.fadeOut.projects }}>
    <Fade delay={500} bottom>
      {projects.map(project => (
        <div key={project.name} className={project.className}>
          {project.title}
          <div>
            <img
              alt={project.alt}
              className={project.imgClass}
              src={project.img}
              onClick={project.onClick}
            />
            <p style={props.projects[project.stateName].style}>
              {props.projects[project.stateName].hovered
                ? project.text[0]
                : project.text[1]}
            </p>

            <div
              className='navDiv'
              style={
                project.style === 'odd'
                  ? { position: 'absolute', right: '26%', bottom: '10px' }
                  : { position: 'absolute', left: '20%', bottom: '0px' }
              }
            >
              <input
                className='navigators'
                onClick={props.hoverOff}
                name={project.stateName}
                type='button'
                style={{
                  background: props.projects[project.stateName].hovered
                    ? '#8672BC'
                    : 'white',
                }}
              />

              <input
                className='navigators'
                onClick={props.hoverOn}
                name={project.stateName}
                type='button'
                style={{
                  background: props.projects[project.stateName].hovered
                    ? 'white'
                    : '#8672BC',
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </Fade>
  </div>
);
