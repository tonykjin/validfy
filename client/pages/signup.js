import React from 'react';
import { FormControl, Form, Button } from 'react-bootstrap';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      password2: '',
    };
  }

  validateForm = () => {
    return (
      this.state.password === this.state.password2
      && this.state.password.length > 0
      && this.state.password2.length > 0
      && this.state.email.length > 0
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      method: 'POST',
      body: this.state,
    };
    fetch('http://localhost:8008/user/new', data)
      .then((response) => console.log(response))
      .then((err) => console.error(err));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
            type="email"
          />
          <Form.Label>Email Address</Form.Label>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Control
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
            type="text"
          />
          <Form.Label>Legal First Name</Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Control
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
            type="text"
          />
          <Form.Label>Legal Last Name</Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
            type="password"
          />
          <Form.Label>Please set your password</Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
            placeholder="re-type password"
            type="password"
          />
        </Form.Group>
      </Form>
    );
  }
}
