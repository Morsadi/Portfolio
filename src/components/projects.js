import React from 'react'




export const Projects = (props) => {

  const screenHeight = (window.innerHeight * 60 / 100) 
  function show(e){
    console.log(props.fun(e))
  }


function btnClick(){
  window.open(props.link)
}

return (

<div style={{height: (screenHeight) }} className="projectsBox">


<div className="col1">

<img alt='logo' onClick={()=>{show('TGS')}} className="project" id="TGS" style={{width : '50px', opacity: props.logoOpacity.TGS}} src={require('./assets/TGS.png')} />

<img alt='logo' onClick={()=>{show('HEADRUSH')}} className="project" id="headrush" style={{width : '140px', opacity: props.logoOpacity.HEADRUSH}} src={require('./assets/headrush.png')} />

<img alt='logo' onClick={()=>{show('ACOUSTICS')}} className="project" id="acousticS" style={{width : '190px', opacity: props.logoOpacity.ACOUSTICS}} src={require('./assets/AcousticS.png')} />

<img alt='logo' onClick={()=>{show('pblr')}} className="project" id="pblr" style={{width : '130px', opacity: props.logoOpacity.pblr}} src={require('./assets/PBLR.png')} />

<img alt='logo' onClick={()=>{show('scaler')}} className="project" id="scaler" style={{width : '80px', opacity: props.logoOpacity.scaler}} src={require('./assets/k-transposer.png')} />
</div>
<div className="col2">
<div className='infoBox' onMouseEnter={props.showMoreInfo} onMouseLeave={props.hideMoreInfo}>
<p style={{opacity: props.opacity}} className="innertext">{props.text}</p>
<h4 className='arrow' style={{opacity: props.opacity}} ><span className='icon' style={{opacity: props.moreInfo.icon}}>{'< />'}</span></h4>

<div style={{opacity: props.opacity, transition: 'all .5s ease-in-out'}}><p className='moreInfo' style={{opacity: props.moreInfo.opacity}} >{props.moreInfo.text}</p></div>
</div>
</div>
<button onClick={()=>{btnClick()}}  style={{opacity: props.opacity}} className='seeMore' >SEE WEBSITE</button>
</div>

)
}

