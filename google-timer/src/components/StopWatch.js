import React from 'react'
import styles from './common.module.css'
class StopWatch extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        counter: 0,
        sec: 0,
        min: 0,
        hr: 0,
        timerSwitch: false,
        incream: 1
      }
    }
    componentDidMount() {
      setInterval(() => {
        if (this.state.counter < 99 && this.state.timerSwitch) {
          this.setState({
            counter: this.state.counter + this.state.incream
          });
        } else if (this.state.counter == 99) {
          this.setState({
            counter: 0,
            sec: this.state.sec + 1
          });
        }
        if (this.state.sec == 60) {
          this.setState({
            sec: 0,
            min: this.state.min + 1
          });
        }
        if (this.state.min == 60) {
          this.setState({
            min: 0,
            hr: this.state.hr + 1
          });
        }
      }, 10);
    }
    handleClick = () => {
      this.setState({
        timerSwitch: true
      })
    }
    handleResetClick = () => {
      this.setState({
        counter: 0,
        sec: 0,
        min: 0,
        timerSwitch: false
      })
    }
    handleStopClick = () => {
      this.setState({
        counter: this.state.counter,
        sec: this.state.sec,
        min: this.state.min,
        timerSwitch: false
      })
    }
  render(){
    if(this.state.timerSwitch){
      return(
        <div>
          <h2>{this.state.hr}<span>h</span>  {this.state.min}<span>m</span>  {this.state.sec}<span>s</span></h2>
          <div className={styles.toMakeinline}>{this.state.counter}</div>
          <div>
            <button style={{backgroundColor:'#4885ed',height:'30px',width:'60px',color:'white'}}
               onClick={this.handleStopClick}>Stop</button>
            <button onClick={this.handleResetClick}>Reset</button>
          </div>
        </div>
      )
    }else{
    return(
      <div>
      <h2>{this.state.hr}<span>h</span>  {this.state.min}<span>m</span>  {this.state.sec}<span>s</span></h2>
        <div className={styles.toMakeinline}>{this.state.counter}</div>
        <div>
          <button style={{backgroundColor:'#4885ed',height:'30px',width:'60px',color:'white'}}
             onClick={this.handleClick}>Start</button>
          <button onClick={this.handleResetClick}>Reset</button>
        </div>
      </div>
    )
      }
    }
  }
export default StopWatch