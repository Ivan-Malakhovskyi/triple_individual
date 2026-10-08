import { Component } from "react";

export class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );

    console.log(this.intervalId);
  }

  componentWillUnmount() {
    return this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
        <button type="button" onClick={this.stop}>
          Stop time
        </button>
      </div>
    );
  }
}
