import React from "react";

import TextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";

import styles from "./common.module.css";

export default function Inputs(props) {
  return (
    <TextField
      id={props.identification}
      className={styles.text}
      autoFocus
      value={props.val}
      align="center"
      label={props.lab}
      inputProps={{
        maxLength: 2
      }}
      onKeyPress={props.keyFunc}
      onChange={props.change}
      style={{
        marginTop: "30px",
        marginBottom: "30px"
      }}
    />
  );
}
Inputs.propTypes = {
  identification: PropTypes.string,
  val: PropTypes.number,
  lab: PropTypes.string,
  keyFunc: PropTypes.func,
  change: PropTypes.func
};
Inputs.defaultProps = {
  identification: PropTypes.string,
  val: PropTypes.number,
  lab: PropTypes.string,
  keyFunc: PropTypes.func,
  change: PropTypes.func
};
