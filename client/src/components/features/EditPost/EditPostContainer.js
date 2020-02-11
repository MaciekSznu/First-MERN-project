import { connect } from 'react-redux';
import { getRequest, resetRequest, getPostToEdit, loadPostToEditRequest } from '../../../redux/postsRedux';
import EditPost from './EditPost';

const mapStateToProps = state => ({
  setPostToEdit: getPostToEdit(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadPostToEdit: (id) => dispatch(loadPostToEditRequest(id)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);