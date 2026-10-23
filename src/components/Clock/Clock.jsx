import { Component } from "react";

export class Clock extends Component {
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
    return this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    const { time } = this.state;

    return (
      <div>
        <h1>{time}</h1>
        <button type="button" onClick={this.stop}>
          Stop time
        </button>
      </div>
    );
  }
}
