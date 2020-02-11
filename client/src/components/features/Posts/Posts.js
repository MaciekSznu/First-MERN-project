import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

  componentDidMount() {
    const { loadPostsByPage } = this.props;
    loadPostsByPage();
  }

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  }

  loadPostsPage = (page) => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
  }

  render() {
    const { posts, request, error, pages, presentPage } = this.props;
    const { loadPostsPage } = this;

    // Spinner is being rendered only if request.pending = true
    return (
      <div>
        {(request.pending === true || request.succes === null) && <Spinner />}
        {(request.pending === false && request.succes === true && posts.length > 0) && <PostsList posts={posts} />}
        {(request.pending === false && request.error !== null) && <Alert variant='error'> {error} </Alert>}
        {(request.pending === false && request.succes === true && posts.length === 0) && <Alert variant='info'> No posts </Alert>}
        <Pagination pages={pages} onPageChange={loadPostsPage} />
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
  loadPostsByPage: PropTypes.func.isRequired,
};

export default Posts;
