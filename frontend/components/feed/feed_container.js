
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Feed from './feed';
import { fetchAllPhotos } from '../../actions/photo_actions';

const msp = (state) => {

  return {
    photos: Object.values(state.entities.photos)
  };
};

const mdp = (dispatch) => {
  return {
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  };
};

export default withRouter(connect(
  msp,
  mdp
)(Feed));
