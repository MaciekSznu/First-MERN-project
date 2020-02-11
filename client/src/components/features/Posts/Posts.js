import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

  componentDidMount() {
    const { loadPostsByPage, initialPage = 1, postsPerPage } = this.props;
    loadPostsByPage(initialPage, postsPerPage);
  }

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  }

  loadPostsPage = (page) => {
    const { loadPostsByPage, postsPerPage } = this.props;
    loadPostsByPage(page, postsPerPage);
  }

  render() {
    const { posts, request, error, pages, presentPage, pagination } = this.props;
    const { loadPostsPage } = this;

    let isPagination = () => pagination === undefined ? isPagination == true : isPagination == false;
    
    return (
      <div>
        {(request.pending === true || request.succes === null) && <Spinner />}
        {(request.pending === false && request.succes === true && posts.length > 0) && <PostsList posts={posts} />}
        {(request.pending === false && request.error !== null) && <Alert variant='error'> {error} </Alert>}
        {(request.pending === false && request.succes === true && posts.length === 0) && <Alert variant='info'> No posts </Alert>}
        {isPagination && <Pagination pages={pages} onPageChange={loadPostsPage} initialPage={presentPage} />}
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
