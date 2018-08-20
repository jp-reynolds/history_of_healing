import React, { Component } from 'react';
import Header from '../header/Header';
import './About.css'


class About extends Component {
  render() {
    return (
    	<div>
    	<Header/>
    	<section className="people">
        	<div className="person">
        		<div className="imageAbout"></div>
        		<div className="descriptionAbout"></div>
            </div>
        	<div className="person">
        		<div className="imageAbout"></div>
        		<div className="descriptionAbout"></div>
            </div>
        	<div className="person">
        		<div className="imageAbout"></div>
        		<div className="descriptionAbout"></div>
            </div>
        </section>
    	</div>
    );
  }
}

export default About;