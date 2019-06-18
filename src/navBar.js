import React from 'react';
import Row from 'react-bootstrap/Row'
import { Nav, Navbar, NavItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';



export const Navigation = ()=>{

    const style = {
        fontFamily: 'Hiragino Kaku Gothic Std'
    }
    console.log(window.innerHeight)

return ( 
<div className="well" >
  <nav  className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand name" href="#home" >BADR MORSADI</a>
    <a className="navbar-brand right" href="/projects">Projects</a>
    <a className="navbar-brand right" href="/skills">Skills</a>
    <a className="navbar-brand right" href="/about">About</a>
    <a className="navbar-brand right" href="#home">Home</a>
  </nav>
</div>
    )

}