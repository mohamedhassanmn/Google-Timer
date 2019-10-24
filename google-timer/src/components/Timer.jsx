import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import PropTypes from "prop-types";

import styles from "./common.module.css";

const Verification = props =>
  props.data ? (
    <div>
      <div
        onClick={props.click}
        onKeyPress="onKeyPressHandler"
        role="button"
        tabIndex="0"
        className={styles.pointer}
        style={{
          paddingBottom: "5px",
          textAlign: "right",
          marginTop: "30px",
          fontSize: "30px",
          marginBottom: "30px",
          width: "180px"
        }}
      >
        {props.hr}
        <span>h</span> {props.min}
        <span>m</span> {props.sec}
        <span>s</span>
      </div>
      <Button
        style={{
          backgroundColor: "#4885ed",
          height: "30px",
          width: "60px",
          color: "white"
        }}
        onClick={props.stop}
      >
        Stop
      </Button>
      <Button onClick={props.reset}>Reset</Button>
    </div>
  ) : (
    <div>
      <div
        onClick={props.click}
        onKeyPress="onKeyPressHandler"
        role="button"
        tabIndex="0"
        className={styles.pointer}
        style={{
          paddingBottom: "5px",
          textAlign: "right",
          marginTop: "30px",
          fontSize: "30px",
          marginBottom: "30px",
          width: "180px"
        }}
      >
        {props.hr}
        <span>h</span> {props.min}
        <span>m</span> {props.sec}
        <span>s</span>
      </div>
      <Button
        style={{
          backgroundColor: "#4885ed",
          height: "30px",
          width: "60px",
          color: "white"
        }}
        onClick={props.start}
      >
        Start
      </Button>
      <Button onClick={props.reset}>Reset</Button>
    </div>
  );

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verifySec: "00",
      verifyMin: "00",
      verifyHr: "00",
      min: "05",
      sec: "00",
      hr: "00",
      valueControl: "",
      keyValue: "",
      verify: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.verify) {
        if (
          Number(this.state.sec) > 0 &&
          Number(this.state.sec) <= 60 &&
          Number(this.state.sec) !== 0
        ) {
          this.setState({
            sec: this.state.sec - 1
          });
        }
        if (Number(this.state.sec) > 60 && Number(this.state.min <= 60)) {
          this.setState({
            sec: this.state.sec - 60,
            min: this.state.min + 1
          });
        }
        if (Number(this.state.sec) > 60 && Number(this.state.min > 60)) {
          this.setState({
            sec: this.state.sec - 60,
            min: this.state.min - 60 + 1,
            hr: this.state.hr + 1
          });
        }
        if (Number(this.state.sec) === 0) {
          if (this.state.hr !== 0 || this.state.min !== 0) {
            this.setState({
              sec: 59,
              min: this.state.min - 1
            });
          } else {
            this.setState({
              sec: 0,
              verify: false
            });
          }
        }
        if (Number(this.state.min) > 60) {
          this.setState({
            min: this.state.min - 60,
            hr: this.state.hr + 1
          });
        }
        if (Number(this.state.min) === 0) {
          if (this.state.hr !== 0) {
            this.setState({
              min: 59,
              hr: this.state.hr - 1
            });
          } else {
            this.setState({ min: 0 });
          }
        }
        if (Number(this.state.hr) === 0) {
          this.setState({ hr: 0 });
        }
      }
    }, 1000);
  }

  handleStart = () => {
    this.setState({
      check: false,
      verify: true,
      min: Number(this.state.min),
      sec: Number(this.state.sec),
      hr: Number(this.state.hr),
      verifySec: this.state.sec,
      verifyMin: this.state.min,
      verifyHr: this.state.hr
    });
  };

  handleStop = () => {
    this.setState({
      min: this.state.min,
      sec: this.state.sec,
      hr: this.state.hr,
      verify: false
    });
  };

  handleReset = () => {
    this.setState({
      min: this.state.verifyMin,
      sec: this.state.verifySec,
      hr: this.state.verifyHr,
      verify: false,
      valueControl: "",
      keyValue: "",
      check: false
    });
  };

  handleKeypress = e => {
    const k = e.which;
    this.setState({ keyValue: k });
  };

  handleDivClick = () => {
    this.setState({
      check: true,
      hr: this.state.hr,
      min: this.state.min,
      sec: this.state.sec
    });
  };

  handleChangeInput = e => {
    if (
      (this.state.keyValue >= 48 && this.state.keyValue <= 57) ||
      this.state.keyValue === 8
    ) {
      const input = e.target.value.slice(0, 6);
      this.setState({ valueControl: input });
      if (input.length === 1 || input.length === 2) {
        this.setState({ sec: input, min: 0, hr: 0 });
      } else if (input.length === 3) {
        this.setState({
          sec: input.slice(1, input.length),
          min: input.slice(0, 1),
          hr: 0
        });
      } else if (input.length === 4) {
        this.setState({
          sec: input.slice(2, input.length),
          min: input.slice(0, 2),
          hr: 0
        });
      } else if (input.length === 5) {
        this.setState({
          sec: input.slice(3, input.length),
          min: input.slice(1, 3),
          hr: input.slice(0, 1)
        });
      } else if (input.length === 6) {
        this.setState({
          sec: input.slice(4, input.length),
          min: input.slice(2, 4),
          hr: input.slice(0, 2)
        });
      } else if (input.length === 0) {
        this.setState({ sec: 0 });
      }
    }
  };

  render() {
    return (
      <>
        {this.state.check ? (
          <div>
            <TextField
              autoFocus
              value={this.state.valueControl}
              placeholder="00h 00m 00s"
              align="center"
              onKeyPress={this.handleKeypress}
              onChange={this.handleChangeInput}
              style={{
                direction: "rtl",
                marginTop: "30px",
                marginBottom: "30px"
              }}
            />
            <br />
            <Button
              style={{
                backgroundColor: "#4885ed",
                height: "30px",
                width: "60px",
                color: "white"
              }}
              onClick={this.handleStart}
            >
              Start
            </Button>
            <Button onClick={this.handleReset}>Reset</Button>
          </div>
        ) : (
          <Verification
            data={this.state.verify}
            click={this.handleDivClick}
            hr={this.state.hr}
            min={this.state.min}
            sec={this.state.sec}
            stop={this.handleStop}
            reset={this.handleReset}
            start={this.handleStart}
          />
        )}
      </>
    );
  }
}

Verification.propTypes = {
  data: PropTypes.string,
  click: PropTypes.func,
  hr: PropTypes.string,
  min: PropTypes.string,
  sec: PropTypes.string,
  stop: PropTypes.func,
  start: PropTypes.func,
  reset: PropTypes.func
};
Verification.defaultProps = {
  data: "",
  click: "",
  hr: "",
  min: "",
  sec: "",
  start: "",
  stop: "",
  reset: ""
};
