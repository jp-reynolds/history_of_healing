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
        		<img className="imageAbout" alt="history" src="https://www.kevinthom.com/wp-content/uploads/2014/08/professional-headshot-for-executive-1080x675.jpg"/>
        		<p className="descriptionAbout">"History of Healing is a quote and here is that quote so it shows up on the screen."</p>
            </div>
        	<div className="person">
                <p className="descriptionAbout">"History of Healing is a quote and here is that quote so it shows up on the screen."</p>
        		<img className="imageAbout" alt="history" src="https://i.pinimg.com/736x/d3/ef/7f/d3ef7f12617985b708436adbfdc7f23d.jpg"/>
            </div>
        	<div className="person">
        		<img className="imageAbout" alt="history" src="https://www.cimaphoto.com/wp-content/uploads/2013/11/HeadshotOnTheStreet26-11-16-2013.jpg"/>
        		<p className="descriptionAbout">"History of Healing is a quote and here is that quote so it shows up on the screen."</p>
            </div>
        </section>
    	</div>
    );
  }
}

export default About;