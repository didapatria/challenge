import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props){
    super(props);
    //Fill this line #1
    this.state = {
      count: 0
    };
  }

  increment = () => {
    //Fill this line #2
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    //Fill this line #3
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <>
        <div className='box'>
          <h1>{this.state.count}</h1>
        </div>
        <div className='boxCenter'>
          <button className='button-5' onClick={() => this.increment()}>+</button>
          <button className='button-5' onClick={() => this.decrement()}>-</button>
        </div>
      </>
    )
  }
}