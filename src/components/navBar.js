import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



export const Navigation = ()=>{

    const style = {
        fontFamily: 'Hiragino Kaku Gothic Std'
    }
    console.log(window.innerHeight)

return ( 
<div className="well" >
  <nav  className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand name" href="" >BADR MORSADI</a>
    <a className="navbar-brand right" href="">Projects</a>
    <a className="navbar-brand right" href="">Skills</a>
    <a className="navbar-brand right" >About</a>
    <a className="navbar-brand right" href="">Home</a>
  </nav>
</div>
    )

}