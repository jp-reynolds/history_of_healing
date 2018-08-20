import React, { Component } from 'react';
import Header from '../header/Header';
import './Home.css'


class Home extends Component {
  render() {
    return (
    	<div>
            <Header/>
            <div className="descriptionBox">
    		  <h5 className="description">A podcast about the bizarre, the macabre, and the incredulous in medicine's history and how the past is not as distant from modern medicine as we'd like to believe</h5>
    		</div>
            <div className="homeContent">
    			<img alt="Doctor" className="homeImage" src="https://blog.wellcomelibrary.org/wp-content/uploads/2013/09/1d4fcd7968c4df503994dd8b8af.jpg"/>
    			<div className="homeTextBox"><h4 className="homeText">"History of Healing is a quote and here is that quote so it shows up on the screen."</h4></div>
    		</div>
    	</div>
    );
  }
}

export default Home;
