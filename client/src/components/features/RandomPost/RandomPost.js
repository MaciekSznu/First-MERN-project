import React from 'react';
import { PropTypes } from 'prop-types';
import Post from '../SinglePost/Post';
import Spinner from '../../common/Spinner/Spinner';
import NotFound from '../../pages/NotFound/NotFoundPage';

class RandomPost extends React.Component {

  componentDidMount() {
    const { loadRandomPost, id } = this.props;
    loadRandomPost(id);
  }

  render() {
    const { randomPost, request } = this.props;
    return (
      <div>
        {(request.pending && <Spinner />) || (randomPost && <Post post={randomPost} />) || (
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