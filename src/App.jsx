import React from "react";
import "./App.css";

const App = () => {
  return <h1>Hello ojhal</h1>;
};
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       user: null
//     }
//     // console.log("constructor called")

//   }

//   // handleClick = () => {

//   //   console.log('clicked')
//   // }
//   componentDidMount() {
//     fetch('https://reqres.in/api/users?page=2').then((response) => {
//       response.json().then((result) => {
//         // console.log(result.data)
//         this.setState({ user: result.data })
//       })
//     })
//     // console.log("mounted")
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//         {
//           this.state.user ?
//             this.state.user.map((item, i) =>
//               <div><p>{i}--{item.first_name}--{item.last_name}--{item.email}</p></div>
//             )
//             :

//             null
//         }

//       </div>
//     );
//   }
// }
export default App;
