import React from "react";
import { Link, withRouter } from "react-router-dom";
import GreetingContainer from '../greeting/greeting_container';
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };

    this.handleModal = this.handleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    }

  componentWillReceiveProps(newProps) {
    this.setState({ modalOpen: false });
  }


  handleModal(boolean = false) {
    this.setState({modalOpen: boolean});
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push('/'));
  }

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
