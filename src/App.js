
import React, { Component } from 'react';
import { Tagline } from './components/tagline';
import {About} from './components/about'
import { Projects } from './components/projects.js';
import { SocialMedia } from './components/socialMedia';
import 'bootstrap/dist/css/bootstrap.css';
import PhoneProjects from './components/phoneProjects';




var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

class App extends Component {


  
  constructor(props) {
    super(props);
    this.state = { 
      phoneProjectsStyle:{
          TGS: {minHeight:'0'},
          acoustic: {minHeight:'0'},
          headrush: {minHeight:'0'},
          scaler: {minHeight:'0'},
          pblr: {minHeight:'0'},
      },
      moreInfo: {
          text: '', 
          opacity: 0, 
          icon: .3
    },

      logoOpacity: {
          'TGS': 1, 
          'HEADRUSH': .3, 
          'ACOUSTICS': .3, 
          'pblr': .3, 
          'scaler': .3 },

      bgColor: '#066358', 
      link :'https://alumni.tgs.org/',
      opacity : 1,
      innerText : "",

      homeClicked: true,
      aboutClicked: false,
      projectsClicked: false,
      contactClicked: false,
     
    };
    this.changeMe = this.changeMe.bind(this);
  }

    showMobileProject =(project )=>{
      console.log(this.state.phoneProjectsStyle.TGS.overFlow)
    }


componentDidMount(){
  this.setState({
    innerText : "THINK Global School (TGS) is the world's first traveling high school. The international student attendees visit 12 countries before they graduate, all while integrating education with travel and technology. The TGS Alumni Network serves as an extension of THINK Global School where alumni connect as global ambassadors.",
    moreInfo:{
      ...this.state.moreInfo,
      text:'Initially, I was hired as an independent contractor for THINK Global School to translate their web content from English to both French and Arabic. I was later re-hired to design the UI for the THINK Global School Alumni Network and convert it to code to be hosted on Wordpress. Eventually, I incorporated Open Apply API along with Google Sheets API to create a platform for TGS alumni to input and review their information on the database, as well as submit profile update requests.'
    }
  })
}


  showMoreInfo =()=>{
  this.setState({
    moreInfo: {
        ...this.state.moreInfo,
        opacity: .4,
        icon: 0
      }
    })
  }

  hideMoreInfo =()=>{
    this.setState({
      moreInfo: {
        ...this.state.moreInfo,
        opacity: 0,
        icon: .3
      }
    })
  }



