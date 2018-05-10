import React from "react";
import { Link, withRouter } from "react-router-dom";
import GreetingContainer from '../greeting/greeting_container';
class NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidMount() {
//   }
//
//
//   render() {
//
//     return <h1>navbar</h1>;
//   }
  render(){
    return (
      <div id="navbar">
        <div>
          <a href="#home" class="logo"> D-Dot </a>
        </div>

        <div>
        </div>
          <a href="#news">Discover</a>
          <a href="#contact">About</a>
          <a href="#contact">Blog</a>
          <a href="#contact">Marketplace</a>
          <a href="#contact">Business</a>
          <button>Log In</button>
          <button>Sign Up</button>

      </div>
      // <div class="">
      //   <nav class="topnav">
      //     <div class="logo" href="#"> D-Dot </div>
      //     <ul>
      //         <li>Test</li>
      //         <li>Test</li>
      //     </ul>
      //   </nav>
      // </div>

    );
  }
}
//
export default withRouter(NavBar);
