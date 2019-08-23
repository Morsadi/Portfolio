import React from 'react'


export const SocialMedia = (props) => {

    function linkedIn(){
        window.open('https://www.linkedin.com/in/bmorsadi/')
    }
    function twitter(){
        window.open('https://twitter.com/BMorsadi')
    }

    function email(){
        window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQWmXXPrHZDWTWcsGDPjHjZGFtfsJJMzVFfPCzRBsbcXQlwzPLVgRTZzLNVNZvJpMPnB')
    }



    return (

<div id="socialMedia">

<button style={{color: props.socialBtn.twitter}} onMouseEnter={props.socialHoverOn} onMouseLeave={props.socialHoverOff} onClick={()=>{twitter()}}  name="twitter" >t</button>
<button style={{color: props.socialBtn.linkedIn}} onMouseEnter={props.socialHoverOn} onMouseLeave={props.socialHoverOff} onClick={()=>{linkedIn()}} name="linkedIn" >in</button>
<button style={{color: props.socialBtn.email}} onMouseEnter={props.socialHoverOn} onMouseLeave={props.socialHoverOff} onClick={()=>{email()}} name="email" >@</button>

</div>



)
}