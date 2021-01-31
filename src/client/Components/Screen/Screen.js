import React from 'react';

const screen = (props) => {
    const style = {
        listStyleType: 'none',
        margin: '10px',
        padding: '10px',
        border: '1px solid lightblue',
        cursor: 'pointer'
    }

    return props.screens.map((screen, index) => {
        return (
        <ul>
            <li onClick={() => props.clicked(index, props.userId)} key={screen.id} style={style}>{screen.name}</li>
        </ul>
        );
    });
}

export default screen;