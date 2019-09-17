const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const heightButton = document.getElementById('height');
heightButton.addEventListener('click', e => dispatch({ type: "INCREASE_HEIGHT" }));

const widthButton = document.getElementById('width');
widthButton.addEventListener('click', e => dispatch({ type: "INCREASE_WIDTH" }));

const redButton = document.getElementById('red');
redButton.addEventListener('click', e => dispatch({ type: "CHANGE_COLOR", color: 'red'}));

const blueButton = document.getElementById('blue');
blueButton.addEventListener('click', e => dispatch({ type: "CHANGE_COLOR", color: 'blue'}));