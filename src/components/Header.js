
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

export default function Header(props) {

  return (
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/body">About</Link>
          {/* <a className="nav-link" href="/body">About</a> */}
        </li>

      </ul>
      <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} 
        style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
      
      <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} 
        style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
      
      <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} 
        style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
      
      <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} 
        style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
      
      </div>
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={()=>{props.switchDarkLight(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>

{/* <div className="dropdown mx-4">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Select Themes  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={props.changegreen} href="#">Green</a></li>
    <li><a className="dropdown-item" onClick={props.changered} href="#">Red</a></li>
    <li><a className="dropdown-item" onClick={props.changeblue} href="#">Blue</a></li>
    <li><a className="dropdown-item" onClick={props.changeyellow} href="#">Yellow</a></li>


  </ul>
</div> */}


    </div>
  </div>
</nav> 


  )
}


// PropTypes={
//   title:PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired
// }

// Header.defaultProps={
//   title: 'Set tilte here',
//   BodyText: 'Body'
// };
