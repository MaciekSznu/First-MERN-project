import React from 'react';
import EditPost from '../../features/EditPost/EditPostContainer';

const EditPostPage = ({match}) => (
  <div>
    <EditPost id={match.params.id} />
  </div>
);

export default EditPostPage;
 