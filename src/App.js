import React from "react";
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
    // console.log("constructor called")

  }

  // handleClick = () => {

  //   console.log('clicked')
  // }
  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2').then((response) => {
      response.json().then((result) => {
        console.log(result)
      })
    })
    // console.log("mounted")
  }



  render() {
    return (
      <div>
        <h1>Hello world</h1>

        {/* 
        <button onClick={this.handleClick}>Click me</button> */}

      </div>
    )
  }
}
export default App;
