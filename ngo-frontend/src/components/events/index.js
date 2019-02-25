import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import AdminLogin from './../user/admin-login';

class EventIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            events: [],
            user:''
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:3001/event').then( response => this.setState( {events: response.data}))
    }

    render() {
        return (
            <div>
                <h2> Listing all the Events </h2>
                    <ul>
                        {this.state.events.map( event => <li key={event._id}> 
                            <Link to={ {
                                pathname: `/events/${event._id}`,
                                state: {
                                    event
                                }
                            }} >{event.eventName} </Link> </li>)}
                    </ul>
            </div>
        )
    }
}

export default EventIndex;
