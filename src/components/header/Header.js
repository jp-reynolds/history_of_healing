import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="navContainer">
            <h3 className="homeTitle" >A History of Healing</h3>
        	<img className="logo" alt="History_of_Healing" src="https://get.wallhere.com/photo/black-illustration-dark-silhouette-logo-cartoon-moustache-plague-doctors-Plague-The-Doctor-hand-font-33366.png"/>
        	<ul className="navbar">
        		<li className="navItems"> <a href="/"> Home </a> </li>
        		<li className="navItems"> <a href="/episodes"> Episodes </a> </li>
        		<li className="navItems"> <a href="/about"> About </a> </li>
        		<li className="navItems"> <a href="/contact"> Contact </a> </li>
        	</ul>
            
		</div>
    );
  }
}

export default Header;