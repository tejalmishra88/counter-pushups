import { Component } from 'react'

class PushUps extends Component {
  // constructor() {
  //   super()
  //   // Create initial state value
  //   this.state = { count: 0 }
  // }

  // short-hand syntax for initialising state
  state = { count: 0, value: '', count1: 5,  }
  

  incrementCount = () => {
    console.log('Increment count')
    // setState will trigger a re-render automatically.
    this.setState({ count: this.state.count + 10 })
  }

  incrementCount1 = () => {
    console.log('Increment count')
    // setState will trigger a re-render automatically.
    this.setState({ count1: this.state.count1 + 5 })
  }

  decrementCount = () => {
    console.log('Decrement count')
    // setState will trigger a re-render automatically.
    this.setState({ count: this.state.count - 10 })
  }
  decrementCount1 = () => {
    console.log('Decrement count')
    // setState will trigger a re-render automatically.
    this.setState({ count1: this.state.count1 - 5 })
  }

  resetCount = () => {
    console.log('reset count')
    // setState will trigger a re-render automatically.
    this.setState({ count: 10 })
  }
  resetCount1 = () => {
    console.log('reset count')
    // setState will trigger a re-render automatically.
    this.setState({ count1: 8 })
  }

  setText = (e) => {
    console.log('typing something')
    this.setState({ value: e.target.value })
  }
  setText1 = (e) => {
    console.log('typing something')
    this.setState({ value: e.target.value })
  }

  render() {
    console.log('Rendering!')
    let message = ''
    if (this.state.count < 5) {
      message = 'You can do it!'
    } else if (this.state.count < 8) {
      message = 'You are doing so well!'
    } else if (this.state.count < 10) {
      message = 'Almost there!'
    } else {
      message = <strong>YOU DID IT!!!</strong>
    }

    return (
      <>
        <p>{this.state.count} pushups!</p>
        <p>{message}</p>
        <button onClick={this.incrementCount}>Add one</button>
        <button onClick={this.resetCount}>Reset</button>
        <button onClick={this.decrementCount}>Decrement one</button>
         <input type="text" onChange={this.setText} /><br></br>

         <p>{this.state.count1} pushups! karo</p>
        <button onClick={this.incrementCount1}>plus  one</button>
        <button onClick={this.resetCount1}>Preset</button>
        <button onClick={this.decrementCount1}>Go Down</button>
         <input type="text" onChange={this.setText} /><br></br>
         
        <p>{this.state.value}</p>
      </>
    )
  }
}

export default PushUps