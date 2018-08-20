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
        		<img alt="Doctor" className="imageEpisode" src="https://blog.wellcomelibrary.org/wp-content/uploads/2013/09/1d4fcd7968c4df503994dd8b8af.jpg"/>
        		<p className="descriptionEpisode">One two three four five six seven eigth nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty</p>
        		<div className="controlsEpisode"></div>
            </div>
        	<div className="episode">
        		<img alt="Doctor" className="imageEpisode" src="https://blog.wellcomelibrary.org/wp-content/uploads/2013/09/1d4fcd7968c4df503994dd8b8af.jpg"/>
        		<p className="descriptionEpisode">One two three four five six seven eigth nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty</p>
        		<div className="controlsEpisode"></div>
            </div>
        	<div className="episode">
        		<img alt="Doctor" className="imageEpisode" src="https://blog.wellcomelibrary.org/wp-content/uploads/2013/09/1d4fcd7968c4df503994dd8b8af.jpg"/>
        		<p className="descriptionEpisode">One two three four five six seven eigth nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty</p>
        		<div className="controlsEpisode"></div>
            </div>
        	<div className="episode">
        		<img alt="Doctor" className="imageEpisode" src="https://blog.wellcomelibrary.org/wp-content/uploads/2013/09/1d4fcd7968c4df503994dd8b8af.jpg"/>
        		<p className="descriptionEpisode">One two three four five six seven eigth nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty</p>
        		<div className="controlsEpisode"></div>
            </div>
        </section>
    	</div>
    );
  }
}

export default Episodes;