import UploadForm from './upload_form';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser.username,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    createPhoto: (photo) => dispatch(createPhoto(photo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
