import React from "react";
import { Link, withRouter } from "react-router-dom";
import GreetingContainer from '../greeting/greeting_container';
import UploadFormContainer from '../upload/upload_form_container';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false
    };

    this.handleModal = this.handleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.mainNav = this.mainNav.bind(this);
    // this.readFile = this.readFile.bind(this);
    }

  componentWillReceiveProps(newProps) {
    this.setState({ modalOpen: false });
  }


  handleModal(boolean = false) {
    this.setState({modalOpen: boolean});
  }

  openModal() {
    // this.setState({modalOpen: true});
    document.getElementById('upload-modal').show();
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
          <strong onClick={this.handleLogOut}  style={{margin: '4px'}}>Log Out</strong>
          <button onClick={this.props.uploadPhotos}>Upload</button>
        </div>
      </div>
    );
  }

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
