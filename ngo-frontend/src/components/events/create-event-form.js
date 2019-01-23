import React, { Component } from 'react';

import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import axios from 'axios';


class Events extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            eventName: '',
            location: '',
            date: new Date(),
            organizerName: '',
            mobile: '',
            startTime: '',
            endTime: '',
            description: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleStartTime = this.handleStartTime.bind(this);
        this.handleEndTime = this.handleEndTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange = (event)=> {
        this.setState( {
            [event.target.name] : event.target.value
        })
        console.log(event.target.value)
    }

    handleDateChange(date) {
        this.setState( {
            date: date
        }, () => console.log(this.state.date));

        
    }   

    handleStartTime(time) {
        this.setState({
            startTime: time
        }, () => console.log(this.state.startTime)); 
    }

    handleEndTime(time) {
        this.setState({
            endTime: time
        }, () => console.log(this.state.endTime));
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = {
            eventName: this.state.eventName,
            location: this.state.location,
            date: this.state.date,
            organizerName: this.state.organizerName,
            mobile: this.state.mobile,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            description: this.state.description
        }
        

        axios.post('http://localhost:3001/createEvent', formData).then(response => {
            console.log(response.data);
        })

        this.setState({
            eventName: '',
            location: '',
            date: '',
            organizerName: '',
            mobile: '',
            startTime: '',
            endTime: '',
            description: ''
        })
    }

    render() {
        return(
            <div>
                <h2> Register for the event </h2>
                <form onSubmit={this.handleSubmit} ref='form'>
                <br/>
                <br/>
                
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

                <input type='submit' value='submit'/>
                <input type='reset' value='reset' onClick={this.handleReset} />

                </form>
            </div>
        )
    }
}

export default Events;