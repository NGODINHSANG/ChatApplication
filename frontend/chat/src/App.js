
import './App.css';
import Header from './Components/Header';
import ChatInput from './Components/ChatInput';
import React, { Component } from "react";
import { connect, sendMsg } from './api';
import ChatHistory from './Components/ChatHistory';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      chatHistory:[],
    }
  }

  componentDidMount(){
    connect((msg)=>{
      console.log("New Message from user");
      this.setState(prevState => ({
        chatHistory:[...prevState.chatHistory, msg]
      }))
      console.log(this.state);
    });
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
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
