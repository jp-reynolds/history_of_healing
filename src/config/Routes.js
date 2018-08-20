import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Episodes from '../components/episodes/Episodes';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';


export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route exact path='/episodes' component={ Episodes }/>
    <Route exact path='/about' component={ About }/>
    <Route exact path='/contact' component={ Contact }/>
  </Switch>
)