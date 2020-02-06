import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SectionTitle from '../../common/SectionTitle/SectionTitle';

class SinglePost extends React.Component {

  componentDidMount() {
    const {loadSinglePost, id} = this.props;
    console.log(id);
    loadSinglePost(id);
  }

  render() {
    const { post, request} = this.props;

    return (
      <div>
        {(request.pending === true || request.succes === null) && <Spinner />}
        {(request.pending === false && request.succes === true && post) && (
          <article className="post-summary">
            <SectionTitle>{post.title}</SectionTitle>
            <HtmlBox>{post.content}</HtmlBox>
          </article>
        )}
        {(request.pending === false && request.error !== null) && <Alert variant={'error'}> {this.props.request.error} </Alert>}
      </div>
    );
  }
}

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })
  ),
  loadSinglePost: PropTypes.func.isRequired,
};

export default SinglePost;
