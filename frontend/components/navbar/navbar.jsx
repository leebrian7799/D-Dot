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
        <div className="leftnav">
        <Link to="/" className="link-text logo" > D-Dot </Link>

        </div>
        {
          this.props.formType === 'login' ?
          <input type="submit" value="Demo user" onClick={() => (this.guestLogin(
              {username: "guest", password: "123456"}
            ))}>
          </input>
          : null
        }

        <div className="rightnav">
          {
            (this.props.location.pathname === '/signup' || this.props.location.pathname === '/') ?
              <Link to="/login" className="link-text navbar-link signup" style={{ textDecoration: 'none', color: 'white' }}>Log In</Link>
              : null
          }
          {
            (this.props.location.pathname === '/login' || this.props.location.pathname === '/') ?
            <Link to="/signup" className="link-text navbar-link signup" >Sign Up</Link>
              : null
          }

        </div>
      </div>
    );
  }

  loggedIn(){
    return (
      <div className="navbar">
        <div className="leftnav">
          <Link className='link-text logo loggedIn' to="/" >D-Dot</Link>
        </div>

        <div className="rightnav">
          <strong onClick={this.handleLogOut} className = "signup">Log Out</strong>
          <button onClick={this.props.uploadPhotos} className = "upload">Upload</button>

          <div className="user-profile-options">
            <div className="navbar-profile-photo-container">
              <div className="navbar-profile-photo-image">
                <div />
              </div>
            </div>

          </div>


        </div>
      </div>
    );
  }



  // <div className="user-profile-dropdown">
  //   <ul>
  //     <li className = "signup">{this.props.currentUsername}</li>
  //     <li onClick={this.handleProfileLink} className = "signup">Profile</li>
  //   </ul>
  // </div>

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
