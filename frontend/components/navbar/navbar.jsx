import React from "react";
import { Link, withRouter } from "react-router-dom";

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
        <div class="topnav">
          <div class='sitename'> D-Dot </div>
          <div>Profile</div>
          <div>SignUp</div>
        </div>
    );
  }
}
//
export default withRouter(NavBar);
