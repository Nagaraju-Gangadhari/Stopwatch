// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0}
  formatTime = seconds => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`
  }
  start = () => {
    this.timerId = setInterval(this.tick, 1000)
  }
  stop = () => {
    clearInterval(this.timerId)
  }
  reset = () => {
    this.setState({seconds: 0})
  }
  tick = () => {
    this.setState(prevState => {
      return {seconds: prevState.seconds + 1}
    })
  }
  render() {
    const {seconds} = this.state
    return (
      <div className="bgcontainer">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div className="firstEl">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="icon"
            />
            <p className="para">Timer</p>
          </div>
          <div>
            <h1 className="para2">{this.formatTime(seconds)}</h1>
          </div>
          <div className="thirdEl">
            <button className="button1" onClick={this.start}>
              Start
            </button>
            <button className="button2" onClick={this.stop}>
              Stop
            </button>
            <button className="button3" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
