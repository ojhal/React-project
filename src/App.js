import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  handleClick = () => {

    console.log('clicked')
  }



  render() {
    <div>
      <h1>hello world</h1>
    </div>
    return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxqcJ9gupPODmqelu9fEvNrzc1GAt7yAR3i4AMt3Wh9vgvyEiKRQ0r24LeSb4Kfk4g34&usqp=CAU" />

        <button onClick={this.handleClick}>Click me</button>

      </div>
    )
  }
}

