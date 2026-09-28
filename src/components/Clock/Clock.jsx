import React, { Component } from "react";

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log("Interval");
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );

    console.log(this.intervalId);
  }

  componentWillUnmount() {
    return clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}
