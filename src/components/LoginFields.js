import React from 'react';
import './styles/LoginFields.css';

class LoginFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.user.userName,
            password: this.props.user.password,
        };
        this.handleInput = this.handleInput.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    handleInput(el) {
        this.setState({userName: el.target.value});
        this.props.onAuth(
            {userName:this.state.userName, password:this.state.password});
    }
    handlePassword(el) {
        this.setState({password:el.target.value});
        this.props.onAuth(
            {userName:this.state.userName, password:this.state.password});
    }

    render() {

        return (
            <div>
                <input placeholder="User Name" defaultValue={this.state.userName} onKeyUp={this.handleInput} />
                <input placeholder="Password" type="password" defaultValue={this.state.password}  onKeyUp={this.handlePassword} />
            </div>
        )
    }
}

export default LoginFields;
