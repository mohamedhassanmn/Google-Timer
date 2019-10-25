import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";

import styles from "./components/common.module.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchClass: styles.hide,
      timerClass: styles.show,
      timerColor: "#4885ed",
      stopwatchColor: "black"
    };
  }

  handleTimerClick = () => {
    this.setState({
      stopwatchClass: styles.hide,
      timerClass: styles.show,
      timerColor: "#4885ed",
      stopwatchColor: "black"
    });
  };

  handleStopWatchClick = () => {
    this.setState({
      stopwatchClass: styles.show,
      timerClass: styles.hide,
      timerColor: "black",
      stopwatchColor: "#4885ed"
    });
  };

  render() {
    const {
      stopwatchColor,
      stopwatchClass,
      timerColor,
      timerClass
    } = this.state;

    return (
      <Grid container alignItems="center" style={{ height: "100vh" }}>
        <div
          className={stopwatchClass}
          style={{ border: "1px solid #ccc", margin: "0 450px" }}
        >
          <Paper>
            <Tabs value={false} style={{ marginLeft: "20px" }}>
              <Tab
                label="Timer"
                style={{ color: timerColor }}
                onClick={this.handleTimerClick}
              />
              <Tab
                label="Stopwatch"
                style={{ color: stopwatchColor }}
                onClick={this.handleStopWatchClick}
              />
            </Tabs>
          </Paper>
          <div align="center" style={{ padding: "20px" }}>
            <StopWatch />
          </div>
        </div>

        <div
          className={timerClass}
          style={{ border: "1px solid #ccc", margin: "0 450px" }}
        >
          <Paper>
            <Tabs value={false} style={{ marginLeft: "20px" }}>
              <Tab
                label="Timer"
                style={{ color: timerColor }}
                onClick={this.handleTimerClick}
              />
              <Tab
                label="Stopwatch"
                style={{ color: stopwatchColor }}
                onClick={this.handleStopWatchClick}
              />
            </Tabs>
          </Paper>
          <div align="center" style={{ padding: "20px" }}>
            <Timer />
          </div>
        </div>
      </Grid>
    );
  }
}
