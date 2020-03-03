import React from 'react';
import { PropTypes } from 'prop-types';
import Post from '../SinglePost/Post';
import Spinner from '../../common/Spinner/Spinner';
import NotFound from '../../pages/NotFound/NotFoundPage';

class RandomPost extends React.Component {

  componentDidMount() {
    const { loadRandomPost } = this.props;
    loadRandomPost();
  }

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  }
 
  render() {
    const { randomPost, request } = this.props;
    return (
      <div>
        {(request.pending && <Spinner />) || (randomPost && <Post title={randomPost.title} author={randomPost.author} content={randomPost.content} />) || (
          <NotFound />
        )}
      </div>
    );
  }
}

RandomPost.propTypes = {
  loadRandomPost: PropTypes.func.isRequired,
};

export default RandomPost;