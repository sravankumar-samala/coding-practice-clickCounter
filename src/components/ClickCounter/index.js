// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {clickCount: 0}

  increaseCount = () => {
    this.setState(prevState => ({clickCount: prevState.clickCount + 1}))
  }

  render() {
    const {clickCount} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1>
            The Button has been clicked
            <span className="click-num"> {clickCount}</span> times
          </h1>
          <p>Click the button to increase the count</p>
          <button type="button" className="button" onClick={clickCount}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
