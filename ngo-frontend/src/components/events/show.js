import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EventShow extends Component{
    constructor(props) {
        super(props) 
        this.state = {
            event: {}
        } 
    }

    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`http://localhost:3001/createEvent/${id}`).then( response => this.setState({ event: response.data}))
    }

    render() {
        return(
            <div>
                <p> <b>Event Name:</b> {this.state.event.eventName} <br /> <b>Location:</b> {this.state.event.location} <br /> <b>Date: </b> {this.state.event.date} <br/> <b>Organizer: </b> {this.state.event.organizerName} <br /> <b> Organizer Phone Number: </b> {this.state.event.mobile} <br />  <b>Start Time:</b> {this.state.event.startTime} <br />
                <b>End Time:</b> {this.state.event.endTime} <br /> <b>Description:</b> {this.state.event.description} </p>
                <Link to="/events">Back</Link>
                <button onClick={this.handleDelete} />
            </div>
        )
    }
}

export default EventShow;