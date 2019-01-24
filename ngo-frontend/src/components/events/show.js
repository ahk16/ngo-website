import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router'

class EventShow extends Component{
    constructor(props) {
        super(props) 
        this.state = {
            event: [],
            redirect: false
        } 
        
    }

    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`http://localhost:3001/event/${id}`).then( response => this.setState({ event: response.data}))
    }

    handleDelete = (id) => {
        console.log(this.state.event)
        let eventId = this.props.match.params.id
        if(window.confirm('Are you sure ?')) 
            axios.delete(`http://localhost:3001/event/${eventId}`).then(response => {
                this.setState({ event: response.data, redirect: true})
                console.log('Deleted the Event Successfully');
         })
    } 

    // handleEdit = (event) => {
    //     <Redirect to="/eventsform" />
    // }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/events" />
        }
        return(
            <div>
                <p> <b>Event Name:</b> {this.state.event.eventName} <br /> <b>Location:</b> {this.state.event.location} <br /> <b>Date: </b> {this.state.event.date} <br/> <b>Organizer: </b> {this.state.event.organizerName} <br /> <b> Organizer Phone Number: </b> {this.state.event.mobile} <br />  <b>Start Time:</b> {this.state.event.startTime} <br />
                <b>End Time:</b> {this.state.event.endTime} <br /> <b>Description:</b> {this.state.event.description} </p>
                <Link to="/events">Back</Link> <br />
                <button onClick={this.handleDelete} > DELETE </button>
                <button onClick={this.handleEdit} > EDIT </button>
            </div>
        )
    }
}


export default EventShow;