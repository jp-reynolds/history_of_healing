import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="navContainer">
            <h3 className="homeTitle" >A History of Healing</h3>
        	<img className="logo" alt="Bill_Murray" src="https://get.wallhere.com/photo/black-illustration-dark-silhouette-logo-cartoon-moustache-plague-doctors-Plague-The-Doctor-hand-font-33366.png"/>
        	<ul className="navbar">
        		<li className="navItems"> <a href="/home"> Home </a> </li>
        		<li className="navItems"> <a href="/episodes"> Episodes </a> </li>
        		<li className="navItems"> <a href="/about"> About </a> </li>
        		<li className="navItems"> <a href="/contact"> Contact </a> </li>
        	</ul>
            <h5 className="description">A podcast about the bizarre, the macabre, and the incredulous in medicine's history and how the past is not as distant from modern medicine as we'd like to believe</h5>
		</div>
    );
  }
}

export default Header;