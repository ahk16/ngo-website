import React, {Component} from 'react'

import axios from 'axios';

class BloodInfoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bloodGroup: '',
            location: '',
            contactName:'',
            phone:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            bloodGroup: this.state.bloodGroup,
            location: this.state.location,
            contactName: this.state.contactName,
            phone: this.state.phone
        }

        axios.post('http://localhost:3001/bloodIntimation', formData).then( response => {
            console.log(response.data);
        })
    }
        
    handleReset(event) {
        event.preventDefault();

        this.setState( {
            bloodGroup: '',
            location: '',
            contactName: '',
            phone: ''
        })
        this.refs.form.reset();
    }

    render() {
        return(
            <div> 
                <h2> Send Message for Blood Requirement </h2>
                <form onSubmit={this.handleSubmit} ref='form'> 
                
                <label> Blood Group:
                    <select name='bloodGroup' onChange={this.handleInputChange} >
                        <option value="" > Select a Blood Group </option>
                        <option value="A+"> A+ </option>
                        <option value="A-"> A- </option>
                        <option value="B+"> B+ </option>
                        <option value="B-"> B- </option>
                        <option value="O+"> O+ </option>
                        <option value="O-"> O- </option>
                        <option value="AB+"> AB+ </option>
                        <option value="AB-"> AB- </option>
                    </select>
                </label> <br />

                <label> Location :
                    <input type='text' value={this.state.location} name='location' onChange={this.handleInputChange} />
                </label> <br />

                <label> Patient Name:
                    <input type='text' value={this.state.contactName} name='contactName' onChange={this.handleInputChange} />
                </label> <br />


                <label> Contact Number :
                    <input type='text' value={this.state.phone} name='phone' onChange={this.handleInputChange} />
                </label><br />

                <input type="submit" value="submit" />
                <input type="reset" value="reset" onClick={this.handleReset} onChange={this.handleInputChange} />
                </form>
            </div>
        )
    }
}

export default BloodInfoForm