   changeMe(e) {
    if (e === 'TGS'){
      
      this.setState({
        opacity : 0,
        logoOpacity: {'TGS': 1, 'HEADRUSH': .3, 'ACOUSTICS': .3, 'pblr': .3, 'scaler': .3 },
        link : 'https://alumni.tgs.org/',
        
      })
      //useing timeout to leave room for the fadeout and fadein
        setTimeout(function(){
          this.setState({
            innerText : "THINK Global School (TGS) is the world's first traveling high school. The international student attendees visit 12 countries before they graduate, all while integrating education with travel and technology. The TGS Alumni Network serves as an extension of THINK Global School where alumni connect as global ambassadors.",
            moreInfo: {
              ...this.state.moreInfo,
              text: "Initially, I was hired as an independent contractor for THINK Global School to translate their web content from English to both French and Arabic. I was later re-hired to design the UI for the THINK Global School Alumni Network and convert it to code to be hosted on Wordpress. Eventually, I incorporated Open Apply API along with Google Sheets API to create a platform for TGS alumni to input and review their information on the database, as well as submit profile update requests. "
            }
          
          })}.bind(this), 500)

        setTimeout(function(){
          this.setState({
            opacity : 1
          })}.bind(this), 1000)
          
    }
    else if (e === 'ACOUSTICS'){
     
      this.setState({
        opacity : 0,
        logoOpacity: {'TGS': .3, 'HEADRUSH': .3, 'ACOUSTICS': 1, 'pblr': .3, 'scaler': .3 },
        link: 'http://acousticsaturdays.com'
      })
        setTimeout(function(){
          this.setState({
            innerText : 'As a Rabat-based artist collective, Acoustic Saturdays brings together a dynamic community of musicians, singers, photographers, videographers and graphic designers. Acoustic Saturdays connects emerging and veteran artists who contribute to the truthful and socially relevant development of accessible art and music in Morocco.',
            moreInfo: {
              ...this.state.moreInfo,
              text: "As part of the Acoustic Saturdays collective, I volunteered to design the UI of this website. I used Javascript & Wordpress POST-API to code different sections from scratch, creating features such as a music player and an automated news page. "
            }
          })}.bind(this), 500)

        setTimeout(function(){
          this.setState({
            opacity : 1
          })}.bind(this), 1000)
    }else if (e === 'HEADRUSH'){
      this.setState({
        opacity : 0,
        logoOpacity: {'TGS': .3, 'HEADRUSH': 1, 'ACOUSTICS': .3, 'pblr': .3, 'scaler': .3 },
        link: 'https://www.headrushlearning.com/'
        
      })
        setTimeout(function(){
          this.setState({
            innerText : 'HEADRUSH is a platform that facilitates project-based learning from start to finish allowing students to become self-empowered learners. As a progressive learning management system, HEADRUSH is changing the way teachers track, record and assess student project work. ',
            moreInfo: {
              ...this.state.moreInfo,
              text: 'As the designer of this wireframe and UI, I served as an independent contractor for co-founder Michael Hourahine. I implemented minimal javascript in Wix to achieve desired functionality for low-maintenance site management. This learning company supports 60 globally-based schools and the website is daily visited.'
            }
            
          })}.bind(this), 500)

        setTimeout(function(){
          this.setState({
            opacity : 1
          })}.bind(this), 1000)   

    }else if (e === 'pblr'){
      this.setState({
        opacity : 0,
        logoOpacity: {'TGS': .3, 'HEADRUSH': .3, 'ACOUSTICS': .3, 'pblr': 1, 'scaler': .3 },
        link: 'https://competent-jang-49a5f5.netlify.com/'
        
      })
        setTimeout(function(){
          this.setState({
            innerText : "According to PBL Works, Project Based Learning (PBL) prepares students for academic, personal, and career success, and readies young people to rise to the challenges of their lives and the world they will inherit. Known to build the capacity of teachers, PBL Works designed the PBL rubric to help educators facilitate transformative project work in their classrooms." ,
            moreInfo: {
              ...this.state.moreInfo,
              text: "This app simplifies reflection for school leaders and teachers as they review their PBL practice and plan for professional growth. In addition to designing the UI of this app, I used Reactjs with the integration of Firebase to create a platform for each user to add teachers, update their profile and assess their skills. This digital rubric allows for transparent tracking of PBL educator development."
            }
          })}.bind(this), 500)

        setTimeout(function(){
          this.setState({
            opacity : 1
          })}.bind(this), 1000)   

    }
    else if (e === 'scaler'){
      this.setState({
        opacity : 0,
        logoOpacity: {'TGS': .3, 'HEADRUSH': .3, 'ACOUSTICS': .3, 'pblr': .3, 'scaler': 1 },
        link: 'https://mystifying-chandrasekhar-9563f5.netlify.com/'
        
      })
        setTimeout(function(){
          this.setState({
            innerText : "All vocalists know that practicing scales challenges and expands the vocal range. It is difficult for vocalists to transition between key transpositions easily as it requires understanding and, more importantly, time, to adjust a piece accordingly to one’s own vocal range.",
            moreInfo: {
              ...this.state.moreInfo,
              text: "I built this app out of a felt need to adjust popular scales to match my deep vocal range. Wireframed/designed in Figma and written in ReactJs, this app generates different key transpositions of any song. Now vocalists can submit any original song progression and find the right scales that match their voice."
            }
          })}.bind(this), 500)

        setTimeout(function(){
          this.setState({
            opacity : 1
          })}.bind(this), 1000)   

    }
  }


//sdafas
  home(){
    this.setState({
      bgColor: '#066358',
      homeClicked: true,
      aboutClicked: false,
      projectsClicked: false,
      contactClicked: false,
     
    })
  }
  about(){

        this.setState({
          bgColor: '#534775',
          homeClicked: false,
          aboutClicked: true,
          projectsClicked: false,
          contactClicked: false,
        })
      
      }
  projects(){
    this.setState({
      bgColor: '#064763',
      homeClicked: false,
      aboutClicked: false,
      projectsClicked: true,
      contactClicked: false,
    })
  }
  contact(){
    this.setState({
      bgColor: '#064763',
      homeClicked: false,
      aboutClicked: false,
      projectsClicked: false,
      contactClicked: true,
    })
  }
  
  
  render(){


return (
        <div style={{
          background: this.state.bgColor,
          minHeight: window.innerHeight,
          transition: 'all 1s linear' 
          }}>
            <div className="navigation" >
  <nav  className="navbar navbar-expand-lg navbar-light">
  <span className="navbar-brand about name">BADR MORSADI</span>

    <span className={this.state.projectsClicked?"navbar-brand projects right active":"navbar-brand projects right"} onClick={()=>this.projects()}>Projects</span>
    <span className={this.state.aboutClicked?"navbar-brand about right active":"navbar-brand about right"} onClick={()=>this.about()}>About</span>
    <span className={this.state.homeClicked?"navbar-brand right home active":"navbar-brand right home"} onClick={()=>this.home()}>Home</span>
  </nav>
</div>

            {/*Show Home content*/}
            <CSSTransitionGroup
            transitionName='appear'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={200}
            >
          {
            this.state.homeClicked?
            <Tagline />
            :null
          }
          </CSSTransitionGroup>
          
          
          {/*Show About Content */}
            <CSSTransitionGroup
            transitionName='appear'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={200}
            >
            {
            this.state.aboutClicked?
              <div className="introBox">
              <About />
              

              </div>
              

           
            :null
          }

           </CSSTransitionGroup>
          
          {/*Show Projects Content */}
          <CSSTransitionGroup
            transitionName='showProjects'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            >
          {
          this.state.projectsClicked?(window.innerWidth <= 600)?<PhoneProjects />:
            <Projects showMoreInfo={this.showMoreInfo} hideMoreInfo={this.hideMoreInfo} moreInfo={this.state.moreInfo} link={this.state.link} logoOpacity={this.state.logoOpacity} opacity={this.state.opacity} fun={this.changeMe} text={this.state.innerText} />
            :null
          }
            </CSSTransitionGroup>



            <SocialMedia bgColor={this.state.bgColor}/>




</div>
)
}
}

export default App;
