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
        <nav>
          <div class='sitename'> D-Dot </div>

          <div>
            search
          </div>

          <div>
            profile_pic
          </div>
        </nav>

        // <search></search>
        // <profile_pic></profile_pic>
      // </div>
    );
  }
}
//
export default withRouter(NavBar);
