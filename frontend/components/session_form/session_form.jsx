import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
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

  renderErrors() {
  
    let errors = this.props.errors.map((error, i) => (<li key={`error-${i}`}>{error}</li>) );
    return(
      <ul>
        {errors}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-wrapper">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to D-Dot!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <label></label>
            <br/>
            <label>Email or Username
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
        </form>
      </div>


    );
  }
}

export default withRouter(SessionForm);
