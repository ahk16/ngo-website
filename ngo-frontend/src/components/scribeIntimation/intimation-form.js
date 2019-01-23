import React from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'

class ScribeInfoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            phone: '',
            location: '',
            language: '',
            date: '',
            time: ''

        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(event.target.value)
    }
    handleDateChange(date){
        this.setState({date},()=>{
            console.log(this.state.date)
        })
     }
     handleTimeChange(time){
         this.setState({time },() => console.log(this.state.time))       
     }

     handleSubmit(e){
         e.preventDefault()
            const formData = {
                name: this.state.name,
                phone: this.state.phone,
                location: this.state.location,
                language: this.state.language,
                date: this.state.date,
                time: this.state.time           
            }
            axios.post('http://localhost:3001/scribeIntimation',formData).then(response=>{
                console.log(response.data)
            })
            this.setState({
                name: '',
                phone: '',
                location: '',
                language: '',
                date: '',
                time: ''
               
            })
     }
    render(){
        return(
            
            <div>
                <h2> Send Message for Scribe Requirement </h2>
                <form onSubmit = {this.handleSubmit} ref = 'form'>
                    <label>Contact name :
                        <input type = 'text' name= 'name' value ={this.state.name} onChange= {this.handleInputChange}/>
                    </label><br/>
                    <label>Contact number :
                        <input type = 'text' name ='phone' value = {this.state.phone} onChange = {this.handleInputChange}/>
                    </label><br/>
                    <label>Language :
                        <input type = 'text' name = 'language' value = {this.state.language} onChange = {this.handleInputChange}/>
                    </label><br/>
                    <label>Location :
                        <input type = 'text' name = 'location' value = {this.state.location} onChange = {this.handleInputChange}/>
                    </label><br/>
                    <label>Date:
                        <DatePicker
                        selected = {this.state.date} value = {this.state.date} onChange = {this.handleDateChange} name = 'date' />                    
                    </label><br/>
                    <label>Time :
                    <TimePicker
                         onChange={this.handleTimeChange} selected={this.state.time} value = {this.state.time} name = 'time'   />
                    </label><br/>
                    <label>Submit :
                        <input type = 'submit' value = 'submit'/>
                    </label>
                    <label>Reset :
                        <input type = 'reset' value = 'reset'/>
                    </label>
                </form>
            </div>
        )
    }
}
export default ScribeInfoForm