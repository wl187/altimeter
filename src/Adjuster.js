import react, {useState} from "react";
import radaltcover from './assets/radaltcover.png';
import radaltback from "./assets/radaltback.png";
import arrow from "./assets/radaltneedle.png";
import bug from "./assets/bug.png";
import flag from "./assets/radaltflag.png";

const Adjuster=({arrowValueInitial,bugValueInitial,maxValue,minValue})=>{
	const[arrowValue,setArrowValue]=useState(arrowValueInitial);
	const[bugValue,setBugValue]=useState(bugValueInitial);
	const[isChecked,setCheckedState]=useState(false);
	
	let bugAngle=(bugValue/maxValue)*270;
	let bugString="rotate("+bugAngle+"deg)";
	let bugStyle={
		transform: bugString
	 };
	
	var colorOfLight;
	var flagDisplayed;
	
	
			let arrowAngle=(arrowValue/maxValue)*270;
			const arrowAngleStill=arrowAngle=(arrowValue/maxValue)*270;
		let arrowString="rotate("+arrowAngle+"deg)";
		let arrowStyle={
			transform:arrowAngleStill
		}
	if(isChecked==true)
	{
		colorOfLight="pink";
		flagDisplayed="none";
		
        arrowStyle={
			transform: arrowString
		};
	}
	else{
		colorOfLight="maroon";
		flagDisplayed="";
		
		
	}
	
	let lightColor={
		backgroundColor: colorOfLight
	}
	
	 let flagShown={
		 display:flagDisplayed
	 }
	
	return (
	 <div>
	  <div>
	    <h1 className="title">Radar Altimeter</h1>
        <img src={radaltback} className="stack" alt="logo" />
		<img src={radaltcover} className="stack" alt="logo" />
        <img src={arrow} className="stack" id="arrow" alt="logo" style={arrowStyle}/>
        <img src={bug} className="stack" id="bug" alt="logo"  style={bugStyle} />
        <img src={flag} className="stack" alt="logo" style={flagShown} /> 
		<div className='light' style={lightColor}></div>
	  </div>
	  <div className="title">
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		
		 <div>
		  <span>Altimeter:</span>
		  <input value={arrowValue} type="range" className="range" min={minValue} max={maxValue} onChange={(e)=>{setArrowValue(e.target.value)}} /> 
			 <span className="readingValue">{arrowValue}</span>  
		 <br /><br /><br />
		 </div>
		 <div>
		  <span>Bug:</span>
		  <input value = {bugValue} type="range" className="range" min={minValue} max={maxValue} onChange={(e)=>{setBugValue(e.target.value)}}/>
			<span className="readingValue">{bugValue}</span>
	      <br /><br /><br />
		 </div>
		 <div>
		  Has power:
		  <input type="checkbox" checked={isChecked} onChange={(e)=>{setCheckedState(!isChecked)}}/> 
		 </div>
	  </div>
	 </div>
	);
}

export {Adjuster};