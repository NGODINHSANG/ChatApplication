
import './App.css';
import Header from './Components/Header';
import ChatInput from './Components/ChatInput';
import React, { Component } from "react";
import { sendMsg } from './api';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      chatHistory:[],
    }
  }

  send(event){
    if (event.keyCode === 13){ // check enter press 
      sendMsg(event.target.value) 
      event.target.value = ''
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
