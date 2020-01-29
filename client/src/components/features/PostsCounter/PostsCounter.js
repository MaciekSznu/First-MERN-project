import React from 'react';

class PostsCounter extends React.Component {

  render() {
    const { amount } = this.props;
    console.log(this.props);
    const amountInfo = amount > 0 ? amount : '- no posts -';
    return (
      <div>Posts amount: {amountInfo} </div>
    );
  }
}

export default PostsCounter;