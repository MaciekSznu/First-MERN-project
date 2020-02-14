import { connect } from 'react-redux';
import { getRandomPost, loadRandomPostRequest, getRequest } from '../../../redux/postsRedux';
import RandomPost from './RandomPost';

const mapStateToProps = state => ({
  randomPost: getRandomPost(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadRandomPost: (id) => dispatch(loadRandomPostRequest(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RandomPost);