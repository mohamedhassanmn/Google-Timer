import React from "react";

import Button from "@material-ui/core/Button";

import PropTypes from "prop-types";

import styles from "./common.module.css";

const Verification = props => (
  <div>
    <div
      onClick={props.click}
      onKeyPress={e => e}
      role="button"
      tabIndex="0"
      className={styles.pointer}
      style={{
        paddingBottom: "5px",
        marginTop: "30px",
        fontSize: "30px",
        marginBottom: "30px",
        width: "180px",
        borderBottom: "1px solid #ccc"
      }}
    >
      {props.hr}
      <span>h</span> {props.min}
      <span>m</span> {props.sec}
      <span>s</span>
    </div>
    {props.data ? (
      <Button
        variant="contained"
        color="primary"
        style={{ width: "100px" }}
        onClick={props.stop}
      >
        Stop
      </Button>
    ) : (
      <Button
        variant="contained"
        color="primary"
        style={{ width: "100px" }}
        onClick={props.start}
      >
        Start
      </Button>
    )}
    &nbsp;
    <Button
      variant="contained"
      color="default"
      style={{ width: "100px" }}
      onClick={props.reset}
    >
      Reset
    </Button>
  </div>
);

Verification.propTypes = {
  data: PropTypes.bool,
  click: PropTypes.func,
  hr: PropTypes.number,
  min: PropTypes.number,
  sec: PropTypes.number,
  stop: PropTypes.func,
  start: PropTypes.func,
  reset: PropTypes.func
};
Verification.defaultProps = {
  data: "",
  click: "",
  hr: PropTypes.number,
  min: PropTypes.string,
  sec: PropTypes.number,
  start: "",
  stop: "",
  reset: ""
};

export default Verification;
