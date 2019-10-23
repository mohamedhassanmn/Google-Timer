import React from 'react'
import StopWatch from './StopWatch.js'
import Timer from './Timer.js'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import styles from './common.module.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stopwatchClass: styles.hide,
      timerClass: styles.show,
      border: styles.borderBottom,
      noBorder: styles.borderNone,
      timerColor: '#4885ed',
      stopwatchColor: 'black'
    }
  }
  handleTimerClick = () => {
    this.setState({
      stopwatchClass: styles.hide,
      timerClass: styles.show,
      timerColor: '#4885ed',
      stopwatchColor: 'black'
    })
  }
  handleStopWatchClick = () => {
    this.setState({
      stopwatchClass: styles.show,
      timerClass: styles.hide,
      timerColor: 'black',
      stopwatchColor: '#4885ed'
    })
  }
  render(){
      return(
//Stopwatch
      <React.Fragment>
        <div className={this.state.stopwatchClass} style={{border:'1px solid #ccc',margin:'0 450px'}}>
          <Paper>
              <Tabs value={this.value} style={{marginLeft:'20px'}}>
                <Tab label='Timer' style={{color:this.state.timerColor}}
                  onClick={this.handleTimerClick}/>
                <Tab label='Stopwatch' style={{color:this.state.stopwatchColor}}
                  onClick={this.handleStopWatchClick}/>
              </Tabs>
          </Paper>
          <div align='center' style={{padding:'20px'}}>
            <StopWatch/>
          </div>
        </div>

      <div className={this.state.timerClass}
        style={{border:'1px solid #ccc',margin:'0 450px'}}>
        <Paper>
            <Tabs style={{marginLeft:'20px'}}>
              <Tab label='Timer'
                style={{color:this.state.timerColor}} onClick={this.handleTimerClick}/>
              <Tab label='Stopwatch'
                style={{color:this.state.stopwatchColor}} onClick={this.handleStopWatchClick}/>
            </Tabs>
        </Paper>
        <div align='center' style={{padding:'20px'}}>
          <Timer/>
        </div>
      </div>
    </React.Fragment>
      )
    }
  }