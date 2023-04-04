import React from 'react';
import './clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <div className="clock">
        <h1 className="title">Relógio</h1>
        <h2 className="time">Agora são {this.state.time.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;