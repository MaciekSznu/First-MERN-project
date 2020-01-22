import React from 'react';
import { Link } from 'react-router-dom';

// Link przekierowuje bez przeładowania strony
class NavBar extends React.Component {

  render() {
    return (
      <div>
          <Link to='/'>Home</Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/posts/new'>Add post</Link>
      </div>
    )
  }
}

export default NavBar;