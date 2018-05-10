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
      <div className="navbar">
        <div>
          <Link to="#home" className="logo" > D-Dot </Link>
        </div>


        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>

      </div>

      // <div float="right">

      //   <a href="#contact">Business</a>
      //   <button>Log In</button>
      //   <button>Sign Up</button>
      // </div>

    );
  }
}
//
export default withRouter(NavBar);
