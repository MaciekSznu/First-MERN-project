import { connect } from 'react-redux';
import { getPosts, loadPostsRequest } from '../../../redux/PostsRedux';
import Posts from './Posts';

// importujemy widok Posts, wstrzykujemy do niedo parametr posts (oddaje dane ze store) oraz loadPosts uruchamiający thunka loadPostsRequest

const mapStateToProps = state => ({
  posts: getPosts(state),
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest(),)
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);