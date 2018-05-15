import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';
import { fetchAllPhotos } from '../../actions//photo_actions';


const mapStateToProps = (state, ownProps) => {
  let currentUsername;
  if (state.session.currentUser) {
    currentUsername = state.session.currentUser.username;
  }
  return {
    currentUser: Boolean(state.session.currentUser),
    currentUsername: currentUsername,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
