import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import Errors from '../error/errors_container';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
    this.props.clearErrors();
    if (this.props !== nextProps){
      this.setState({
        username: '',
        password: ''});
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  guestLogin(user){
    this.setState(user);
    this.handleSubmit();
  }

  render() {
    return (
      <div className="session-wrapper">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to D-Dot!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          <div className="login-form">
            <label></label>
            <Errors />
            <br/>
            <label>Username
              <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password
              <br/>
              <input type="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>

          <div>
            <input type="submit" value="Demo user" onClick={() => (this.guestLogin(
                  {username: "guest", password: "123456"}
                ))}>
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
