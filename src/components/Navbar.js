import React from 'react'
import PropTypes from 'prop-types';
import { a } from 'react-router-dom';

export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.aboutSite}</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${(props.mode === 'light'?'dark':'light')}`}>
      <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
      <label className="form-check-label mx-3"   htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ?'Light Mode':'Dark Mode'}</label>
    </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-info" type="submit">Search</button>
        
      </form>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    aboutSite: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "defult_title",
    home: "defult_home",
    aboutSite: "defult_about"
}

