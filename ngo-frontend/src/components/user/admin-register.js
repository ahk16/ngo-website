import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

class AdminRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            bloodGroup: '',
            role: 'admin',
            redirect: false
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            bloodGroup: this.state.bloodGroup,
            role: this.state.role
        }
        axios.post('http://localhost:3001/user/register', formData).then( response => {
            console.log(response.data);
        })
        this.setState({
            redirect: true
        })
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/admin/login" />
        }
        return (
            <div>
                <h2> Register </h2>
                <form onSubmit={this.handleSubmit} >
                <label> Name :
                    <input type='text' value={this.state.name} name="name" onChange={this.handleInputChange} />
                </label> <br />

                <label> Email :
                    <input type='text' value={this.state.email} name="email" onChange={this.handleInputChange} />
                </label><br />

                <label> Mobile Number :
                    <input type='text' value={this.state.phone} name="phone" onChange={this.handleInputChange} />
                </label><br />                

                <label> password :
                    <input type='text' value={this.state.password} name="password" onChange={this.handleInputChange} />
                </label><br />

                <label> Blood Group :
                    <select name='bloodGroup' onChange={this.handleInputChange}>
                        <option value =""> Select a Blood Group </option>
                        <option value="A+"> A+ </option>
                        <option value="A-"> A- </option>
                        <option value="B+"> B+ </option>
                        <option value="B-"> B- </option>
                        <option value="O+"> O+ </option>
                        <option value="O-"> O- </option>
                        <option value="AB+"> AB+ </option>
                        <option value="AB-"> AB- </option>
                    </select>
                </label><br />

                <input type="submit" value="register" /> {'OR'}
                <Link to="/admin/login"><button >Login</button></Link>

                </form>
            </div>
        )
    }
}

export default AdminRegister;