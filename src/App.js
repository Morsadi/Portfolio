
import React, { Component } from 'react';
import { Tagline } from './components/tagline';
import { About } from './components/about';
import { Projects } from './components/projects';
import { SocialMedia } from './components/socialMedia';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {


  
  constructor(props) {
    super(props);
    this.state = { 
      
      bgColor: '#066358', 
      homeClicked: true,
      aboutClicked: false,
      projectsClicked: false,
      contactClicked: false,
    
    };
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
          height: window.innerHeight,
          transition: 'all 1s linear' 
          }}>
            <div className="navigation" >
  <nav  className="navbar navbar-expand-lg navbar-light">
    <span className="navbar-brand name" onClick={()=>this.home()}>BADR MORSADI</span>
    <span className="navbar-brand right" onClick={()=>this.projects()}>Projects</span>
    <span className="navbar-brand right" onClick={()=>this.about()}>About</span>
    <span className="navbar-brand right" onClick={()=>this.home()}>Home</span>
  </nav>
</div>
          {
            this.state.homeClicked?
            <Tagline />
            :null
          }
          {
            this.state.aboutClicked?
            <About />
            :null
          }
          {
          this.state.projectsClicked?
            <Projects />
            :null
          }
            


            <SocialMedia />




</div>
)
}
}

export default App;
