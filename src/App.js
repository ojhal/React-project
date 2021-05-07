import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called")

  }
  handleClick = () => {

    console.log('clicked')
  }
  componentDidMount() {
    console.log("mounted")
  }



  render() {
    console.log("render called")

    return (
      <div>
        <h1>Hello world</h1>


        <button onClick={this.handleClick}>Click me</button>

      </div>
    )
  }
}

