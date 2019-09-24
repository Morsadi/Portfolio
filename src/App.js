/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Tagline } from './components/tagline';
import { Projects } from './components/projects';
import { Icons } from './components/icons';
import 'bootstrap/dist/css/bootstrap.css';

const CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

const resume = require('./components/assets/Morsadi-Resume.pdf');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {
        headrush: {
          text: [
            'HEADRUSH is a platform that facilitates project-based learning from start to finish allowing students to become self-empowered learners. As a progressive learning management system, HEADRUSH is changing the way teachers track, record and assess student project work.',
            'As the designer of this wireframe and UI, I served as an independent contractor for Headrush. I implemented minimal javascript in Wix to achieve desired functionality for low-maintenance site management. This learning company supports 50 globally-based schools and the website is frequently visited.',
          ],
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
        TGS: {
          text: [
            "THINK Global School (TGS) is the world's first traveling high school. The international student attendees visit 12 countries before they graduate, all while integrating education with travel and technology. The TGS Alumni Network serves as an extension of TGS where alumni connect as global ambassadors.",
            'Initially, I was hired as an independent contractor for THINK Global School to translate their web content from English to both French and Arabic. I was later re-hired to design the UI for the THINK Global School Alumni Network and convert it to code to be hosted on Wordpress. Eventually, I incorporated Open Apply API along with Google Sheets API to create a platform for TGS alumni to input and review their information on the database, as well as submit profile update requests.',
          ],
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
        acoustic: {
          text: [
            'As a Rabat-based artist collective, Acoustic Saturdays brings together a dynamic community of musicians, singers, photographers, videographers and graphic designers. Acoustic Saturdays connects emerging and veteran artists who contribute to the development of accessible art and music in Morocco.',
            'As part of the Acoustic Saturdays collective, I volunteered to design the UI of this website. I used Javascript & Wordpress POST-API to code different sections from scratch, creating features such as a music player and an automated news page.',
          ],
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
        pblr: {
          text: [
            'According to PBL Works, Project Based Learning (PBL) prepares students for academic, personal, and career success. Known to build the capacity of teachers, PBL Works designed the PBL rubric to help educators facilitate transformative project work in their classrooms.',
            'This app serves as a digital rubric for transparent tracking of PBL educator development. In addition to designing the UI of this app, I used Reactjs with the integration of Firebase to create a platform for each user to add teachers, update their profile and assess their skills.',
          ],
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
        scaler: {
          text: [
            'All vocalists know that practicing scales challenges and expands the vocal range. It is difficult for vocalists to transition between key transpositions easily as it requires understanding and, more importantly, time, to adjust a piece accordingly to one’s own vocal range.',
            'I built this app out of a felt need to adjust popular scales to match my deep vocal range. Wireframed/designed in Figma and written in ReactJs, this app generates different key transpositions of any song. Now vocalists can submit any original song progression and find the right scales that match their voice.',
          ],
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
        morsadi: {
          text: [
            'Morsadi is a creative story agency for brands that matter. In offering story + web design, this agency creates content that captures the value of selected brands and spreads their influence. The Morsadi mission is to embolden brands positioned to make a difference and catalyze human connection through the power of story.',
            'Co-founded by Breanna Morsadi and I, this small family business allows for us to collaborate on projects involving copywriting, story and web design. In creating this site, I used Figma and Adobe XD to develop and design the UI and UX, and converted it to a responsive website using React.',
          ],
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
      },
      bgColor: '#066358',
      homeClicked: true,
      projectsClicked: false,

      navAnimate: {
        name: false,
        home: false,
        projects: false,
      },
    };
  }

  componentWillUnmount() {
    clearInterval(this.swap);
  }

  hoverOn = e => {
    const { projects } = this.state;
    const target = e.target.getAttribute('name');
    if (
      projects[target].style.transform === 'translatey(0px)' &&
      !projects[target].hovered
    ) {
      this.setState({
        projects: {
          ...projects,
          [target]: {
            ...projects[target],
            style: {
              transform: 'translatey(-40px)',
              opacity: 0,
            },
          },
        },
      });
      this.swap = setTimeout(() => {
        this.setState({
          projects: {
            ...projects,
            [target]: {
              ...projects[target],
              hovered: true,
              style: {
                transform: 'translatey(0px)',
                opacity: 1,
              },
            },
          },
        });
      }, 600);
    }
  };

  hoverOff = e => {
    const target = e.target.getAttribute('name');
    const { projects } = this.state;
    if (
      projects[target].style.transform === 'translatey(0px)' &&
      projects[target].hovered
    ) {
      this.setState({
        projects: {
          ...projects,
          [target]: {
            ...projects[target],
            style: {
              transform: 'translatey(-40px)',
              opacity: 0,
            },
          },
        },
      });
      this.swap = setTimeout(() => {
        this.setState({
          projects: {
            ...projects,
            [target]: {
              ...projects[target],
              hovered: false,
              style: {
                transform: 'translatey(0px)',
                opacity: 1,
              },
            },
          },
        });
      }, 600);
    }
  };

  animateTitle = e => {
    if (window.innerWidth >= 1025) {
      const { navAnimate } = this.state;
      const target = e.currentTarget.getAttribute('name');
      this.setState({
        navAnimate: {
          ...navAnimate,
          [target]: true,
        },
      });
    }
  };

  deAnimateTitle = e => {
    const { navAnimate } = this.state;
    const target = e.currentTarget.getAttribute('name');
    this.setState({
      navAnimate: {
        ...navAnimate,
        [target]: false,
      },
    });
  };

  home = () => {
    window.scrollTo(0, 0);
    this.setState({
      bgColor: '#066358',
      homeClicked: true,
      projectsClicked: false,
    });
  };

  projects() {
    this.setState({
      bgColor: '#534775',
      homeClicked: false,
      projectsClicked: true,
    });
  }

  about() {
    this.setState({
      bgColor: '#534775',
      homeClicked: false,
      projectsClicked: false,
    });
  }

  render() {
    // destructuring
    const {
      projects,
      bgColor,
      projectsClicked,
      homeClicked,
      navAnimate,
    } = this.state;
    return (
      <div
        style={{
          background: bgColor,
          transition: 'all 1s linear',
        }}
      >
        <div className='navigation'>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <span
              onClick={this.home}
              className='navbar-brand about name'
              name='name'
              onMouseEnter={this.animateTitle}
              onMouseLeave={this.deAnimateTitle}
            >
              <span className={navAnimate.name ? 'animate' : ''}>B</span>
              <span className={navAnimate.name ? 'animateUp' : ''}>A</span>
              <span className={navAnimate.name ? 'animate' : ''}>D</span>
              <span className={navAnimate.name ? 'animateUp' : ''}>R</span>
              <span style={{ display: 'inline' }}> </span>
              <span className={navAnimate.name ? 'animate' : ''}>M</span>
              <span className={navAnimate.name ? 'animateUp' : ''}>O</span>
              <span className={navAnimate.name ? 'animate' : ''}>R</span>
              <span className={navAnimate.name ? 'animateUp' : ''}>S</span>
              <span className={navAnimate.name ? 'animate' : ''}>A</span>
              <span className={navAnimate.name ? 'animateUp' : ''}>D</span>
              <span className={navAnimate.name ? 'animate' : ''}>I</span>
            </span>

            <span
              className={
                projectsClicked
                  ? 'navbar-brand projects right active'
                  : 'navbar-brand projects right'
              }
              onClick={() => this.projects()}
              name='projects'
              onMouseEnter={this.animateTitle}
              onMouseLeave={this.deAnimateTitle}
            >
              <span className={navAnimate.projects ? 'animate' : ''}>P</span>
              <span className={navAnimate.projects ? 'animateUp' : ''}>R</span>
              <span className={navAnimate.projects ? 'animate' : ''}>O</span>
              <span className={navAnimate.projects ? 'animateUp' : ''}>J</span>
              <span className={navAnimate.projects ? 'animate' : ''}>E</span>
              <span className={navAnimate.projects ? 'animateUp' : ''}>C</span>
              <span className={navAnimate.projects ? 'animate' : ''}>T</span>
              <span className={navAnimate.projects ? 'animateUp' : ''}>S</span>
            </span>

            <span
              className={
                homeClicked
                  ? 'navbar-brand right home active'
                  : 'navbar-brand right home'
              }
              onClick={() => this.home()}
              name='home'
              onMouseEnter={this.animateTitle}
              onMouseLeave={this.deAnimateTitle}
            >
              <span className={navAnimate.home ? 'animate' : ''}>H</span>
              <span className={navAnimate.home ? 'animateUp' : ''}>O</span>
              <span className={navAnimate.home ? 'animate' : ''}>M</span>
              <span className={navAnimate.home ? 'animateUp' : ''}>E</span>
            </span>
          </nav>
        </div>

        {/* Show Home content */}
        <CSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}
        >
          {homeClicked ? <Tagline /> : null}
        </CSSTransitionGroup>

        {/* Show Projects Content */}
        <CSSTransitionGroup
          transitionName='showProjects'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {projectsClicked ? (
            <Projects
              hoverOn={this.hoverOn}
              hoverOff={this.hoverOff}
              projects={projects}
              parallex={this.parallex}
              animateTitle={this.animateTitle}
              deAnimateTitle={this.deAnimateTitle}
            />
          ) : null}
        </CSSTransitionGroup>
        <div className='seeCvBox'>
          <a
            href='https://twitter.com/BMorsadi'
            target='_blank'
            rel='noopener noreferrer'
          >
            {Icons.twitter}
          </a>
          <a
            href='https://linkedin.com/in/bmorsadi/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {Icons.linkedIn}
          </a>
          <a
            href='https://mail.google.com/mail/u/0/#inbox/FMfcgxwDrRSgwqnSjlRhGcXDcSzJwKlZ?compose=VpCqJXKBnlxTTnstQGDVjfPvjndQtFTBdLQsVdSKjkfjJSCsTNjLwBDxZBMXsCdLqLFKmvG'
            target='_blank'
            rel='noopener noreferrer'
          >
            {Icons.email}
          </a>
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            {Icons.profile}
          </a>
          <a
            href='https://github.com/Morsadi/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {Icons.github}
          </a>
        </div>
      </div>
    );
  }
}

export default App;
