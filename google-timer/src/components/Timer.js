import React from 'react'
import ReactDom from 'react-dom'
import TextField from '@material-ui/core/TextField'
import styles from './common.module.css'
import Popover from '@material-ui/core/Popover'
export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      verifySec:"00",
      verifyMin:"00",
      verifyHr:"00",
      min: "05",
      sec: "00",
      hr: "00",
      valueControl: "",
      keyValue: "",
      verify:false
    }
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.verify) {
        if (Number(this.state.sec) > 0 && Number(this.state.sec) <= 60&&Number(this.state.sec)!==0) {
          this.setState({
            sec: this.state.sec - 1
          })
        }
        if (Number(this.state.sec) > 60&&Number(this.state.min<=60)) {
          this.setState({
            sec: this.state.sec - 60,
            min: this.state.min + 1
          })
        }
        if (Number(this.state.sec) > 60&&Number(this.state.min>60)) {
          this.setState({
            sec: this.state.sec - 60,
            min: (this.state.min-60) + 1,
            hr:  this.state.hr+1
          })
        }
        if (Number(this.state.sec) == 0) {
          if (this.state.hr !== 0 || this.state.min !== 0) {
            this.setState({
              sec: 59,
              min: this.state.min - 1
            })
          } else {
            this.setState({
              sec: 0,
              verify:false
            })
          }
        }
        if (Number(this.state.min) > 60) {
          this.setState({
            min: this.state.min - 60,
            hr: this.state.hr + 1
          })
        }
        if (Number(this.state.min) == 0) {
          if (this.state.hr !== 0) {
            this.setState({
              min: 59,
              hr: this.state.hr - 1
            })
          } else {
            this.setState({min: 0})
          }
        }
        if (Number(this.state.hr) == 0) {
          this.setState({hr: 0})
        }
      }
    }, 1000)
  }
  handleStart = () => {
    this.setState({
      check:false,
      verify:true,
      min:Number(this.state.min),
      sec:Number(this.state.sec),
      hr:Number(this.state.hr),
      verifySec:this.state.sec,
      verifyMin:this.state.min,
      verifyHr:this.state.hr
    })
  }
  handleStop = () => {
    this.setState({
      min: this.state.min,
      sec: this.state.sec,
      hr: this.state.hr,
      verify:false
    })
  }
  handleReset = () => {
    this.setState({
      min: this.state.verifyMin,
      sec: this.state.verifySec,
      hr: this.state.verifyHr,
      verify:false,
      valueControl: "",
      keyValue: "",
      check:false
    })
  }
  handleKeypress = (e) => {
    let k = e.which
    this.setState({keyValue: k})
  }
  handleDivClick=()=>{
    this.setState({
      check:true,
      hr:this.state.hr,
      min:this.state.min,
      sec:this.state.sec,
    })
  }
  handleChangeInput = (e) => {
    if ((this.state.keyValue >= 48 && this.state.keyValue <= 57) || this.state.keyValue == 8) {
      let input = e.target.value.slice(0, 6)
      this.setState({valueControl: input})
      if (input.length == 1 || input.length == 2) {
        this.setState({sec: input, min: 0, hr: 0})
      } else if (input.length == 3) {
        this.setState({
          sec: input.slice(1, input.length),
          min: input.slice(0, 1),
          hr: 0
        })
      } else if (input.length == 4) {
        this.setState({
          sec: input.slice(2, input.length),
          min: input.slice(0, 2),
          hr: 0
        })
      } else if (input.length == 5) {
        this.setState({
          sec: input.slice(3, input.length),
          min: input.slice(1, 3),
          hr: input.slice(0, 1)
        })
      } else if (input.length == 6) {
        this.setState({
          sec: input.slice(4, input.length),
          min: input.slice(2, 4),
          hr: input.slice(0, 2)
        })
      } else if (input.length == 0) {
        this.setState({sec: 0})
      }
    }
  }
  render(){
     if(this.state.check){
      return(
      <div>
        <TextField autoFocus value={this.state.valueControl} placeholder="00h 00m 00s"
          align="center" onKeyPress={this.handleKeypress}
           onChange={this.handleChangeInput}
           style={{direction:'rtl',marginTop:'30px',marginBottom:'30px'}}/> <br/>
         <button style={{backgroundColor:'#4885ed',height:'30px',width:'60px',color:'white'}}
           onClick={this.handleStart}>Start</button>
        <button onClick={this.handleReset} >Reset</button>
      </div>
      )
    }else if(this.state.verify){
       return(
         <div>
           <div onClick={this.handleDivClick} className={styles.pointer}
             style={{paddingBottom:'5px',textAlign:'right',marginTop:'30px',fontSize:'30px',marginBottom:'30px',width:'180px'}}>
             {this.state.hr}<span>h</span>  {this.state.min}<span>m</span>  {this.state.sec}<span>s</span></div>
           <button style={{backgroundColor:'#4885ed',height:'30px',width:'60px',color:'white'}} onClick={this.handleStop}>Stop</button>
           <button onClick={this.handleReset}>Reset</button>
         </div>
       )
     }{
      return(
        <div>
          <div onClick={this.handleDivClick} className={styles.pointer}
            style={{marginTop:'10px',paddingBottom:'5px',textAlign:'right',marginTop:'30px',fontSize:'30px',marginBottom:'30px',width:'180px'}}>
            {this.state.hr}<span>h</span>  {this.state.min}<span>m</span>  {this.state.sec}<span>s</span></div>
          <button style={{backgroundColor:'#4885ed',height:'30px',width:'60px',color:'white'}} onClick={this.handleStart}>Start</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      )
    }
  }
}