import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import jwt_decode from 'jwt-decode';
import {Container, Row, Col} from 'reactstrap';
import {Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';

class AdminLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            role: '',
            isLoggedin: false,
            redirect: false,
            user: ''
        }
    }

    handleChange = (event) => {
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
            let token =  response.data;
            console.log(token)
            let decoded = jwt_decode(token);
            console.log(decoded);
            this.setState({
                isLoggedin: true,
                redirect: true,
                user: decoded
            })
        })
    }

    render() {
        if(this.state.redirect && this.state.user.role == "admin" ) {
            return <Redirect to="/" />
        }

        return(
            <div>
                <br/><br/>
                <Container>
                    <Form /*action='/user' method='post'*/>

                        <FormGroup row>
                            <h4><u>Login Form:</u> </h4>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={4}>
                            <Input type="text" id="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                            <Col sm={4}>
                            <Input type="password" id="password" name="password" value={this.state.password} placeholder="min 6 characters" onChange={this.handleChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row >
                            <Col sm={1}></Col>
                            <Col sm={2}><Button onClick={this.handleSubmit} > LOGIN</Button></Col>
                        </FormGroup>

                    </Form>
                </Container>
                
            </div>    
        )
    }
}
export default AdminLogin;