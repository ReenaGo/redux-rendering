const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const sortLikes = document.getElementById('sortLikes');
sortLikes.addEventListener('click', e => dispatch({type:"SORT_BY_LIKES"}))

const sortByRetweets = document.getElementById('sortRetweets');
sortByRetweets.addEventListener('click', e => dispatch({type:"SORT_BY_RETWEETS"}))

const sortByReplies = document.getElementById('sortReplies');
sortByReplies.addEventListener('click', e => dispatch({type:"SORT_BY_REPLIES"}))