import React from 'react';
import { PropTypes } from 'prop-types';
import PostForm from '../PostForm/PostFormContainer';
import Spinner from '../../common/Spinner/Spinner';
//import NotFound from '../../pages/NotFound/NotFoundPage';

class EditPost extends React.Component {

  componentDidMount() {
    const { loadPostToEdit, id } = this.props;
    loadPostToEdit(id);
  };

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  };

  render() {
    const { setPostToEdit, request } = this.props;

  return <div>{(request.success && <PostForm setPostToEdit={setPostToEdit} />) || <Spinner />}</div>
  }
};

EditPost.propTypes = {
  loadPostToEdit: PropTypes.func.isRequired,
};

export default EditPost;