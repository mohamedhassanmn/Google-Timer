import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Verification from "./verification";
import styles from "./common.module.css";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verifySec: 0,
      verifyMin: 0,
      verifyHr: 0,
      min: 5,
      sec: 0,
      hr: 0,
      verify: false
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.interval();
  }

  interval = () => {
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
          if (this.state.hr !== 0 && this.state.min === 0) {
            this.setState({
              sec: 59,
              min: 59,
              hr: this.state.hr - 1
            });
          } else if (this.state.hr !== 0 || this.state.min !== 0) {
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
  };

  handleStart = () => {
    if (
      isNaN(this.state.min) ||
      isNaN(this.state.hr) ||
      isNaN(this.state.sec)
    ) {
      alert("INVALID INPUT");
    } else {
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
    }
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
      check: false
    });
  };

  handleDivClick = () => {
    this.setState({
      check: true,
      verify: false,
      min: "",
      sec: "",
      hr: ""
    });
  };

  handleChangeInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <>
        {this.state.check ? (
          <div>
            <TextField
              id="hr"
              ref={this.hr}
              className={styles.text}
              autoFocus
              value={this.state.hr}
              name="hr"
              align="center"
              label="hrs"
              inputProps={{
                maxLength: 2
              }}
              onKeyPress={this.handleKeypress}
              onChange={this.handleChangeInput}
              style={{
                marginTop: "30px",
                marginBottom: "30px"
              }}
            />
            <TextField
              className={styles.text}
              id="min"
              value={this.state.min}
              autoFocus
              label="min"
              name="min"
              align="center"
              inputProps={{
                maxLength: 2
              }}
              onKeyPress={this.handleKeypress}
              onChange={this.handleChangeInput}
              style={{
                marginTop: "30px",
                marginBottom: "30px"
              }}
            />
            <TextField
              className={styles.text}
              autoFocus
              value={this.state.sec}
              id="sec"
              name="sec"
              label="sec"
              inputProps={{
                maxLength: 2
              }}
              align="center"
              onKeyPress={this.handleKeypress}
              onChange={this.handleChangeInput}
              style={{
                marginTop: "30px",
                marginBottom: "30px"
              }}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              style={{ width: "100px" }}
              onClick={this.handleStart}
            >
              Start
            </Button>
            &nbsp;
            <Button
              variant="contained"
              color="default"
              style={{ width: "100px" }}
              onClick={this.handleReset}
            >
              Reset
            </Button>
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
