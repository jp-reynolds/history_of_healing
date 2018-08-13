import React, { Component } from 'react';

import './Home.css'


class Home extends Component {
  render() {
    return (
    	<div>
    		<div className="homeContainer">
    		</div>
    		<div className="homeContent">
    			<img className="homeImage" src="https://blog.wellcomelibrary.org/wp-content/uploads/2013/09/1d4fcd7968c4df503994dd8b8af.jpg"/>
    			<div className="homeTextBox"><h4 className="homeText">"History of Healing is a quote and here is that quote so it shows up on the screen."</h4></div>
    		</div>
    	</div>
    );
  }
}

export default Home;
