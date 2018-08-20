import React, { Component } from 'react';
import Header from '../header/Header';
import './Episodes.css'


class Episodes extends Component {
  render() {
    return (
    	<div>
        <Header/>
        <section className="episodes">
        	<div className="episode">
        		<div className="imageEpisode"></div>
        		<div className="descriptionEpisode"></div>
        		<div className="controlsEpisode"></div>
            </div>
        	<div className="episode">
        		<div className="imageEpisode"></div>
        		<div className="descriptionEpisode"></div>
        		<div className="controlsEpisode"></div>
            </div>
        	<div className="episode">
        		<div className="imageEpisode"></div>
        		<div className="descriptionEpisode"></div>
        		<div className="controlsEpisode"></div>
            </div>
        	<div className="episode">
        		<div className="imageEpisode"></div>
        		<div className="descriptionEpisode"></div>
        		<div className="controlsEpisode"></div>
            </div>
        </section>
    	</div>
    );
  }
}

export default Episodes;