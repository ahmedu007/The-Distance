import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pagination: {}
    };
  }

  getEvents() {
    fetch(
      "https://www.eventbriteapi.com/v3/events/search/?token=VBUSKKCQ2VTXKPOP34PX&page=1"
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          events: res.events,
          pagination: res.pagination
        })
      )
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getEvents.bind(this)}>Get events</button>
        <ul>{this.state.events.map(event => <li>{event.name.text}</li>)}</ul>
      </div>
    );
  }
}

export default App;
