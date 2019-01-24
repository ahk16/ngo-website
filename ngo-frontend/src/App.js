import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Events from './components/events/create-event-form';
import EventIndex from './components/events/index';
import EventShow from './components/events/show';
import BloodInfoForm from './components/bloodintimation/intimation-form';
import HomePage from './components/home/index';
import ScribeInoForm from './components/scribeIntimation/intimation-form';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={HomePage} exact/>
          <Route path="/event/new" component={Events} />
          <Route path="/events" component={EventIndex} exact/>
          <Route path="/events/:id" component={EventShow} />
          <Route path="/blood/intimationform" component={BloodInfoForm} />
          <Route path="/scribe/intimationform" component={ScribeInoForm} />
        </div>
      
      
      </BrowserRouter>
    )

  }
}

export default App;
