import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

class AdminLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:3001/user/login', formData).then(response => {
            console.log(response.data);
        })
        this.setState( {
            redirect: true
        })
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        }
        return(
            <div>
                <h2>LOGIN</h2>
                <form onSubmit={this.handleSubmit} >
                    <label> Email: 
                        <input type='text' value={this.state.email} name='email' onChange={this.handleInputChange} />
                    </label><br />

                    <label> Password:   
                        <input type='text' value={this.state.password} name='password' onChange={this.handleInputChange} />
                    </label><br />

                    <input type='submit' value='login' />
                </form>
                

            </div>
        )
    }
}
export default AdminLogin;