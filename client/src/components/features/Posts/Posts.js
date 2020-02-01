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
    const {posts} = this.props;

    return (
      <div>
        <PostsList posts={posts} />
        <Spinner />
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
