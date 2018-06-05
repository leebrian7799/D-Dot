import React from 'react';

class Errors extends React.Component {
  constructor(props) {
    super(props);
    this.renderErrors = this.renderErrors.bind(this);
  }

  renderErrors() {
    let errors = this.props.errors.map(
      (error, i) => (<li key={`error-${i}`}>{error}</li>) );
    return(
      <ul  className= "errors">
        {errors}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderErrors()}
      </div>
    );
  }
}

export default (Errors);
