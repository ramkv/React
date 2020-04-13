import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username : ['Ramkumar','Karthi']
  }

  changeUserNameHandler = (event) => {
    this.setState(
      {
        username : [event.target.value,'Karthi']
      }
    );
  }

   

  render() {
    return (
      <div className="App">
        <UserInput changeusername={this.changeUserNameHandler} username={this.state.username[0]}/>
        <UserOutput username={this.state.username[0]}/>
        <UserOutput username={this.state.username[1]}/>
      </div>
    );
  }
}

export default App;
