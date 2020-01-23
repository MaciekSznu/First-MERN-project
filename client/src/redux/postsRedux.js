// SELECTORS
export const getPosts = ({posts}) => posts;

// ACTIONS
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const loadPosts = payload ({ payload, type: LOAD_POSTS });

//action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

// INITIAL STATE
const initialState = [];

// THUNKS
// thunk must return function with dispatch as parameter
export const loadPostsRequest = () => {
  return dispatch => {

    console.log('Request started...');
    setTimeout(() => {
      const arr = [{ id: 'a3fssdc1', title: 'Test', content: 'Lorem Ipsum' }];
      dispatch(loadPosts(arr));
      console.log('Request finished after 2 sec');
    }, 2000);
  };
};

// REDUCER
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
      return [ ...action.payload ];
    default:
      return statePart;
  }
};