import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Post from './Post';

class SinglePost extends React.Component {

  componentDidMount() {
    const {loadSinglePost, match} = this.props;
    console.log(match.params.id);
    loadSinglePost(match.params.id);
  }

  render() {
    const { post, request} = this.props;

    return (
      <div>
        {(request.pending === true || request.succes === null) && <Spinner />}
        {(request.pending === false && request.succes === true && post) && <Post post={post} />}
        {(request.pending === false && request.error !== null) && <Alert variant={'error'}> {request.error} </Alert>}
      </div>
    );
  }
}

SinglePost.propTypes = {
    SinglePost: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  loadSinglePost: PropTypes.func.isRequired,
};

export default SinglePost;
