
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Feed from './feed';
import { fetchAllPhotos } from '../../actions/photo_actions';

const msp = (state) => {
  // let sessionUser = state.session.currentUser ? state.session.currentUser : null;
  //
  // let currentUser;
  // if (Object.values(state.entities.users).length >= 1) {
  //   let firstKey = Object.keys(state.entities.users)[0];
  //   currentUser = state.entities.users[firstKey];
  // }

  return {
    // sessionUser: sessionUser,
    // currentUser: currentUser,
    // allUsers: state.entities.users,
    photos: Object.values(state.entities.photos)
  };
};

const mdp = (dispatch) => {
  return {
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    // fetchAllUsers: () => dispatch(fetchAllUsers())
    // fetchUser: (user) => dispatch(fetchUser(user))
  };
};

export default withRouter(connect(
  msp,
  mdp
)(Feed));
