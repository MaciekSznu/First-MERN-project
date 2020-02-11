import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component {

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  }

  render() {
    const {posts, request, error} = this.props;

    // Spinner is being rendered only if request.pending = true
    return (
      <div>
        {(request.pending === true || request.succes === null) && <Spinner />}
        {(request.pending === false && request.succes === true && posts.length > 0) && <PostsList posts={posts} />}
        {(request.pending === false && request.error !== null) && <Alert variant='error'> {error} </Alert>}
        {(request.pending === false && request.succes === true && posts.length === 0) && <Alert variant='info'> No posts </Alert>}
      </div>
    );
  }
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};

export default Posts;
