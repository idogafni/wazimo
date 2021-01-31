import React, { Component } from 'react';
import axios from 'axios';
import './app.css';
import ReactImage from '../images/react.png';

import User from "../components/User/User";

export default class App extends Component {
  state = {
    users : [],
    screens: [],
    permissions: [],
  };

  componentDidMount() {
    axios.get(`/api/getData`)
      .then(res => {
        const data = res.data;
        this.setState({ users: data.users });
      });
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