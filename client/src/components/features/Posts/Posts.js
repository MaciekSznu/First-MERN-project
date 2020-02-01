import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';

class Posts extends React.Component {

  componentDidMount() {
    const {loadPosts} = this.props;
    loadPosts();
    // loadPosts to loadPostsRequest, po upływie zadeklarowanych 2s odpala dispatch(loadPosts(...)) i modysikuje store
  }

  render() {
    const {posts, request} = this.props;

    // Spinner is being rendered only if request.pending = true
    return (
      <div>
        {request.pending && <Spinner />}
        <PostsList posts={posts} />
      </div>
    );
  }
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};

export default Posts;
