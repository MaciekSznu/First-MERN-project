import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import './PostSummary.scss';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import cutText from './CutText';
import { Link } from 'react-router-dom';

const PostSummary = ({id, title, author, content}) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <p>Author: {author}</p>
    <HtmlBox>{cutText(content, 250)}</HtmlBox>
    <Button variant="primary">
      <Link to={`/posts/${id}`}>
        Read more
      </Link>
    </Button>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
};

export default PostSummary;


