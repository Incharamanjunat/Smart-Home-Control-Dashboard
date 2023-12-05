import React, { useState } from 'react';
import './SmartHomeControlDashboard.css';

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

export const SmartHomeControlDashboard = () => {

  let api_key="1b87537fe46a2a793ad807f266df4219";

  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element =document.getElementsByClassName("cityInput");
    if(element[0].value==="")
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    
      let response = await fetch(url);
      let data = await response.json();

          document.querySelector(".humidity-percentage").innerHTML = data.main.humidity + " %";
          document.querySelector(".wind-rate").innerHTML = data.wind.speed + " km/h";
          document.querySelector(".weather-temp").innerHTML = data.main.temp + " °C";
          document.querySelector(".weather-location").innerHTML = data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
      setWicon(clear_icon);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
      setWicon(cloud_icon);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
      setWicon(snow_icon);
    }
    else
    {
      setWicon(clear_icon);
    }
  }
  const [toggleButton, setToggleButton]= useState(false);
  const handleClick = () =>{
    setToggleButton(!toggleButton)
    console.log(toggleButton, "value");
  }

  return (
    <div>
    <div style={{width: 500, height: 45, left: 460, top: 37, position: 'absolute', background: 'rgba(231, 231, 231, 0.85)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 18, border: '1px #9E98C7 solid'}} />
    <div style={{width: 1188, height: 93, left: 115, top: 43, position: 'absolute', textAlign: 'center', color: '#50315B', fontSize: 22, fontFamily: 'Thonburi', fontWeight: '700', wordWrap: 'break-word'}}>Smart Home Control Device</div>
    <div style={{width: 970, height: 630, left: 240, top: 130, position: 'absolute', mixBlendMode: 'luminosity', background: 'linear-gradient(180deg, #B3E2F6 10%, rgba(179.90, 226.28, 246.16, 0) 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 6, border: '1px #D9CEE7 solid'}} />
    <div style={{width: 450, height: 590, left: 263, top: 152, position: 'absolute', background: 'rgba(0, 0, 0, 0.5)', borderRadius: 4}} >
    <div className='top-bar'>
        <input type="text" className="cityInput" placeholder='Search'/>
         <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt=""/>
         </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt=""/>
      </div>
      <div className="weather-temp">0°C</div>
      <div className="weather-location">Search City</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon"/>
          <div className="data">
            <div className="humidity-percentage">0%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon"/>
          <div className="data">
            <div className="wind-rate">0 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
    <div style={{width: 450, height: 590, left: 737, top: 152, position: 'absolute', background: 'rgba(0, 0, 0, 0.5)', borderRadius: 4}} >
    <div className="app">
       <div onClick={handleClick} className='toggle1'>
        {toggleButton?<div className='toggle_left1'></div>:
        <div className='toggle_right1'></div>}
      </div>
      <div onClick={handleClick} className='toggle2'>
        {toggleButton?<div className='toggle_left2'></div>:
        <div className='toggle_right2'></div>}
      </div>
      <div onClick={handleClick} className='toggle3'>
        {toggleButton?<div className='toggle_left3'></div>:
        <div className='toggle_right3'></div>}
      </div>
      <div onClick={handleClick} className='toggle4'>
        {toggleButton?<div className='toggle_left4'></div>:
        <div className='toggle_right4'></div>}
      </div>
      <div onClick={handleClick} className='toggle5'>
        {toggleButton?<div className='toggle_left5'></div>:
        <div className='toggle_right5'></div>}
      </div>
      </div>
    </div>
    <div style={{width: 205, height: 58, left: 863, top: 200, position: 'absolute', color: '#DAE6E9', fontSize: 50, fontFamily: 'TharLon', fontWeight: '400', wordWrap: 'break-word'}}>Lights </div>
    <div style={{width: 230, height: 48, left: 765, top: 300, position: 'absolute', color: '#DAE6E9', fontSize: 40, fontWeight: '400', wordWrap: 'break-word'}}>Living Room</div>
    <div style={{left: 772, top: 385, position: 'absolute', color: '#DAE6E9', fontSize: 40, fontWeight: '400', wordWrap: 'break-word'}}>Bedroom 1</div>
    <div style={{left: 772, top: 470, position: 'absolute', color: '#DAE6E9', fontSize: 40, fontWeight: '400', wordWrap: 'break-word'}}>Bedroom 2</div>
    <div style={{left: 772, top: 555, position: 'absolute', color: '#DAE6E9', fontSize: 40, fontWeight: '400', wordWrap: 'break-word'}}>Kitchen</div>
    <div style={{left: 772, top: 640, position: 'absolute', color: '#DAE6E9', fontSize: 40, fontWeight: '400', wordWrap: 'break-word'}}>Dark mode</div>
    </div>
  )
}