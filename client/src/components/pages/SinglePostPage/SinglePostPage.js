import React from 'react';
import SinglePost from '../../features/SinglePost/SinglePostContainer';

const SinglePostPage = ({match}) => (
  <div>
    <SinglePost id={match.params.id} />
  </div>
);

export default SinglePostPage;
