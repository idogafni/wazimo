import React, { Component } from 'react';
import './app.css';
import ReactImage from '../images/react.png';

import User from "../Components/User/User";

export default class App extends Component {
  state = {
    users : [],
    screens: [],
    permissions: [],
  };

  componentDidMount() {
    fetch('/api/getData')
      .then(res => res.json())
      .then(data => this.setState({ 
        users: data.users,
        screens : data.screens,
        permissions : data.permissions
      }));
  }

  render() {
    return (
      <div>
        <User 
          users={this.state.users}
          permissions={this.state.permissions} 
          screens={this.state.screens} />
      </div>
    );
  }
}
