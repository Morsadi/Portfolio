import React from 'react'


export const SocialMedia = (props) => {

    function linkedIn(){
        window.open('https://www.linkedin.com/in/bmorsadi/')
    }
    function twitter(){
        window.open('https://twitter.com/BMorsadi')
    }
return (

<div id="socialMedia">

<button onClick={()=>{twitter()}} className="twitter" href="https://twitter.com/BMorsadi" >t</button><br/>
<button onClick={()=>{linkedIn()}} className="linkedIn" href="https://twitter.com/BMorsadi" >in</button>

</div>



)
}