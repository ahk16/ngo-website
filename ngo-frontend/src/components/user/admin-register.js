import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import {Container, Row, Col} from 'reactstrap';
import {Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';

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
            redirect: false,
            redirectLogin: false
        }
    }

    handleChange = (event) => {
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
        console.log(formData)
        axios.post('http://localhost:3001/user/register', formData).then( response => {
            console.log(response.data);
        })
        this.setState({
            redirect: true
        })
    }

    handleReset = () => {
        this.setState({
            name: '',
            email: '',
            phone: '',
            password: '',
            bloodGroup: ''
        })
    }

    handleLogin = () => {
        this.setState({
            redirectLogin: true
        })
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/events" />
        }
        if(this.state.redirectLogin) {
            return <Redirect to="/admin/login" />
        }
        return (
            <div>
                <br/><br/>
                <Container>
                    <Form /*action='/user' method='post'*/>

                        <FormGroup row>
                            <h4><u>Registration Form:</u> </h4>
                            <Col sm={8}></Col>
                            <Col><Button onClick={this.handleLogin}>Login</Button></Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={4}>
                                <Input type="name" name="name" id="name" placeholder="full name" value={this.state.name} onChange={this.handleChange} />    
                            </Col>
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

                        <FormGroup row>
                            <Label for="mobile" sm={2}>Mobile Number</Label>
                            <Col sm={4}>
                            <Input type="text" id="mobile" name="phone" value={this.state.phone} placeholder="enter 10 digits mobile number" onChange={this.handleChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="bgSelect">Blood Group</Label>
                            <Input type="select" name="bloodGroup" id="bgSelect" value={this.state.bloodGroup} placeholder="select your blood group" onChange={this.handleChange}>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                            </Input>
                        </FormGroup>

                        <FormGroup row >
                            <Col sm={1}></Col>
                            <Col sm={2}><Button onClick={this.handleSubmit} > Register</Button></Col>
                            <Col > <Button onClick={this.handleReset} >Reset </Button></Col>
                        </FormGroup>

                    </Form>
                </Container>
                
            </div>
        )
    }
}

export default AdminRegister;