

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
export default class PhoneProjects extends Component {



    constructor(props){
        super(props)

        this.state={

            projectMaxHeight:{
                TGS: '0px',
                acoustic:'0px',
                headrush:'0px',
                scaler:'0px',
                pblr:'0px'
              }
        }
    }


    //configure dropdown info for mobile view
showProject=(e)=>{
let id = e.currentTarget.name
let target = document.getElementById(id)
let newMaxHeight = target.scrollHeight+'px';

        if (target.style.maxHeight === '0px'){
            this.setState({
                projectMaxHeight:{  
                    ...this.state.projectMaxHeight,
                    [id]:newMaxHeight
                }
            })
        }else {
            this.setState({
                projectMaxHeight:{
                    ...this.state.projectMaxHeight,
                    [id]:'0px'
                }
            })
        }


}

  

    render() {
        return (
            <div className='phoneProjects'>
            <div>
            <img alt='logo' style={{width : '50px'}} src={require('./assets/TGS.png')} />
            <h6>
            THINK Global School (TGS) is the world's first traveling high school. The international student attendees visit 12 countries before they graduate, all while integrating education with travel and technology. The TGS Alumni Network serves as an extension of THINK Global School where alumni connect as global ambassadors.
            
            </h6>
            
          

            <input onClick={this.showProject} className='btns' type='button' name='TGS' value={(this.state.projectMaxHeight.TGS==='0px')?'+':'-'}/> 
            <p className='toShow' id='TGS' style={{maxHeight: this.state.projectMaxHeight.TGS, overflow : 'hidden'}}>
            Initially, I was hired as an independent contractor for THINK Global School to translate their web content from English to both French and Arabic. I was later re-hired to design the UI for the THINK Global School Alumni Network and convert it to code to be hosted on Wordpress. Eventually, I incorporated Open Apply API along with Google Sheets API to create a platform for TGS alumni to input and review their information on the database, as well as submit profile update requests. 
            <br /><br /><a href='https://alumni.tgs.org/' target='_blank' rel="noopener noreferrer" style={{color: 'white',
            opacity: '1!important',
            fontSize: '20px'}}>< FontAwesomeIcon icon={faLink} /></a>
            </p>
            </div>

            <div>
            <img alt='logo' style={{width : '140px'}} src={require('./assets/headrush.png')} />
            <h6>
            As a Rabat-based artist collective, Acoustic Saturdays brings together a dynamic community of musicians, singers, photographers, videographers and graphic designers. Acoustic Saturdays connects emerging and veteran artists who contribute to the truthful and socially relevant development of accessible art and music in Morocco.
            </h6>
            <input onClick={this.showProject} className='btns' type='button' name='headrush' value={(this.state.projectMaxHeight.headrush==='0px')?'+':'-'} />
            <p className='toShow' id='headrush' style={{maxHeight: this.state.projectMaxHeight.headrush, overflow : 'hidden'}}>
As part of the Acoustic Saturdays collective, I volunteered to design the UI of this website. I used Javascript & Wordpress POST-API to code different sections from scratch, creating features such as a music player and an automated news page.
<br /><br /><a href='https://alumni.tgs.org/' target='_blank' rel="noopener noreferrer" style={{color: 'white',
            opacity: '1!important',
            fontSize: '20px'}}>< FontAwesomeIcon icon={faLink} /></a>
            </p>
            </div>
           

            <div>
            <img alt='logo' style={{width : '170px'}} src={require('./assets/AcousticS.png')} />
            <h6>
            HEADRUSH is a platform that facilitates project-based learning from start to finish allowing students to become self-empowered learners. As a progressive learning management system, HEADRUSH is changing the way teachers track, record and assess student project work.
            </h6>
            <input onClick={this.showProject} className='btns' type='button' name='acoustic' value={(this.state.projectMaxHeight.acoustic==='0px')?'+':'-'} />
            <p className='toShow' id='acoustic' style={{maxHeight: this.state.projectMaxHeight.acoustic, overflow : 'hidden'}}>
            As the designer of this wireframe and UI, I served as an independent contractor for co-founder Michael Hourahine. I implemented minimal javascript in Wix to achieve desired functionality for low-maintenance site management. This learning company supports 60 globally-based schools and the website is daily visited.
            <br /><br /><a href='https://alumni.tgs.org/' target='_blank' rel="noopener noreferrer" style={{color: 'white',
            opacity: '1!important',
            fontSize: '20px'}}>< FontAwesomeIcon icon={faLink} /></a>
            </p>
            </div>

            <div>
            <img alt='logo' style={{width : '80px'}} src={require('./assets/k-transposer.png')} />
            <h6>
            All vocalists know that practicing scales challenges and expands the vocal range. It is difficult for vocalists to transition between key transpositions easily as it requires understanding and, more importantly, time, to adjust a piece accordingly to one’s own vocal range.
            </h6>
            <input onClick={this.showProject} className='btns' type='button' name='scaler' value={(this.state.projectMaxHeight.scaler==='0px')?'+':'-'} />
            <p className='toShow' id='scaler' style={{maxHeight: this.state.projectMaxHeight.scaler,overflow : 'hidden'}}>
            I built this app out of a felt need to adjust popular scales to match my deep vocal range. Wireframed/designed in Figma and written in ReactJs, this app generates different key transpositions of any song. Now vocalists can submit any original song progression and find the right scales that match their voice.
            <br /><br /><a href='https://alumni.tgs.org/' target='_blank' rel="noopener noreferrer" style={{color: 'white',
            opacity: '1!important',
            fontSize: '20px'}}>< FontAwesomeIcon icon={faLink} /></a>
            </p>
            </div>


            <div>
            <img alt='logo' style={{width : '110px'}} src={require('./assets/PBLR.png')} />
            <h6>
            According to PBL Works, Project Based Learning (PBL) prepares students for academic, personal, and career success, and readies young people to rise to the challenges of their lives and the world they will inherit. Known to build the capacity of teachers, PBL Works designed the PBL rubric to help educators facilitate transformative project work in their classrooms.
            </h6>
            <input onClick={this.showProject} className='btns' type='button' name='pblr' value={(this.state.projectMaxHeight.pblr==='0px')?'+':'-'} />
            <p className='toShow' id='pblr' style={{maxHeight: this.state.projectMaxHeight.pblr,overflow : 'hidden'}}>
            This app simplifies reflection for school leaders and teachers as they review their PBL practice and plan for professional growth. In addition to designing the UI of this app, I used Reactjs with the integration of Firebase to create a platform for each user to add teachers, update their profile and assess their skills. This digital rubric allows for transparent tracking of PBL educator development
            <br /><br /><a href='https://alumni.tgs.org/' target='_blank' rel="noopener noreferrer" style={{color: 'white',
            opacity: '1!important',
            fontSize: '20px'}}>< FontAwesomeIcon icon={faLink} /></a>
            </p>
            </div>
           
    
        </div>
        )
    }
}


