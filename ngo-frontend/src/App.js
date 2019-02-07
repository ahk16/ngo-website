import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Events from './components/events/create-event-form';
import EventIndex from './components/events/index';
import EventShow from './components/events/show';
import BloodInfoForm from './components/bloodintimation/intimation-form';
import HomePage from './components/home/index';
import ScribeInoForm from './components/scribeIntimation/intimation-form';
import EditForm from './components/events/form-edit';
import AdminRegister from './components/user/admin-register';
import AdminLogin from './components/user/admin-login';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={HomePage} exact/>
          <Route path="/event/new" component={Events} />
          <Route path="/events" component={EventIndex} exact/>
          <Route path="/events/:id" component={EventShow} />
          <Route path="/event/edit/:id" component={EditForm} />
          <Route path="/blood/intimationform" component={BloodInfoForm} />
          <Route path="/scribe/intimationform" component={ScribeInoForm} />
          <Route path="/admin/register" component={AdminRegister} />
          <Route path="/admin/login" component={AdminLogin} />
        </div>
      
      
      </BrowserRouter>
    )

  }
}

export default App;
