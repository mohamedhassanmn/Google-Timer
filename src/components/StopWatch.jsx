import React from "react";

import Button from "@material-ui/core/Button";

import styles from "./common.module.css";

class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      sec: 0,
      min: 0,
      hr: 0,
      timerSwitch: false,
      incream: 1
    };
  }

  componentDidMount() {
    this.internal();
  }

  internal = () => {
    setInterval(() => {
      if (this.state.counter < 99 && this.state.timerSwitch) {
        this.setState({
          counter: this.state.counter + this.state.incream
        });
      } else if (this.state.counter === 99) {
        this.setState({
          counter: 0,
          sec: this.state.sec + 1
        });
      }
      if (this.state.sec === 60) {
        this.setState({
          sec: 0,
          min: this.state.min + 1
        });
      }
      if (this.state.min === 60) {
        this.setState({
          min: 0,
          hr: this.state.hr + 1
        });
      }
    }, 10);
  };

  handleClick = () => {
    this.setState({
      timerSwitch: !this.state.timerSwitch
    });
  };

  handleResetClick = () => {
    this.setState({
      counter: 0,
      sec: 0,
      min: 0,
      timerSwitch: false
    });
  };

  handleStopClick = () => {
    this.setState({
      counter: this.state.counter,
      sec: this.state.sec,
      min: this.state.min,
      timerSwitch: false
    });
  };

  render() {
    return (
      <>
        <div
          style={{
            paddingBottom: "5px",
            marginTop: "30px",
            fontSize: "30px",
            marginBottom: "30px",
            width: "180px"
          }}
        >
          {this.state.hr}
          <span>h</span> {this.state.min}
          <span>m</span> {this.state.sec}
          <span>s</span>
        </div>
        <div className={styles.toMakeinline}>{this.state.counter}</div>
        <div>
          {this.state.timerSwitch ? (
            <Button
              variant="contained"
              color="primary"
              style={{
                width: "100px"
              }}
              onClick={this.handleStopClick}
            >
              Stop
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              style={{
                width: "100px"
              }}
              onClick={this.handleClick}
            >
              Start
            </Button>
          )}
          &nbsp;
          <Button
            onClick={this.handleResetClick}
            variant="contained"
            color="default"
            style={{
              width: "100px"
            }}
          >
            Reset
          </Button>
        </div>
      </>
    );
  }
}

export default StopWatch;
