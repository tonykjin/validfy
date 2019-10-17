import React from 'react';
import {
  FormControl, Form, Button,
} from 'react-bootstrap';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      method: 'GET',
      body: this.state,
    };
    fetch('http://localhost:8080/auth/login', data)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Label>Email Address</Form.Label>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={this.handleSubmit}
        >
          Login
        </Button>
      </Form>
    );
  }
}
