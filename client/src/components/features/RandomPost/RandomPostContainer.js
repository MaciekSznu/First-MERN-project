import { connect } from 'react-redux';
import { getRandomPost, loadRandomPostRequest, getRequest, resetRequest } from '../../../redux/postsRedux';
import RandomPost from './RandomPost';

const mapStateToProps = state => ({
  randomPost: getRandomPost(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadRandomPost: () => dispatch(loadRandomPostRequest()),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RandomPost);