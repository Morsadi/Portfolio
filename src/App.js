/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Home } from './components/home';
import { Projects } from './components/projects';
import { Icons } from './components/icons';
import 'bootstrap/dist/css/bootstrap.css';
import ReactGA from 'react-ga';

const resume = require('./components/assets/snaps/MorsadiResume.pdf');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {
        headrush: {
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
        TGS: {
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
        acoustic: {
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
        pblr: {
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
        scaler: {
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
        morsadi: {
          style: {
            opacity: 1,
            transform: 'translatey(0px)',
          },
          hovered: false,
        },
        drumMachine: {
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

      fadeOut: {
        home: 1,
        projects: 1,
      },
    };
  }

  componentDidMount() {
    document.title = 'Morsadi - Home';
    ReactGA.initialize('UA-172876039-1');
    ReactGA.pageview('Home')
  }

  componentWillUnmount() {
    clearInterval(this.swap);
  }

  // remove outline when using mouse (accessibility feature)
  removeOutline = (e) => {
    const target = e.currentTarget.getAttribute('name');

    this[target].classList.add('hideOutline');
  };

  // add outline when using keyboard (accessibility feature)
  addOutline = (e) => {
    const target = e.currentTarget.getAttribute('name');
    // this[target].style.outline = '1'

    this[target].classList.remove('hideOutline');
  };

  hoverOn = (e) => {
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

  hoverOff = (e) => {
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

  home = () => {
    // fade out projects then show home
    this.setState({
      fadeOut: {
        home: 1,
        projects: 0,
      },
    });
    this.fadeProjects = setTimeout(() => {
      // set page title accordingly
      document.title = 'Morsadi - Home';
      this.setState({
        bgColor: '#066358',
        homeClicked: true,
        projectsClicked: false,
      });
    }, 600);
  };

  projects() {
    // fade out home then show projects
    this.setState({
      fadeOut: {
        home: 0,
        projects: 1,
      },
    });
    this.fadeHome = setTimeout(() => {
      // set page title accordingly
      document.title = 'Morsadi - Projects';
      this.setState({
        bgColor: '#534775',
        homeClicked: false,
        projectsClicked: true,
      });
    }, 600);
    ReactGA.event({
      category: 'Projects Page',
      action: 'view'
    })
  }
  // Google Analytics
  track = (e) => {
    if (e.target.parentNode.parentNode.nodeName === 'A') {
      let element = e.target.parentNode.parentNode.name;

      ReactGA.event({
        category: element,
        action: 'click',
      });
    }
  };

  render() {
    // destructuring
    const {
      projects,
      bgColor,
      projectsClicked,
      homeClicked,
      fadeOut,
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
            <button
              onMouseDown={this.removeOutline}
              onKeyDown={this.addOutline}
              ref={(ref) => {
                this.name = ref;
              }}
              type='button'
              onClick={this.home}
              className='navbar-brand about name'
              name='name'
            >
              BADR MORSADI
            </button>

            <button
              onMouseDown={this.removeOutline}
              onKeyDown={this.addOutline}
              ref={(ref) => {
                this.projectsRef = ref;
              }}
              type='button'
              className={
                projectsClicked
                  ? 'navbar-brand projects right active hideOutline'
                  : 'navbar-brand projects right hideOutline'
              }
              onClick={() => this.projects()}
              name='projectsRef'
            >
              PROJECT
            </button>

            <button
              type='button'
              onMouseDown={this.removeOutline}
              onKeyDown={this.addOutline}
              ref={(ref) => {
                this.homeRef = ref;
              }}
              className={
                homeClicked
                  ? 'navbar-brand right home active hideOutline'
                  : 'navbar-brand right home hideOutline'
              }
              onClick={() => this.home()}
              name='homeRef'
            >
              HOME
            </button>
          </nav>
        </div>

        {/* Show Home content */}

        {homeClicked ? <Home fadeOut={fadeOut} /> : null}

        {/* Show Projects Content */}
        {/* <CSSTransition
          className='showProjects'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        > */}
        {projectsClicked ? (
          <Projects
            hoverOn={this.hoverOn}
            hoverOff={this.hoverOff}
            projects={projects}
            parallex={this.parallex}
            animateTitle={this.animateTitle}
            deAnimateTitle={this.deAnimateTitle}
            fadeOut={fadeOut}
          />
        ) : null}
        {/* </CSSTransition> */}
        <div onClick={this.track} className='seeCvBox'>
          <a
            href='https://twitter.com/BMorsadi'
            target='_blank'
            rel='noopener noreferrer'
            name='Twitter'
          >
            {Icons.twitter}
          </a>
          <a
            href='https://linkedin.com/in/bmorsadi/'
            target='_blank'
            rel='noopener noreferrer'
            name='Linkedin'
          >
            {Icons.linkedIn}
          </a>
          <a
            href='https://mail.google.com/mail/u/0/#inbox/FMfcgxwDrRSgwqnSjlRhGcXDcSzJwKlZ?compose=VpCqJXKBnlxTTnstQGDVjfPvjndQtFTBdLQsVdSKjkfjJSCsTNjLwBDxZBMXsCdLqLFKmvG'
            target='_blank'
            rel='noopener noreferrer'
            name='Email'
          >
            {Icons.email}
          </a>
          <a
            href={resume}
            target='_blank'
            rel='noopener noreferrer'
            name='Resume'
          >
            {Icons.profile}
          </a>
          <a
            href='https://github.com/Morsadi/'
            target='_blank'
            rel='noopener noreferrer'
            name='Github'
          >
            {Icons.github}
          </a>
        </div>
      </div>
    );
  }
}

export default App;
