import React from "react";
import { Link, withRouter } from "react-router-dom";
import GreetingContainer from '../greeting/greeting_container';
const Modal = require('react-modal');

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };

    this.handleModal = this.handleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.mainNav = this.mainNav.bind(this);
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


  mainNav(){
    return (
      <div className="navbar">
        <div >
          <Link to="/" className="logo" > D-Dot </Link>
        </div>

        <div>
          <Link to="/login" className="navbar-link" style={{ textDecoration: 'none', color: 'white' }}>Log In</Link>
          <Link to="/signup" className="navbar-link MyButton" >Sign Up</Link>

          <button onClick={this.openModal}>Upload</button>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
          </Modal>
        </div>
      </div>
    );
  }

  loggedIn(){
    return (
      <div className="navbar">
        <div >
          <Link to="/" className="logo" > D-Dot </Link>
        </div>

        <div>
          <ul className="plainWhiteText">
            <li onClick={this.handleLogOut} style={{color: 'white' }}>Log Out</li>
          </ul>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
          </Modal>
        </div>
      </div>
    );
  }
  // <button onClick={this.openModal}>Upload</button>

  render(){
    let currentNavBar;
    if (this.props.currentUser) {
      currentNavBar = this.loggedIn();
    } else {
      currentNavBar = this.mainNav();
    }
    return currentNavBar;
  }
}
//
export default withRouter(NavBar);
