import { connect } from 'react-redux';
import { getRequest, addPostRequest, resetRequest, editPostRequest } from '../../../redux/postsRedux';
import PostForm from './PostForm';

const mapStateToProps = state => ({
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: (post) => dispatch(addPostRequest(post)),
  editPost: (post) => dispatch(editPostRequest(post)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);