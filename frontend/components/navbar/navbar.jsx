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

          <button onClick={this.openModal}>Upload</button>
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>

            <h2>Im a modal!</h2>
            <p>modal modal modal modal modal</p>
            <p>mooooooooodal!</p>



          </Modal>
        </div>



      </div>
    );
  }
}
//
export default withRouter(NavBar);
