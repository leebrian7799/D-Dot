import { connect } from 'react-redux';
import { receiveErrors, clearErrors } from '../../actions/error_actions';
import Errors from './errors';


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Errors);
