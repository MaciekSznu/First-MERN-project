import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Post from './Post';
import Button from '../../common/Button/Button';

import { FacebookProvider, Comments, Share, ShareButton } from 'react-facebook';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../../config';



class SinglePost extends React.Component {

  componentDidMount() {
    const { loadSinglePost, id } = this.props;
    loadSinglePost(id);
  }

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  }


  render() {
    const { post, request, location} = this.props;

    const renderLoader = () => ((request.pending === true || request.succes === null) && <Spinner />);

    const renderPost = () => ((request.pending === false && request.succes === true && post !== undefined && post !== null) && (
      <>
      <Post title={post.title} author={post.author} content={post.content}/>

      <FacebookProvider appId="909115412938215">
        <Share href={`${BASE_URL}${location.pathname}`}>
          {({handleClick, loading}) => (
            <Button disabled={loading} onClick={handleClick} >
            Share
          </Button>
          )}
        </Share>
        <Comments href={`${BASE_URL}${location.pathname}`} />
      </FacebookProvider>
      </>
    ));

    const renderInfo = () => ((request.pending === false && request.succes === true && (post === undefined || post === null)) &&
      <Alert variant={'error'}> Post o takim id nie istnieje! </Alert>);

    const renderError = () => ((request.pending === false && request.error !== null) && <Alert variant={'error'}> {this.props.request.error} </Alert>);

    return (
      <div>
        {renderLoader()}
        {renderPost()}
        {renderInfo()}
        {renderError()}
      </div>
    );
  }
}

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })
  ),
  loadSinglePost: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props} />) ;
