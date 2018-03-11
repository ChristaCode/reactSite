import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: ''};
        this.state = {password: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      state = {
        username: '',
        password: ''
      };

      handleChange(event) {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
          });
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username + " " + this.state.password);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
            </label>
            <label>
              Password:
              <input name="password" type="text" value={this.state.password} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    export default Login;