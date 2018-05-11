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

        <div className='navbar-text'>
          <p>Get inspired and share your best photos</p>
          <p>Find your home among the world's best photographers.</p>
          <Link to='/signup' className='front-page-signup-button'>Join D-Dot</Link>
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
