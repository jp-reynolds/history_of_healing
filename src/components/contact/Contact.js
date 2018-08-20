import React, { Component } from 'react';
import Header from '../header/Header';
import './Contact.css'


class Contact extends Component {
  render() {
    return (
    	<div className="contactForms">
        <Header/>
        <input className="inputContact"></input>
        <input className="inputContact"></input>
    	</div>
    );
  }
}

export default Contact;