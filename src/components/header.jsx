import React, { useState } from 'react';
import "../css/header.css";
function Header(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top z-index-1 shadow-lg  header_class" >
        <div class="container-fluid">
         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav list_items">
            <li className="nav-item">
              <a className="nav-link list_items" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/achievements">Achievements</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            
            {/* <li className="nav-item">
              <a className="nav-link" href="/signup">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact"><img href="#" /></a>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-primary" id="generateBtn2">Logout</button>
            </li> */}
          </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header;
