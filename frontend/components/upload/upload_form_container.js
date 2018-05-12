import UploadForm from './upload_form';
import { connect } from 'react-redux';


const map
  return {
    currentUser = state.session.currentUser.username;
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
