import React from "react";
import { Link, withRouter } from "react-router-dom";
import GreetingContainer from '../greeting/greeting_container';
class NavBar extends React.Component {
  render(){
    return (
      <div className="navbar">
        <div >
          <Link to="/" className="logo" > D-Dot </Link>
        </div>

        <div>
          <Link to="/login" className="navbar-link">Log In</Link>
          <Link to="/signup" className="navbar-link MyButton" >Sign Up</Link>
        </div>

      </div>



    );
  }
}
//
export default withRouter(NavBar);
