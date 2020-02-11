import { connect } from 'react-redux';
import { getPosts, getRequest, loadPostsRequest, resetRequest } from '../../../redux/postsRedux';
import Posts from './Posts';

// importujemy widok Posts, wstrzykujemy do niedo parametr posts (oddaje dane ze store) oraz loadPosts uruchamiający thunka loadPostsRequest

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest()),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);