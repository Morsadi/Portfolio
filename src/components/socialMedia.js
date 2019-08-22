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


    //https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQWmXXPrHZDWTWcsGDPjHjZGFtfsJJMzVFfPCzRBsbcXQlwzPLVgRTZzLNVNZvJpMPnB
return (

<div id="socialMedia">

<button onClick={()=>{twitter()}} className="twitter" >t</button>
<button onClick={()=>{linkedIn()}} className="linkedIn" >in</button>
<button onClick={()=>{email()}} className="linkedIn" >@</button>

</div>



)
}