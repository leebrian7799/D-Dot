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

  handleSubmit(e, user) {
    e.preventDefault();
    user = user || this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  guestLogin(e, user){
    this.setState(user);
    this.handleSubmit(e, user);
  }

  render() {
    return (
      <div className="session-wrapper" style={{backgroundColor: '#a7a8aa'}}>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="log-in-greeting">
            <span className="greeting-header">Welcome to D-Dot!</span>
            <span className="session-redirect">Please {this.props.formType} or {this.navLink()}</span>
          </div>

          <div className="login-form">
            <label className = "username">Username</label>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />

            <label className = "password">Password</label>
            <input type="Password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />

            <Errors/>
            <input type="submit" className="login_button" value="Submit" />
          </div>

          <div>
            {
              this.props.formType === 'login' ?
                <input type="submit" value="Demo user" className="demo_user" onClick={(e) => (this.guestLogin(e,
                    {username: "guest", password: "123456"}
                  ))}>
                </input>
              : null
            }
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
