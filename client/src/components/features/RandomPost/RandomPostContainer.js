import { connect } from 'react-redux';
import { withRouter } from 'react-router'
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(RandomPost));

