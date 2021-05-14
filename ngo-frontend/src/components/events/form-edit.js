import React, {Component} from 'react'
import axios from 'axios'
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import {Redirect} from 'react-router';

import EventShow from './show';

class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.state._id,
            eventName: this.props.location.state.eventName,
            location: this.props.location.state.location,
            date: this.props.location.state.date,
            organizerName: this.props.location.state.organizerName,
            mobile: this.props.location.state.mobile,
            startTime: this.props.location.state.startTime,
            endTime: this.props.location.state.endTime,
            description: this.props.location.state.description,
            redirect: false
        }

    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(event.target.value)
    }

    handleDateChange = (date) => {
        this.setState( {
            date: date
        }, () => console.log(this.state.date));
    }

    handleStartTime = (time) => {
        this.setState({
            startTime: time
        }, () => console.log(this.state.startTime));
    }

    handleEndTime = (time) => {
        this.setState({
            endTime: time
        }, () => console.log(this.state.endTime));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let id = this.props.match.params.id
        console.log(id);
        const editedData = {
            eventName: this.state.eventName,
            location: this.state.location,
            date: this.state.date,
            organizerName: this.state.organizerName,
            mobile: this.state.mobile,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            description: this.state.description
        }

        axios.put( `http://localhost:3001/event/${id}`, editedData).then( response => {
            this.setState({
                redirect: true
            })
           console.log(response.data);
        })
    }

    render() {
        const eventID = this.props.match.params.id
        if(this.state.redirect){
            return <Redirect to={`/events/${eventID}`} />
        }
         return(
             <div>
             <h2>Edit the information </h2>
            <form onSubmit={this.handleSubmit}>
                <label>Event Title :
                    <input type='text' name='eventName' value={this.state.eventName} onChange={this.handleInputChange} />
                </label> <br /> <br />

                <label> Location :
                    <input type='text' name='location' value={this.state.location} onChange={this.handleInputChange} />
                </label> <br /> <br />

                <label> Date :
                    <DatePicker onChange={this.handleDateChange} selected={this.state.date} value={this.state.date}/>
                </label> <br /> <br />

                <label> Organizer Name :
                    <input type='text' name='organizerName' value={this.state.organizerName} onChange={this.handleInputChange} />
                </label> <br />

                <label> Organizer Phone Number :
                    <input type='text' name='mobile' value={this.state.mobile} onChange={this.handleInputChange} />
                </label> <br />

                <label> Start Time :
                    <TimePicker onChange={this.handleStartTime} selected={this.state.startTime} value={this.state.startTime} />
                </label> <br />

                <label> End Time :
                    <TimePicker onChange={this.handleEndTime} selected={this.state.endTime} value={this.state.endTime} />
                </label> <br />

                <label> Description :
                    <textarea rows='10' cols='35' value={this.state.description} onChange={this.handleInputChange} name='description' placeholder='type here'></textarea>
                </label> <br />

                <input type='submit' value='update'/>

            </form>
        </div>
        )
    }
}

export default EditForm