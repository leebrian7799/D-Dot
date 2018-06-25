import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Comment from './feed';
import { fetchAllComments } from '../../actions/comment_actions';

const msp = (state) => {
  return {
    comments: Object.values(state.comments)
  };
};

const mdp = (dispatch) => {
  return {
    fetchAllComments: () => dispatch(fetchAllComments()),
  };
};

export default withRouter(connect(
  msp,
  mdp
)(comment));
