import Photo from './photo';
import { connect } from 'react-redux';
import { closeModal, openModal} from '../../actions/modal_actions'
import FeedItemContainer from '../feed/feed_item_container';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser.username,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    closeModal: () => dispatch(closeModal()),
    displayPhoto: () => dispatch(openModal('displayPhoto'))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedItemContainer);
