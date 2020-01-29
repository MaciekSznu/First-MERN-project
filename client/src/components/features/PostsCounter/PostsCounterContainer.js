import { connect } from 'react-redux';
import { getPostsAmount } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';


const mapStateToProps = state => ({
  amount: getPostsAmount(state),
});

export default connect(mapStateToProps)(PostsCounter);