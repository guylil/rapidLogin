import React from 'react';
import './styles/LoginButton.css';

export default (props) => {
    return (
        <button onClick={props.onClick}>{props.msg}</button>
    );
}
