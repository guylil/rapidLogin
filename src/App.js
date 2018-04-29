import React, { Component } from 'react';
import Draggable from 'react-draggable';

import LoginButton from './components/LoginButton';
import LoginFields from './components/LoginFields';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleUserDetails = this.handleUserDetails.bind(this);
        this.state = {
            welcomeMsg: 'RapidApi',
            isLoggedin: false,
            loginStatus: 'Login',
            userName: '',
            password: '',
            logo:logo,
        };
    }

    login() {
        if (this.state.isLoggedin) {
            this.setState({userName: '', password: '', isLoggedin: false, loginStatus: 'Login'});
        } else {
            if(this.state.userName === 'rapid' && this.state.password === 'Api') {
                this.setState({isLoggedin: true, loginStatus: 'Logout'});
            } else { alert('Wrong login details\nPlease try again');}
        }
    }

    handleUserDetails(user) {
        this.setState({userName: user.userName, password: user.password});
    }

    handleStop(ev, ui) {
        localStorage.setItem('picPosition', JSON.stringify({x: ui.x, y: ui.y}));
    }

  render() {
      const isLoggedin = this.state.isLoggedin;
      const defPos = (JSON.parse(localStorage.getItem('picPosition')))? JSON.parse(localStorage.getItem('picPosition')) : {x:0,y:0};

    return (
      <div className="App">
          {isLoggedin ? (
              <div>
                  <h1 className="App-title">Welcome to {this.state.welcomeMsg}</h1>
                  <Draggable
                      axis="both"
                      handle=".handle"
                      defaultPosition={defPos}
                      position={null}
                      grid={[5, 5]}
                      onStop={this.handleStop}>
                      <div className="handle box img"></div>
                  </Draggable>
              </div>
              ) :
              (
              <header className="App-header">
                  <h3>Please login</h3>
                  <LoginFields onAuth={this.handleUserDetails} user={this.state} />
                  <img onMouseEnter={()=>{this.setState({logo:'https://logo.clearbit.com/rapidApi.com'})}}
                       onMouseLeave={()=>this.setState({logo:logo})}
                       src={this.state.logo} style={{padding:'15px'}} className="App-logo" alt="spinnig logo"/>
              </header>
              )}
          <LoginButton msg={this.state.loginStatus} onClick={()=>{this.login()}} />

      </div>
    );
  }

}


export default App;
