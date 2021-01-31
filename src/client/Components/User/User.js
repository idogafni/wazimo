import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Screen from "../Screen/Screen";
import withClass from "../../hoc/withClass";

import classes from "./User.css";

class User extends Component {

    state = {
        screens: null,
        showScreens: false
    };

    toggleScreensHandler = () => {
        const doesShow = this.state.showScreens;
        this.setState({
            showScreens: !doesShow
        });
    };

    deleteScreenHandler = (screenIndex, userId) => {
        const user = this.props.users.filter(
            (user) => user.id == userId
        );
        const screens = user[0].screens;
        screens.splice(screenIndex, 1);
        this.setState({ screens: screens });
    };

    render() {
        const style = {
            listStyleType: 'none',
            border: '1px solid black',
            margin: '10px',
            padding: '10px'
        }
        let screens = null;
        if (this.state.showScreens) {
            screens = <Screen 
                screens={this.props.screens}
            />
        }
        return this.props.users.map((user, index) => {
            return [
                <ul key="i1" className={classes.User}>
                    <li style={style}>{user.email}</li>
                    <Screen screens={user.screens} clicked={this.deleteScreenHandler} userId={user.id} />
                </ul>,
                <button key="i2" onClick={this.toggleScreensHandler}>Add Screen</button>,
            ];
        });
    }
}

User.propTypes = {
    click: PropTypes.func,
    email: PropTypes.string,
    id: PropTypes.string
};

export default User;
//using HOC
//export default withClass(User, classes.User);